---
layout: section
title: AI 工作流实战
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-yellow-400 tracking-widest mb-3 uppercase">09 · 工作流实战</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">工作流实战</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">真实项目不会每次都完整跑全链路</p>
  <p class="text-slate-400">按资料完整度、风险等级、目标时效选最合适的一条</p>
</div>

---
layout: default
---

# 四类场景，四条链路

<div class="statement-card statement-card-indigo mt-3 text-sm">
<strong>选链路原则：</strong>真实项目不会每次都完整跑 ① → ⑩。资料完整度、风险等级、目标时效不同，所以我们归纳了 4 条最常见的场景链路，按情况选最合适的一条。
</div>

<div class="mt-3 grid grid-cols-2 gap-4 text-sm">

<div class="arch-card">
<div class="text-blue-300 font-bold mb-2">📐 有完整原型/详设</div>
<div class="text-slate-400 mb-2">走全链路 ① → ⑩</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 精准度最高</div>
  <div>✓ 业务文档同步生成</div>
  <div>✓ 适合新模块/新功能</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：资料完整、要一次做对。完整跑一遍约 2~4 小时。</div>
</div>

<div class="arch-card-cyan">
<div class="text-cyan-300 font-bold mb-2">🗣️ 口述需求快速出页面</div>
<div class="text-slate-400 mb-2">走 ⑤ → ⑥ → ⑦（跳过①②③）</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 快速验证，10~30 分钟出骨架</div>
  <div>⚠️ 后续需补 api.md 契约</div>
  <div>⚠️ 业务文档缺失，需人工补充</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：目标先看页面，不追求一次补齐全部契约。</div>
</div>

<div class="arch-card-green">
<div class="text-green-300 font-bold mb-2">🔍 存量项目体检</div>
<div class="text-slate-400 mb-2">走 wls_code_scan → ⑦ → ⑧ → ⑥</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 先摸清现有问题</div>
  <div>✓ 审计 → 修复 → 验证</div>
  <div>✓ 不破坏现有逻辑</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：先治现状，再谈生成，不先动大手术。</div>
</div>

<div class="arch-card-orange">
<div class="text-orange-300 font-bold mb-2">🔄 只做菜单/权限同步</div>
<div class="text-slate-400 mb-2">直接 ⑨（前提：已有 api.md 和页面骨架）</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 快速同步后台数据</div>
  <div>⚠️ 无 api.md → 不能同步</div>
  <div>⚠️ 必须有 diff 预览</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：页面已基本成型，只需要把后台配置同步到位。</div>
</div>

</div>

<div class="statement-card statement-card-indigo mt-4 text-sm">
<strong>L5 Pipeline 目标：</strong> 完整走通 3 个以上真实业务页面的全链路（① → ⑩），无需 AI 二次补救。
</div>
