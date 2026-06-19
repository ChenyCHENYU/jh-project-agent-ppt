<template>
  <div class="strace" :class="{ 'strace--inline': inline }">
    <div class="strace-title">
      <span class="strace-dot"></span>
      <span>源追溯 · 可查原文</span>
    </div>
    <div v-for="(item, i) in items" :key="i" class="strace-item">
      <div class="strace-head">
        <code class="strace-file">{{ item.file }}</code>
        <span v-if="item.lines" class="strace-lines">L{{ item.lines }}</span>
      </div>
      <div class="strace-desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  inline: { type: Boolean, default: false },
})
</script>

<style scoped>
.strace {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid rgba(96, 165, 250, 0.2);
  background: linear-gradient(180deg, rgba(8, 12, 24, 0.82), rgba(15, 23, 42, 0.66));
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 28px rgba(3, 7, 18, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
.strace--inline {
  height: auto;
  max-height: none;
  margin: 6px 0;
}
.strace-title {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 9.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #60a5fa;
  font-weight: 700;
  margin-bottom: 7px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(96, 165, 250, 0.14);
}
.strace-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #60a5fa;
  box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
}
.strace-item { margin-bottom: 8px; }
.strace-item:last-child { margin-bottom: 0; }
.strace-head {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 2px;
}
.strace-file {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  color: #93c5fd;
  background: rgba(96, 165, 250, 0.1);
  padding: 1px 5px;
  border-radius: 4px;
  word-break: break-all;
}
.strace-lines {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  color: #fcd34d;
  background: rgba(252, 211, 77, 0.1);
  padding: 1px 5px;
  border-radius: 4px;
  white-space: nowrap;
}
.strace-desc {
  font-size: 10px;
  line-height: 1.45;
  color: #94a3b8;
}
</style>
