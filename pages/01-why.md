---
layout: section
title: 为什么需要这套体系
---

<div class="h-full flex flex-col justify-center">
  <div class="text-xs text-indigo-400 tracking-widest uppercase mb-4">Chapter 01 · 问题篇</div>
  <h2 class="text-5xl font-black mb-5 leading-tight">
    你的 AI<br><span class="gradient-text">是个聪明的陌生人</span>
  </h2>
  <p class="text-slate-400 text-xl leading-relaxed">公开世界里很强，到了你的项目里却经常失准</p>
</div>

---
layout: default
---

# 三个真实场景，都在为同一个问题买单

<div class="grid grid-cols-3 gap-4 mt-4" style="height:calc(100% - 5rem)">

<div class="accent-top-card">
  <div class="accent-card-body">
    <div class="text-indigo-400 text-xs tracking-widest uppercase mb-3">场景 A · 新功能开发</div>
    <div class="text-white font-bold text-base mb-3">"帮我生成这个列表页"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      AI 给了代码，能跑。<br><br>
      字段名不对，组件用错，<br>
      <span class="text-amber-300">布局和其他页面对不上。</span>
    </div>
    <div class="text-xs text-indigo-600 pt-3 mt-2 border-t border-indigo-900/60">
      返工成本：<strong class="text-indigo-400">2~4 小时</strong>
    </div>
  </div>
</div>

<div class="accent-top-card-purple">
  <div class="accent-card-body">
    <div class="text-purple-400 text-xs tracking-widest uppercase mb-3">场景 B · 新成员上手</div>
    <div class="text-white font-bold text-base mb-3">"BaseTable 怎么用？"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      AI 给了 Element Plus 标准用法。<br><br>
      项目用的是封装后的组件，<br>
      <span class="text-amber-300">跟这个差了整整一层。</span>
    </div>
    <div class="text-xs text-purple-600 pt-3 mt-2 border-t border-purple-900/60">
      上手成本：<strong class="text-purple-400">多花 1~2 天</strong>
    </div>
  </div>
</div>

<div class="accent-top-card-red">
  <div class="accent-card-body">
    <div class="text-red-400 text-xs tracking-widest uppercase mb-3">场景 C · 前后端对接</div>
    <div class="text-white font-bold text-base mb-3">"接口字段对一下"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      口头说好的字段，联调才发现理解不同。<br><br>
      改了三轮，<span class="text-amber-300">沟通成本远超开发本身。</span>
    </div>
    <div class="text-xs text-red-600 pt-3 mt-2 border-t border-red-900/60">
      联调成本：<strong class="text-red-400">4~8 小时</strong>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# 根因不是 AI 笨，而是它看不见你的项目

<div class="flex items-center gap-6 mt-5" style="height:calc(100% - 5.5rem)">

<div class="panel-soft-red flex-1 flex flex-col items-center justify-center text-center gap-4">
  <div class="text-4xl">🤖</div>
  <div class="text-xs text-red-400 tracking-widest uppercase">AI 掌握的（公开知识）</div>
  <div class="text-slate-400 text-sm space-y-1.5 leading-relaxed">
    <div>Vue 3 通用写法</div>
    <div>Element Plus 原始 API</div>
    <div>标准 RESTful 规范</div>
    <div>互联网公开代码库</div>
  </div>
</div>

<div class="flex-none flex flex-col items-center gap-2">
  <div class="font-black text-slate-600" style="font-size:3.5rem;line-height:1">≠</div>
  <div class="text-slate-600 text-xs text-center">无法<br>自动感知</div>
</div>

<div class="panel-soft-indigo flex-1 flex flex-col items-center justify-center text-center gap-4">
  <div class="text-4xl">🏢</div>
  <div class="text-xs text-indigo-400 tracking-widest uppercase">你的项目需要的（私有规范）</div>
  <div class="text-slate-400 text-sm space-y-1.5 leading-relaxed">
    <div>BaseTable / AGGrid 封装写法</div>
    <div>defineColumns / renderOps 约定</div>
    <div>jh-* 私有组件库规范</div>
    <div>14 条团队编码规范</div>
    <div>菜单 / 字典 / 权限接口约定</div>
  </div>
</div>

</div>

<div class="panel-soft-amber mt-3 text-sm text-center">
  AI 不是<span class="text-amber-400 font-bold">能力不足</span>，而是缺少<span class="text-white font-bold">项目上下文</span>。它不会天然知道你的组件封装、接口约定和团队规则。
</div>

---
layout: default
---

# 真正的解法：把团队经验编码成 AI 看得见的规范

<div class="grid grid-cols-2 gap-6 mt-4" style="height:calc(100% - 5rem)">

<div>
  <div class="text-xs text-slate-500 uppercase tracking-widest mb-3">Before — 依赖人传递，无法规模化</div>
  <div class="space-y-2">
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15)">
      <span class="text-red-500 mt-0.5 shrink-0">✗</span>
      <span class="text-slate-400">每次对话都要重新解释项目背景</span>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15)">
      <span class="text-red-500 mt-0.5 shrink-0">✗</span>
      <span class="text-slate-400">规范在人脑中，新人靠问靠翻代码</span>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15)">
      <span class="text-red-500 mt-0.5 shrink-0">✗</span>
      <span class="text-slate-400">接口字段靠口头对齐，联调反复返工</span>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.15)">
      <span class="text-red-500 mt-0.5 shrink-0">✗</span>
      <span class="text-slate-400">AI 每次都从零猜，质量随机</span>
    </div>
  </div>
</div>

<div>
  <div class="text-xs text-slate-500 uppercase tracking-widest mb-3">After — 规范编码化，AI 持续感知</div>
  <div class="space-y-2">
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15)">
      <span class="text-green-500 mt-0.5 shrink-0">✓</span>
      <div class="text-slate-300 flex-1">规范写成文件，AI 自动感知 <span class="level-tag l0 text-xs ml-1">L0</span></div>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15)">
      <span class="text-green-500 mt-0.5 shrink-0">✓</span>
      <div class="text-slate-300 flex-1">SKILL.md 沉淀最佳实践，一次书写复用所有项目 <span class="level-tag l2 text-xs ml-1">L2</span></div>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15)">
      <span class="text-green-500 mt-0.5 shrink-0">✓</span>
      <div class="text-slate-300 flex-1">api.md 成唯一契约，前后端共消费无歧义 <span class="level-tag l3 text-xs ml-1">L3</span></div>
    </div>
    <div class="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style="background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15)">
      <span class="text-green-500 mt-0.5 shrink-0">✓</span>
      <div class="text-slate-300 flex-1">Pipeline 自动跑完链路，人只做关键节点审核 <span class="level-tag l5 text-xs ml-1">L5</span></div>
    </div>
  </div>
</div>

</div>

<div class="mt-3 py-2.5 px-5 rounded-xl text-sm text-center" style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2)">
  <strong class="text-indigo-300">核心思路：</strong>不是让开发者退场，而是把团队积累的经验<strong class="text-white">编码化</strong>，让 AI 从“猜”变成“按规则工作”。
</div>

