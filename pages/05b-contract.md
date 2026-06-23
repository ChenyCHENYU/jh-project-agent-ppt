---
layout: default
clicks: 5
---

<div class="text-xs text-amber-400 tracking-widest uppercase mb-2">08 · 契约贯穿</div>

<h1 class="tight-title">api.md 是四包唯一交汇点</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div v-click="1" class="panel-soft-amber api-pulse mx-auto max-w-md text-center !p-2.5 mb-1.5 vc-in">
  <div class="text-lg mb-0.5">📄 api.md</div>
  <div class="text-amber-200 font-bold">前后端共同消费的"宪法"</div>
  <div class="text-slate-500 text-[10px] mt-0.5">一个文件 · 三方对齐 · 偏差回到它，不回到代码</div>
</div>

<div class="grid grid-cols-3 gap-2 text-[11px]">
  <div v-click="2" class="panel-soft-amber !p-2 text-center vc-in">
    <div class="text-amber-300 font-bold mb-0.5">设计侧</div>
    <div class="text-slate-400">design</div>
    <div class="text-slate-300 text-[10px] mt-0.5">接口验证<br>字段 ⊆ 词典</div>
  </div>
  <div v-click="3" class="panel-soft-indigo !p-2 text-center vc-in">
    <div class="text-indigo-300 font-bold mb-0.5">前端侧</div>
    <div class="text-slate-400">kit</div>
    <div class="text-slate-300 text-[10px] mt-0.5">api-contract <strong>生成</strong><br>页面以它为据</div>
  </div>
  <div v-click="4" class="panel-soft-green !p-2 text-center vc-in">
    <div class="text-green-300 font-bold mb-0.5">后端侧</div>
    <div class="text-slate-400">bd</div>
    <div class="text-slate-300 text-[10px] mt-0.5">api-design-be <strong>消费</strong><br>按它生成骨架</div>
  </div>
</div>

<div class="compare-stage compare-stage-tight text-[11px] leading-4.5 mt-1">
  <div class="compare-panel compare-panel-before !p-2.5">
    <div class="font-bold text-red-300 mb-0.5">没有统一契约</div>
    <div class="text-slate-400 text-[10px] leading-4">spec amount · DB ORDER_AMOUNT · 接口 orderAmt<br><span class="text-red-400">→ 联调才发现对不上，返工 4~8h</span></div>
  </div>
  <div class="compare-panel compare-panel-after !p-2.5">
    <div class="font-bold text-green-300 mb-0.5">有 api.md + 词典锚点</div>
    <div class="text-slate-400 text-[10px] leading-4">词典锚 orderAmount → DB/IF 各自 ⊆ 词典校验<br><span class="text-green-400">→ 设计时杜绝，返工降到 30min 内</span></div>
  </div>
</div>

<div v-click="5" class="statement-card statement-card-indigo !p-2 text-[10.5px] leading-4 vc-in">
  <strong>偏差改契约，不改代码：</strong>前后端对不上，修正点回到 api.md，而不是各自在代码里打补丁。AI 稳定消费的是<strong class="text-white">机器可读的统一约束</strong>，不是口头共识。
</div>

</div>

<SourceTrace :items="[
  { file: 'demo/demo/produce/aiflow/mmwr-customer-archive/api.md', lines: '1-70', desc: '真实样例：客户档案契约（POST /sale/customerArchive/list + dict 字段）' },
  { file: 'wl-skills-kit/skills/core/api-contract/SKILL.md', lines: '触发词: 接口约定/api.md', desc: '前端 api-contract 生成 api.md' },
  { file: 'wl-skills-bd/skills/_pipeline.md', lines: '28-40', desc: '后端 api-design-be 消费前端 api.md（input_from）' },
  { file: 'wl-skills-design/standards/08-glossary.md', lines: '10,13-14', desc: '术语词典=字段对齐中央锚点' },
]" />

</div>
