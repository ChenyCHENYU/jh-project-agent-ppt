<template>
  <div class="ct-wrap" :class="{ 'ct-wrap--typing': !isComplete && visibleCount > 0 }">
    <div v-if="filename" class="ct-header">
      <span class="ct-fname">{{ filename }}</span>
      <span v-if="showProgress" class="ct-prog">{{ visibleCount }} / {{ totalLines }}</span>
    </div>
    <div class="ct-body">
      <div v-for="(line, i) in visibleLines" :key="i" class="ct-line" :class="{ 'ct-line--new': i >= prevVisibleCount }">
        <span class="ct-ln">{{ i + 1 }}</span>
        <span class="ct-code">{{ line }}</span>
      </div>
      <span v-if="!isComplete && visibleCount > 0" class="ct-cursor">▎</span>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, toRef } from 'vue'

const props = defineProps({
  code: { type: String, required: true },
  filename: { type: String, default: '' },
  clicks: { type: Number, default: undefined },
  linesPerClick: { type: Number, default: 3 },
  showProgress: { type: Boolean, default: true },
})

// 同步注入 Slidev ClicksContext
let slidevClicks = null
try {
  const clicksContextRef = inject('$$slidev-clicks-context', null)
  if (clicksContextRef?.value) {
    const ctx = clicksContextRef.value
    slidevClicks = toRef(ctx, 'current')
    const allLinesTemp = props.code.split('\n')
    const totalClicks = Math.ceil(allLinesTemp.length / props.linesPerClick)
    const info = ctx.calculateSince('+1', totalClicks)
    ctx.register(`codetw-${props.filename}`, info)
  }
} catch {
  // 非 Slidev 环境
}

const effectiveClicks = computed(() => {
  if (props.clicks !== undefined) return props.clicks
  return slidevClicks?.value ?? 0
})

const allLines = computed(() => props.code.split('\n'))
const totalLines = computed(() => allLines.value.length)
const visibleCount = computed(() => Math.min(effectiveClicks.value * props.linesPerClick, totalLines.value))
const isComplete = computed(() => visibleCount.value >= totalLines.value)
const visibleLines = computed(() => allLines.value.slice(0, visibleCount.value))
const prevVisibleCount = computed(() => Math.max(0, (effectiveClicks.value - 1) * props.linesPerClick))
</script>

<style scoped>
.ct-wrap {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(8,12,24,0.95);
  box-shadow: 0 8px 20px rgba(5,10,28,0.2);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11px;
  line-height: 1.55;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ct-wrap--typing {
  border-color: rgba(129,140,248,0.2);
}

.ct-wrap:hover {
  border-color: rgba(129,140,248,0.25);
  box-shadow: 0 8px 24px rgba(5,10,28,0.3), 0 0 0 1px rgba(129,140,248,0.1);
}

.ct-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 12px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.ct-fname { font-size: 10px; color: #94a3b8; font-weight: 600; }
.ct-prog  { font-size: 9px; color: #475569; font-family: 'JetBrains Mono', monospace; }

.ct-body {
  padding: 6px 0;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.ct-line {
  display: flex;
  align-items: baseline;
  padding: 0 12px;
  min-height: 17px;
  transition: background 0.2s ease;
}

.ct-line--new {
  animation: ctSlideIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.ct-line:hover {
  background: rgba(255,255,255,0.02);
}

.ct-ln {
  width: 30px;
  text-align: right;
  color: rgba(100,116,139,0.35);
  font-size: 9px;
  flex-shrink: 0;
  padding-right: 10px;
  user-select: none;
}

.ct-code {
  flex: 1;
  min-width: 0;
  white-space: pre;
  color: #c5cbd6;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ct-cursor {
  display: inline-block;
  color: #818cf8;
  margin-left: 30px;
  font-size: 12px;
  animation: ctBlink 0.7s steps(2) infinite;
}

@keyframes ctSlideIn {
  from { opacity: 0; transform: translateX(-6px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes ctBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
