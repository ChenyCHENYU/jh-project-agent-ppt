<template>
  <div class="tp-wrap" :class="{ 'tp-wrap--has-content': autoCount > 0 }">
    <div class="tp-header">
      <div class="tp-dots">
        <span class="tp-dot tp-dot--r"></span>
        <span class="tp-dot tp-dot--y"></span>
        <span class="tp-dot tp-dot--g"></span>
      </div>
      <span class="tp-title">{{ title }}</span>
      <button class="tp-play" @click="togglePlay" :class="{ 'tp-play--playing': playing }">
        {{ playing ? '⏸' : '▶' }}
      </button>
    </div>
    <div class="tp-body" ref="bodyRef">
      <template v-for="(f, i) in visibleFrames" :key="i">
        <div
          v-if="f.text === ''"
          class="tp-line tp-line--empty"
        >&nbsp;</div>
        <div
          v-else
          class="tp-line"
          :class="[
            `tp-line--${f.type}`,
            { 'tp-line--typing': i === typingIdx }
          ]"
        >{{ lineText(i, f) }}<span v-if="i === typingIdx && playing" class="tp-type-cursor">▎</span></div>
      </template>
      <div v-if="autoCount > 0 && !isComplete && !playing" class="tp-cursor-line">
        <span class="tp-prompt">$ </span>
        <span class="tp-cursor">▎</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, toRef, watch, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  frames: { type: Array, required: true },
  title: { type: String, default: 'Terminal' },
  clicks: { type: Number, default: undefined },
  framesPerClick: { type: Number, default: 5 },
  startClick: { type: Number, default: 0 },
  autoInterval: { type: Number, default: 60 },
  typeSpeed: { type: Number, default: 18 },
})

let slidevClicks = null
try {
  const clicksContextRef = inject('$$slidev-clicks-context', null)
  if (clicksContextRef?.value) {
    const ctx = clicksContextRef.value
    slidevClicks = toRef(ctx, 'current')
    const totalClicks = Math.ceil(props.frames.length / props.framesPerClick)
    const info = ctx.calculateSince('+1', totalClicks)
    ctx.register(`terminal-${props.title}`, info)
  }
} catch {
}

const effectiveClicks = computed(() => {
  if (props.clicks !== undefined) return Math.max(0, props.clicks - props.startClick)
  return Math.max(0, (slidevClicks?.value ?? 0) - props.startClick)
})

const playing = ref(false)
const autoCount = ref(effectiveClicks.value * props.framesPerClick)
const typingIdx = ref(-1)
const typedChars = ref({})
const bodyRef = ref(null)
let timer = null
let typeTimer = null

const visibleCount = computed(() => Math.min(autoCount.value, props.frames.length))
const isComplete = computed(() => visibleCount.value >= props.frames.length)
const visibleFrames = computed(() => props.frames.slice(0, visibleCount.value))
const prevVisibleCount = computed(() => Math.max(0, visibleCount.value - props.framesPerClick))

function lineText(i, f) {
  if (i === typingIdx.value && playing.value) {
    const typed = typedChars.value[i] || 0
    const prefix = f.type === 'cmd' ? '$ ' : ''
    return prefix + f.text.slice(0, typed)
  }
  if (f.type === 'cmd') return '$ ' + f.text
  return f.text
}

function syncFromClicks() {
  const fromClick = effectiveClicks.value * props.framesPerClick
  if (fromClick > autoCount.value) autoCount.value = fromClick
}

watch(effectiveClicks, syncFromClicks)

function scrollToBottom() {
  nextTick(() => {
    if (bodyRef.value) bodyRef.value.scrollTop = bodyRef.value.scrollHeight
  })
}

function togglePlay() {
  if (playing.value) {
    stopPlay()
    return
  }
  playing.value = true
  if (autoCount.value >= props.frames.length) {
    stopPlay()
    return
  }
  advanceLine()
}

function advanceLine() {
  if (autoCount.value >= props.frames.length) {
    stopPlay()
    return
  }
  autoCount.value = Math.min(autoCount.value + 1, props.frames.length)
  const curIdx = autoCount.value - 1
  const frame = props.frames[curIdx]
  if (!frame || !frame.text || frame.text === '') {
    scrollToBottom()
    timer = setTimeout(advanceLine, 80)
    return
  }
  typingIdx.value = curIdx
  typedChars.value[curIdx] = 0
  scrollToBottom()
  typeLine(curIdx, frame.text)
}

function typeLine(idx, text) {
  const totalLen = text.length
  let charIdx = 0
  typeTimer = setInterval(() => {
    charIdx++
    typedChars.value[idx] = charIdx
    scrollToBottom()
    if (charIdx >= totalLen) {
      clearInterval(typeTimer)
      typeTimer = null
      typingIdx.value = -1
      timer = setTimeout(advanceLine, props.autoInterval)
    }
  }, props.typeSpeed)
}

function stopPlay() {
  playing.value = false
  typingIdx.value = -1
  if (timer) { clearTimeout(timer); timer = null }
  if (typeTimer) { clearInterval(typeTimer); typeTimer = null }
}

onUnmounted(() => {
  stopPlay()
})
</script>

<style scoped>
.tp-wrap {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(8,12,24,0.97);
  box-shadow: 0 8px 20px rgba(5,10,28,0.25);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  line-height: 1.6;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: 30rem;
}

.tp-wrap--has-content {
  border-color: rgba(255,255,255,0.1);
}

.tp-wrap:hover {
  border-color: rgba(129,140,248,0.2);
  box-shadow: 0 8px 24px rgba(5,10,28,0.3), 0 0 0 1px rgba(129,140,248,0.1);
}

.tp-header {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  gap: 8px;
}

.tp-dots { display: flex; gap: 5px; }
.tp-dot { width: 9px; height: 9px; border-radius: 50%; transition: opacity 0.3s; }
.tp-dot--r { background: #ef4444; opacity: .7; }
.tp-dot--y { background: #f59e0b; opacity: .7; }
.tp-dot--g { background: #22c55e; opacity: .7; }

.tp-wrap:hover .tp-dot--r { opacity: 1; }
.tp-wrap:hover .tp-dot--y { opacity: 1; }
.tp-wrap:hover .tp-dot--g { opacity: 1; }

.tp-title { font-size: 10px; color: #64748b; font-weight: 600; flex: 1; }

.tp-play {
  font-size: 12px;
  width: 26px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid rgba(129,140,248,0.25);
  background: rgba(129,140,248,0.08);
  color: #a5b4fc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  padding: 0;
  line-height: 1;
}

.tp-play:hover {
  background: rgba(129,140,248,0.18);
  border-color: rgba(129,140,248,0.45);
}

.tp-play--playing {
  background: rgba(129,140,248,0.2);
  border-color: rgba(129,140,248,0.5);
  animation: tpPlayPulse 1.5s ease-in-out infinite;
}

@keyframes tpPlayPulse {
  0%, 100% { box-shadow: 0 0 4px rgba(129,140,248,0.1); }
  50% { box-shadow: 0 0 10px rgba(129,140,248,0.25); }
}

.tp-body {
  padding: 8px 12px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}
.tp-body::-webkit-scrollbar {
  width: 6px;
}
.tp-body::-webkit-scrollbar-track {
  background: transparent;
}
.tp-body::-webkit-scrollbar-thumb {
  background: rgba(148,163,184,0.3);
  border-radius: 3px;
}
.tp-body::-webkit-scrollbar-thumb:hover {
  background: rgba(148,163,184,0.5);
}

.tp-line {
  white-space: pre-wrap;
  word-break: break-all;
}

.tp-line--empty {
  height: 1.6em;
  visibility: hidden;
}

.tp-line--cmd    { color: #e2e8f0; font-weight: 600; }
.tp-line--out    { color: #94a3b8; }
.tp-line--ok     { color: #4ade80; }
.tp-line--err    { color: #f87171; }
.tp-line--warn   { color: #fbbf24; }

.tp-type-cursor {
  color: #818cf8;
  font-weight: 400;
  animation: tpBlink 0.6s steps(2) infinite;
}

.tp-prompt {
  color: #818cf8;
  font-weight: 700;
  user-select: none;
}

.tp-cursor-line {
  display: flex;
  align-items: center;
}

.tp-cursor {
  display: inline-block;
  color: #818cf8;
  font-size: 12px;
  animation: tpBlink 0.7s steps(2) infinite;
}

@keyframes tpBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
