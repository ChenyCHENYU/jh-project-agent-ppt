<template>
  <span
    :class="[
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold tracking-wide',
      colorClass
    ]"
  >
    <span v-if="icon">{{ icon }}</span>
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    // done | wip | plan | new | warn
  },
  icon: String,
})

const colorClass = computed(() => {
  const map = {
    done: 'bg-green-500/15 border border-green-400/50 text-green-300',
    wip: 'bg-yellow-500/15 border border-yellow-400/50 text-yellow-300',
    plan: 'bg-slate-500/15 border border-slate-400/50 text-slate-300',
    new: 'bg-indigo-500/20 border border-indigo-400/50 text-indigo-300',
    warn: 'bg-orange-500/15 border border-orange-400/50 text-orange-300',
    default: 'bg-slate-700/50 border border-slate-600 text-slate-300',
  }
  return map[props.type] || map.default
})
</script>
