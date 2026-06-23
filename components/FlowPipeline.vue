<template>
  <div class="fp-wrap">
    <!-- 上排：步骤 1~5 -->
    <div class="fp-row">
      <template v-for="(step, i) in topRow" :key="'t'+i">
        <div
          class="fp-node"
          :class="stepStateClass(i)"
        >
          <div class="fp-num" :class="`fp-num--${step.variant||'indigo'}`">{{ step.num }}</div>
          <div class="fp-info">
            <div class="fp-skill">{{ step.skill }}</div>
            <div class="fp-label">{{ step.label }}</div>
            <div v-if="isRevealed(i)" class="fp-prod">{{ step.product }}</div>
          </div>
        </div>
        <div v-if="i < topRow.length - 1" class="fp-arrow fp-arrow--right" :class="{ 'fp-arrow--on': isRevealed(i) }">→</div>
      </template>
    </div>
    <!-- 连接弧 -->
    <div class="fp-bridge">
      <div class="fp-bridge-line" :class="{ 'fp-bridge--on': isRevealed(topRow.length - 1) }"></div>
      <div class="fp-bridge-arrow" :class="{ 'fp-arrow--on': isRevealed(topRow.length - 1) }">↓</div>
    </div>
    <!-- 下排：步骤 10~6（正向 flex，数组已 reverse，形成 U 型回流，箭头指向左=流向下一个） -->
    <div class="fp-row">
      <template v-for="(step, i) in bottomRow" :key="'b'+i">
        <div
          class="fp-node"
          :class="stepStateClass(bottomOrigIdx(i))"
        >
          <div class="fp-num" :class="`fp-num--${step.variant||'indigo'}`">{{ step.num }}</div>
          <div class="fp-info">
            <div class="fp-skill">{{ step.skill }}</div>
            <div class="fp-label">{{ step.label }}</div>
            <div v-if="isRevealed(bottomOrigIdx(i))" class="fp-prod">{{ step.product }}</div>
          </div>
        </div>
        <div v-if="i < bottomRow.length - 1" class="fp-arrow" :class="{ 'fp-arrow--on': isRevealed(bottomOrigIdx(i)) }">←</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, toRef } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  clicks: {
    type: Number,
    default: undefined,
  },
})

const topRow = computed(() => props.steps.slice(0, 5))
const bottomRow = computed(() => props.steps.slice(5, 10).reverse())

// 同步注入 Slidev ClicksContext（key 与 @slidev/client/constants 一致）
let slidevClicks = null
try {
  const clicksContextRef = inject('$$slidev-clicks-context', null)
  if (clicksContextRef?.value) {
    const ctx = clicksContextRef.value
    slidevClicks = toRef(ctx, 'current')
    // 注册点击需求
    const totalNeeded = props.steps.length
    const info = ctx.calculateSince('+1', totalNeeded)
    ctx.register('flow-pipeline', info)
  }
} catch {
  // 非 Slidev 环境
}

const effectiveClicks = computed(() => {
  if (props.clicks !== undefined) return props.clicks
  return slidevClicks?.value ?? 0
})

function isRevealed(index) {
  return effectiveClicks.value > index
}

function bottomOrigIdx(displayIdx) {
  return topRow.value.length + (bottomRow.value.length - 1 - displayIdx)
}

function stepStateClass(index) {
  if (effectiveClicks.value > index + 1) return 'fp-node--done'
  if (effectiveClicks.value === index + 1) return 'fp-node--active'
  return 'fp-node--pending'
}
</script>

<style scoped>
.fp-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;
  overflow: hidden;
}

.fp-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: nowrap;
}

.fp-bridge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 12%;
}

.fp-bridge-line {
  width: 2px;
  height: 12px;
  background: rgba(255,255,255,0.08);
  border-radius: 1px;
  transition: background 0.5s ease;
}

.fp-bridge--on {
  background: rgba(129,140,248,0.4);
}

.fp-bridge-arrow {
  font-size: 10px;
  color: rgba(148,163,184,0.25);
  transition: color 0.5s ease;
}

.fp-node {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  border-radius: 10px;
  padding: 6px 8px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
  flex: 1;
  max-width: 160px;
  cursor: default;
}

.fp-node:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.fp-node--pending {
  opacity: 0.3;
}

.fp-node--pending:hover {
  opacity: 0.5;
}

.fp-node--active {
  background: linear-gradient(180deg, rgba(129,140,248,0.14), rgba(129,140,248,0.05));
  border-color: rgba(129,140,248,0.45);
  box-shadow: 0 0 14px rgba(129,140,248,0.12);
  animation: fpGlowPulse 2s ease-in-out infinite;
}

.fp-node--active:hover {
  box-shadow: 0 0 20px rgba(129,140,248,0.2);
  transform: translateY(-2px);
}

.fp-node--done {
  background: linear-gradient(180deg, rgba(74,222,128,0.08), rgba(74,222,128,0.03));
  border-color: rgba(74,222,128,0.22);
}

.fp-node--done:hover {
  border-color: rgba(74,222,128,0.35);
  box-shadow: 0 4px 14px rgba(74,222,128,0.08);
}

.fp-num {
  font-size: 10px;
  font-weight: 800;
  font-family: 'JetBrains Mono', monospace;
  min-width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: #94a3b8;
  transition: all 0.35s;
  flex-shrink: 0;
}

.fp-num--indigo { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3); color: #a5b4fc; }
.fp-num--cyan   { background: rgba(34,211,238,0.15); border-color: rgba(34,211,238,0.3); color: #67e8f9; }
.fp-num--green  { background: rgba(74,222,128,0.15); border-color: rgba(74,222,128,0.3); color: #86efac; }
.fp-num--amber  { background: rgba(251,191,36,0.15); border-color: rgba(251,191,36,0.3); color: #fde68a; }
.fp-num--purple { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.3); color: #c4b5fd; }

.fp-node--done .fp-num {
  background: rgba(74,222,128,0.18);
  border-color: rgba(74,222,128,0.35);
  color: #86efac;
}

.fp-node--active .fp-num {
  background: rgba(129,140,248,0.25);
  border-color: rgba(129,140,248,0.5);
  color: #c7d2fe;
  animation: fpNumPulse 1.5s ease-in-out infinite;
}

.fp-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.fp-skill {
  font-size: 11px;
  font-weight: 700;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fp-label {
  font-size: 9px;
  color: #94a3b8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1px;
}

.fp-prod {
  font-size: 8px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: fpReveal 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fp-arrow {
  font-size: 12px;
  color: rgba(148,163,184,0.2);
  flex-shrink: 0;
  transition: color 0.5s ease, transform 0.3s ease;
}

.fp-arrow--on {
  color: rgba(129,140,248,0.6);
  animation: fpArrowPulse 1.8s ease-in-out infinite;
}

@keyframes fpReveal {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fpGlowPulse {
  0%, 100% { box-shadow: 0 0 14px rgba(129,140,248,0.12); }
  50%      { box-shadow: 0 0 22px rgba(129,140,248,0.22); }
}

@keyframes fpNumPulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}

@keyframes fpArrowPulse {
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1; }
}
</style>
