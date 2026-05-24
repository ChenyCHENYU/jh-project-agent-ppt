<template>
  <div
    :class="[
      'rounded-xl border p-4 transition-all',
      variantClass,
      { 'opacity-50 grayscale': disabled }
    ]"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black font-mono"
          :class="tagClass"
        >{{ level }}</span>
        <span class="font-bold text-sm" :class="titleColor">{{ title }}</span>
      </div>
      <slot name="badge" />
    </div>
    <div class="text-xs text-slate-400 leading-relaxed">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: String,      // 'L0' ~ 'L7'
  title: String,
  variant: {
    type: String,
    default: 'indigo',
    // indigo | cyan | green | orange | red | violet
  },
  disabled: Boolean,
})

const variantMap = {
  indigo: {
    card: 'bg-indigo-500/8 border-indigo-500/30',
    tag: 'bg-indigo-900 text-indigo-300 border border-indigo-600',
    title: 'text-indigo-300',
  },
  cyan: {
    card: 'bg-cyan-500/8 border-cyan-500/30',
    tag: 'bg-cyan-900 text-cyan-300 border border-cyan-600',
    title: 'text-cyan-300',
  },
  green: {
    card: 'bg-green-500/8 border-green-500/30',
    tag: 'bg-green-900 text-green-300 border border-green-600',
    title: 'text-green-300',
  },
  orange: {
    card: 'bg-orange-500/8 border-orange-500/30',
    tag: 'bg-orange-900 text-orange-300 border border-orange-600',
    title: 'text-orange-300',
  },
  red: {
    card: 'bg-red-500/8 border-red-500/30',
    tag: 'bg-red-900 text-red-300 border border-red-600',
    title: 'text-red-300',
  },
  violet: {
    card: 'bg-violet-500/8 border-violet-500/30',
    tag: 'bg-violet-900 text-violet-300 border border-violet-600',
    title: 'text-violet-300',
  },
}

const variantClass = computed(() => variantMap[props.variant]?.card || variantMap.indigo.card)
const tagClass = computed(() => variantMap[props.variant]?.tag || variantMap.indigo.tag)
const titleColor = computed(() => variantMap[props.variant]?.title || variantMap.indigo.title)
</script>
