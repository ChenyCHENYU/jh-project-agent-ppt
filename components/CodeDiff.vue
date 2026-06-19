<template>
  <div class="code-diff" :class="{ 'code-diff--dark': dark }">
    <div class="diff-header">
      <div class="diff-tab diff-tab--before" :class="{ 'diff-tab--active': activeTab === 'before' }">
        <span class="diff-tab-indicator diff-tab-indicator--red">−</span>
        {{ beforeLabel }}
      </div>
      <div class="diff-tab diff-tab--after" :class="{ 'diff-tab--active': activeTab === 'after' }">
        <span class="diff-tab-indicator diff-tab-indicator--green">+</span>
        {{ afterLabel }}
      </div>
      <div v-if="showToggle" class="diff-toggle" @click="toggleView">
        {{ viewMode === 'split' ? '⬌' : '⬍' }} {{ viewMode === 'split' ? 'Split' : 'Unified' }}
      </div>
    </div>
    <div class="diff-body diff-body--split">
      <div class="diff-pane diff-pane--before diff-pane--scroll">
        <div
          v-for="(line, i) in beforeLines"
          :key="'b' + i"
          class="diff-line"
        >
          <span class="diff-linenum">{{ i + 1 }}</span>
          <span class="diff-prefix">−</span>
          <span class="diff-content">{{ line }}</span>
        </div>
      </div>
      <div class="diff-pane diff-pane--after diff-pane--scroll">
        <div
          v-for="(line, i) in afterLines"
          :key="'a' + i"
          class="diff-line"
        >
          <span class="diff-linenum">{{ i + 1 }}</span>
          <span class="diff-prefix">+</span>
          <span class="diff-content">{{ line }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  before: {
    type: String,
    required: true,
  },
  after: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: 'vue',
  },
  beforeLabel: {
    type: String,
    default: 'Before',
  },
  afterLabel: {
    type: String,
    default: 'After',
  },
  dark: {
    type: Boolean,
    default: true,
  },
  showToggle: {
    type: Boolean,
    default: true,
  },
  highlightChanges: {
    type: Boolean,
    default: true,
  },
})

const viewMode = ref('split')
const activeTab = ref('after')

const beforeLines = computed(() => props.before.split('\n'))
const afterLines = computed(() => props.after.split('\n'))

const diffLines = computed(() => {
  const maxLen = Math.max(beforeLines.value.length, afterLines.value.length)
  const result = []
  let bIdx = 0
  let aIdx = 0

  for (let i = 0; i < maxLen; i++) {
    const b = beforeLines.value[i]
    const a = afterLines.value[i]

    if (i < beforeLines.value.length && i < afterLines.value.length) {
      if (b === a) {
        result.push({ type: 'same', before: b, after: a, beforeNum: i + 1, afterNum: i + 1 })
      } else {
        result.push({ type: 'changed', before: b, after: a, beforeNum: i + 1, afterNum: i + 1 })
      }
    } else if (i < beforeLines.value.length) {
      result.push({ type: 'removed', before: b, after: '', beforeNum: i + 1, afterNum: '' })
    } else {
      result.push({ type: 'added', before: '', after: a, beforeNum: '', afterNum: i + 1 })
    }
  }

  return result
})

const unifiedLines = computed(() => {
  const lines = []
  let num = 1
  for (const dl of diffLines.value) {
    if (dl.type === 'removed' || dl.type === 'changed') {
      lines.push({ type: 'removed', num: dl.beforeNum, prefix: '−', text: dl.before })
    }
    if (dl.type === 'added' || dl.type === 'changed') {
      lines.push({ type: 'added', num: dl.afterNum, prefix: '+', text: dl.after })
    }
    if (dl.type === 'same') {
      lines.push({ type: 'same', num: num++, prefix: ' ', text: dl.before })
    }
  }
  return lines
})

function toggleView() {
  viewMode.value = viewMode.value === 'split' ? 'unified' : 'split'
}
</script>

<style scoped>
.code-diff {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 14, 28, 0.95);
  box-shadow: 0 10px 28px rgba(5, 10, 28, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04);
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11px;
  line-height: 1.6;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.code-diff:hover {
  border-color: rgba(255,255,255,0.12);
  box-shadow: 0 10px 32px rgba(5, 10, 28, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.diff-header {
  display: flex;
  align-items: center;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  gap: 2px;
}

.diff-tab {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  color: #64748b;
  transition: all 0.2s;
}

.diff-tab--active {
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
}

.diff-tab-indicator {
  font-weight: 900;
  margin-right: 4px;
}

.diff-tab-indicator--red { color: #f87171; }
.diff-tab-indicator--green { color: #4ade80; }

.diff-toggle {
  margin-left: auto;
  font-size: 10px;
  color: #64748b;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s;
}

.diff-toggle:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
}

.diff-body {
  display: grid;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.diff-body--split {
  grid-template-columns: 1fr 1fr;
}

.diff-body--unified {
  grid-template-columns: 1fr;
}

.diff-pane {
  border-right: 1px solid rgba(255, 255, 255, 0.04);
}

.diff-pane:last-child {
  border-right: none;
}

.diff-line {
  display: flex;
  align-items: baseline;
  padding: 0 10px;
  min-height: 18px;
  transition: background 0.15s;
}

.diff-pane--scroll {
  overflow-y: auto;
}

.diff-pane--before .diff-line {
  background: rgba(239, 68, 68, 0.05);
}

.diff-pane--before .diff-prefix {
  color: #f87171;
}

.diff-pane--after .diff-line {
  background: rgba(74, 222, 128, 0.05);
}

.diff-pane--after .diff-prefix {
  color: #4ade80;
}

.diff-line:hover {
  background: rgba(255, 255, 255, 0.03);
}

.diff-linenum {
  width: 28px;
  text-align: right;
  color: rgba(100, 116, 139, 0.4);
  font-size: 10px;
  flex-shrink: 0;
  padding-right: 8px;
  user-select: none;
}

.diff-prefix {
  width: 12px;
  text-align: center;
  flex-shrink: 0;
  font-weight: 700;
}

.diff-content {
  flex: 1;
  min-width: 0;
  white-space: pre;
  color: #c5cbd6;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
