---
layout: section
title: wl-skills-design 设计阶段标准化
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-amber-400 tracking-widest mb-3 uppercase">04 · 设计阶段标准化</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">wl-skills-design</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">把"设计规范"从人脑，变成 AI 自动按规则产出</p>
  <p class="text-slate-400">9 规范 · 8 Skill · 214 验证项 · 双层资料 · 三角联动</p>
  <div class="mt-4">
    <span class="badge badge-done">v0.7.0</span>
    <span class="badge badge-new ml-2">@agile-team/wl-skills-design</span>
  </div>
</div>

---
layout: default
---

<h1 class="tight-title">设计的三个痛点，三个解法</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="grid-tight-2 gap-2.5">

<div class="compare-panel compare-panel-before !p-2.5">
  <div class="font-bold text-red-300 mb-1 text-[11px]">痛点</div>
  <div class="space-y-0.5 text-[10.5px] text-slate-400">
    <div>✗ 规范各画各的，5 人 5 种流程图</div>
    <div>✗ AI 不懂设计规范，生成完大改</div>
    <div>✗ spec/库表/接口字段三处对不齐</div>
  </div>
</div>

<div class="compare-panel compare-panel-after !p-2.5">
  <div class="font-bold text-green-300 mb-1 text-[11px]">解法</div>
  <div class="space-y-0.5 text-[10.5px] text-slate-400">
    <div>✓ 9 条工具无关规范作唯一权威源</div>
    <div>✓ Skill 评分命中→加载规范→生成</div>
    <div>✓ 术语词典作字段对齐锚点</div>
  </div>
</div>

</div>

<div class="highlight-box !p-2.5">
  <div class="font-bold text-indigo-300 mb-0.5 text-[11px]">★ 双层资料：模板给结构，样例给水位</div>
  <div class="text-[10.5px] text-slate-400 leading-4.5">templates/ {占位符} + examples/ 真实标杆（含"为何达标"自检清单），生成结果不得低于样例。</div>
</div>

<div class="highlight-box-green !p-2.5">
  <div class="font-bold text-green-300 mb-0.5 text-[11px]">★ 三角联动：词典锚点 O(N)</div>
  <div class="text-[10.5px] text-slate-400 leading-4.5">spec ⊆ 词典 · DB ⊆ 词典 · 接口 ⊆ 词典，两两互比 O(N²) → 各自对齐词典 O(N)。</div>
</div>

<div class="highlight-box-yellow !p-2.5">
  <div class="font-bold text-amber-300 mb-0.5 text-[11px]">★ 路由评分：9 规范怎么自动喂给 8 Skill</div>
  <div class="flex items-center gap-2 mt-1 text-[10px]">
    <div class="font-mono text-slate-400 leading-4">
      <div><span class="text-green-300">+80</span> exact 精确命中（关键词/文件）</div>
      <div><span class="text-cyan-300">+50</span> semantic 语义命中</div>
      <div><span class="text-slate-300">+5</span> context 上下文加分</div>
    </div>
    <div class="text-blue-400 font-black">⇒</div>
    <div class="text-slate-400 leading-4">达 <strong class="text-amber-300">70 分线</strong>才触发该 Skill，避免误用规范——<strong class="text-slate-200">AI 知道该用哪条</strong>。</div>
  </div>
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-design/skills/_manifest.json', lines: '4-24', desc: '路由策略：评分匹配(70分线)+强制闭环四阶段' },
  { file: 'wl-skills-design/skills/data/database/SKILL.md', lines: '61-63', desc: '双层资料约定（templates+examples）' },
  { file: 'wl-skills-design/standards/08-glossary.md', lines: '10,13-14', desc: '术语词典=字段对齐中央锚点 single anchor' },
  { file: 'wl-skills-design/skills/_manifest.json', lines: '5-6', desc: 'manifest 机器唯一执行源 / registry 人读索引' },
]" />

</div>

---
layout: default
---

<h1 class="tight-title">214 项验证不是吹：逐项对齐真实源文件</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="dense-table !p-2">
  <table class="text-[9.5px]">
    <thead><tr><th class="text-left">域</th><th class="text-left">项</th><th class="text-left">真实源文件</th></tr></thead>
    <tbody>
      <tr><td class="text-blue-300">流程图</td><td>20</td><td class="text-slate-400 font-mono">standards/01-flowchart.md</td></tr>
      <tr><td class="text-purple-300">原型</td><td>23</td><td class="text-slate-400 font-mono">02-prototype.md</td></tr>
      <tr><td class="text-cyan-300">数据库</td><td>34</td><td class="text-slate-400 font-mono">03-database.md</td></tr>
      <tr><td class="text-green-300">接口</td><td>38</td><td class="text-slate-400 font-mono">04-api-design.md</td></tr>
      <tr><td class="text-indigo-300">说明书</td><td>43</td><td class="text-slate-400 font-mono">06-spec-doc.md</td></tr>
      <tr><td class="text-amber-300">评审</td><td>18</td><td class="text-slate-400 font-mono">07-design-review.md</td></tr>
      <tr><td class="text-pink-300">词典</td><td>18</td><td class="text-slate-400 font-mono">08-glossary.md</td></tr>
      <tr><td class="text-orange-300">变更影响</td><td>20</td><td class="text-slate-400 font-mono">09-change-impact.md</td></tr>
    </tbody>
  </table>
</div>

<div class="highlight-box !p-2">
  <div class="font-bold text-cyan-300 mb-0.5 text-[10.5px]">数据库（真实 ID 原文）</div>
  <div class="font-mono text-[9px] text-slate-400 leading-3.5">B01 含id主键 · B04 deletedFlag逻辑删除 · B06 7系统字段置末尾 · A06 idx_表_字段 · A07 uk_唯一 · C05 联合索引最左前缀≤5 · E04 默认逻辑外键</div>
</div>

<div class="highlight-box-green !p-2">
  <div class="font-bold text-green-300 mb-0.5 text-[10.5px]">接口（真实 ID 原文）</div>
  <div class="font-mono text-[9px] text-slate-400 leading-3.5">A03 URL名词复数+/api/v1/ · B09 统一分页records/total/pages · C04 幂等键 · D08 标URL/Method/状态码 · D04 错误码[模块]-[E/S/V]-[序号]</div>
</div>

</div>

<SourceTrace :items="[
  { file: 'standards/03-database.md', lines: '290,295-338', desc: '数据库验证清单 34 项（A06/A07/A08/B01/B04/C05/E04 在此）' },
  { file: 'standards/04-api-design.md', lines: '310,315-360', desc: '接口验证清单 38 项（A03/B09/C04/D04/D08 在此）' },
  { file: 'standards/07-design-review.md', lines: '88,112-145', desc: 'D4 三角联动 18 项 + P0 一票否决' },
  { file: 'standards/06-spec-doc.md', lines: '1005,1010-1069', desc: '需求说明书 43 项（X01-06 编号锚点）' },
]" />

</div>
