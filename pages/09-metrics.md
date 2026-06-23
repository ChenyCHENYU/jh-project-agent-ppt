---
layout: default
---

<div class="text-xs text-green-400 tracking-widest uppercase mb-2">11 · 量化效果</div>

<h1 class="tight-title">标准化有没有效果：用数据说话</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="grid grid-cols-3 gap-2">

<div class="panel-soft-green flex flex-col items-center justify-center text-center !p-2.5">
  <div class="text-[10px] text-slate-400 tracking-widest uppercase mb-1">生成精准度</div>
  <div class="flex items-center gap-2">
    <div class="big-number text-red-400" style="font-size:1.6rem">30%</div>
    <div class="text-slate-600 text-sm font-bold">→</div>
    <div class="big-number text-green-400" style="font-size:1.6rem">85%</div>
  </div>
  <div class="text-slate-500 text-[9.5px] mt-1">规模化裸用 → 体系化接入<br><span class="text-slate-600 text-[8.5px]">（工程经验估算）</span></div>
</div>

<div class="panel-soft-cyan flex flex-col items-center justify-center text-center !p-2.5">
  <div class="text-[10px] text-slate-400 tracking-widest uppercase mb-1">规范通过率</div>
  <div class="flex items-center gap-2">
    <div class="big-number text-red-400" style="font-size:1.4rem">~30%</div>
    <div class="text-slate-600 text-sm font-bold">→</div>
    <div class="big-number text-green-400" style="font-size:1.6rem">100%</div>
  </div>
  <div class="text-slate-500 text-[9.5px] mt-1">wl-mdata 实测 <strong class="text-green-300">0 偏差</strong></div>
</div>

<div class="panel-soft-amber flex flex-col items-center justify-center text-center !p-2.5">
  <div class="text-[10px] text-slate-400 tracking-widest uppercase mb-1">联调返工</div>
  <div class="flex items-center gap-2">
    <div class="big-number text-red-400" style="font-size:1.4rem">4~8h</div>
    <div class="text-slate-600 text-sm font-bold">→</div>
    <div class="big-number text-green-400" style="font-size:1.6rem">30m</div>
  </div>
  <div class="text-slate-500 text-[9.5px] mt-1">口头对齐 → 契约先行</div>
</div>

</div>

<div class="proof-card !p-2.5">
  <div class="font-bold text-slate-100 mb-1 text-[11px]">接入 kit 前后：wl-mdata 项目实测（规范通过率）</div>
  <div class="proof-bars text-[10px]" style="gap:2px">
    <div v-for="item in [
      { name: 'BaseTable', before: 28, after: 100 },
      { name: 'cid 绑定', before: 15, after: 100 },
      { name: 'api.md', before: 0, after: 100 },
      { name: 'mock-first', before: 12, after: 100 },
      { name: 'TS 类型', before: 45, after: 100 },
    ]" :key="item.name" class="proof-bar-row">
      <div class="text-slate-400 text-right">{{ item.name }}</div>
      <div class="proof-bar-track" style="gap:2px">
        <div class="proof-bar">
          <div class="proof-bar-fill proof-bar-fill-before proof-bar-fill-grow" :style="{ '--bar-w': item.before + '%', width: item.before + '%' }"></div>
          <span class="text-red-400 text-[9px]">{{ item.before }}%</span>
        </div>
        <div class="proof-bar">
          <div class="proof-bar-fill proof-bar-fill-after proof-bar-fill-grow" :style="{ '--bar-w': item.after + '%', width: item.after + '%' }"></div>
          <span class="text-green-400 text-[9px]">{{ item.after }}%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="statement-card statement-card-indigo !p-2 text-[10.5px] leading-4">
  <strong>最该记住的不是数字本身，</strong>而是把规则、契约、组件和工程约束，做成了 AI 能<strong class="text-white">稳定消费</strong>的工程系统——这才是精准度跃升的根因。
</div>

</div>

<SourceTrace :items="[
  { file: 'demo/.github/reports/规范审查报告.md', lines: '1-65', desc: '真实审计报告样例：🔴严重/🟡轻微/🟢提示 + 修复标记 + 模块分布' },
  { file: 'wl-skills-kit/skills/core/convention-audit/SKILL.md', lines: '104-120,176-327', desc: '14 规范覆盖矩阵 + 两份报告（审查报告+组件提取）' },
  { file: 'demo/.github/reports/组件提取建议.md', lines: '-', desc: 'convention-audit → template-extract 产物' },
]" />

</div>
