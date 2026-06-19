---
layout: section
title: 四包闭环
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-emerald-400 tracking-widest mb-3 uppercase">12 · 四包闭环</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">四包闭环，契约贯穿</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">需求设计 → 前端开发 → 后端开发 → 质量验证</p>
  <p class="text-slate-400">各守一环 · api.md 贯穿 · 基建先行才有闭环</p>
</div>

---
layout: default
---

<h1 class="tight-title">一图看完：四包如何各守一环</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="flex items-stretch justify-center gap-1.5 text-[11px] mb-1">
  <div class="panel-soft-amber text-center !p-2 flex-1 max-w-[22%]"><div class="text-amber-200 font-bold">需求设计</div><div class="text-slate-500 text-[10px]">design</div></div>
  <div class="chain-arrow chain-arrow--on self-center">→</div>
  <div class="panel-soft-indigo text-center !p-2 flex-1 max-w-[22%]"><div class="text-indigo-200 font-bold">前端开发</div><div class="text-slate-500 text-[10px]">kit + ui</div></div>
  <div class="chain-arrow chain-arrow--on self-center">→</div>
  <div class="panel-soft-green text-center !p-2 flex-1 max-w-[22%]"><div class="text-green-200 font-bold">后端开发</div><div class="text-slate-500 text-[10px]">bd</div></div>
  <div class="chain-arrow chain-arrow--on self-center">→</div>
  <div class="panel-soft-cyan text-center !p-2 flex-1 max-w-[22%]"><div class="text-cyan-200 font-bold">质量验证</div><div class="text-slate-500 text-[10px]">审计+回流</div></div>
</div>

<div class="panel-soft dense-table !p-2.5">
  <table class="text-[10.5px]">
    <thead><tr><th class="text-left">环节</th><th class="text-left">核心能力</th><th class="text-left">输出 → 下游</th></tr></thead>
    <tbody>
      <tr><td class="text-amber-300 font-bold">设计</td><td class="text-slate-400">流程图/说明书/原型/DB/接口/评审/词典</td><td class="text-indigo-300">D3标注·spec IPO → kit</td></tr>
      <tr><td class="text-indigo-300 font-bold">前端</td><td class="text-slate-400">scan / contract / codegen / audit / sync</td><td class="text-green-300">api.md → bd</td></tr>
      <tr><td class="text-green-300 font-bold">后端</td><td class="text-slate-400">api-design-be / codegen-be / db / audit-be</td><td class="text-cyan-300">骨架·DDL → 验证</td></tr>
      <tr><td class="text-cyan-300 font-bold">验证</td><td class="text-slate-400">convention-audit / validate / design-review</td><td class="text-amber-300">审计·评分 → 回流</td></tr>
    </tbody>
  </table>
</div>

<div class="grid grid-cols-2 gap-1.5 text-[10px] leading-4">
  <div class="statement-card statement-card-amber !p-2"><strong>契约贯穿：</strong>api.md 前端生成·后端消费·AI 复核，偏差改契约不改代码。词典作字段锚点。</div>
  <div class="statement-card statement-card-green !p-2"><strong>闭环回写：</strong>审计报告回流设计侧，驱动规范迭代与 Skill 升级——持续反馈飞轮。</div>
</div>

<div class="panel-soft-amber !p-2 text-[11px] text-center">
  四包构成<strong class="text-white">从需求到交付的 AI 高速公路</strong>：设计铺路面，前端造车，后端装货，验证做年检。
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-design/skills/cross/design-review/SKILL.md', lines: '18-19,33-41', desc: 'D4 集成评审：消费 DB/IF/spec 结论 + 追溯矩阵' },
  { file: 'wl-skills-bd/architecture.md', lines: '21-29', desc: '前后端镜像对齐表（kit × bd）' },
  { file: 'wl-skills-kit/skills/_pipeline.md', lines: '52-66', desc: '产物链式传递：scan→contract→codegen→audit→sync' },
  { file: 'demo/.github/reports/README.md', lines: '1-3,39-44', desc: 'reports 追加不覆盖规则（历史可追溯）' },
]" />

</div>
