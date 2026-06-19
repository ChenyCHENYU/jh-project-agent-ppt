---
layout: section
title: AI 工作流实战
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-yellow-400 tracking-widest mb-3 uppercase">09 · 工作流实战</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">AI 工作流实战</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">从人工串联 Skills 到 AI 自动化流水线</p>
  <p class="text-slate-400">L5 Pipeline 试运行 · 真实业务页面连续跑通</p>
</div>

---
layout: default
clicks: 11
---

<h1 class="tight-title">L5 全链路时序：一图览全程</h1>

<div class="page-fit compact-stack l5-timeline-stage text-[11px] leading-4">

<div class="fit-grid-4-tight text-[11px]">
  <div class="panel-soft text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 01</div>
    <div class="text-slate-100 font-bold">开发者</div>
    <div class="micro-note mt-0.5">输入需求 / 确认 diff</div>
  </div>
  <div class="panel-soft-cyan text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 02</div>
    <div class="text-slate-100 font-bold">AI 编辑器</div>
    <div class="micro-note mt-0.5">串联 Skill / 汇总产物</div>
  </div>
  <div class="panel-soft-purple text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 03</div>
    <div class="text-slate-100 font-bold">wl-skills-kit</div>
    <div class="micro-note mt-0.5">执行生成 / 审计 / 同步</div>
  </div>
  <div class="panel-soft-amber text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 04</div>
    <div class="text-slate-100 font-bold">后端</div>
    <div class="micro-note mt-0.5">消费 api.md / 接收同步结果</div>
  </div>
</div>

<FlowPipeline
  :steps="timelineSteps"
/>

<div class="grid grid-cols-2 gap-1.5 text-[10px] leading-4.5">
  <div class="statement-card statement-card-indigo !p-2.5">
    <strong>关键契约节点：</strong><code>api.md</code> 是全链路唯一公共契约，前端生成、后端消费、AI 复核都以它为准。
  </div>
  <div class="statement-card !p-2.5">
    <strong>唯一人工门控：</strong>只有菜单 / 权限写入前要看 diff，前面的扫描、生成、校验、审计都应自动推进。
  </div>
</div>

</div>

<script setup>
import FlowPipeline from '../components/FlowPipeline.vue'

const timelineSteps = [
  { num: '01', skill: 'prototype-scan / spec-doc-parse', label: '原型线/规范线 → 页面清单', product: '→ reports/PROTOTYPE_SCAN_*.md', variant: 'cyan' },
  { num: '02', skill: 'api-contract', label: '页面清单 → 接口契约', product: '→ src/views/**/api.md', variant: 'indigo' },
  { num: '03', skill: 'page-codegen', label: '契约+清单 → 三文件产出', product: '→ index.vue + data.ts + index.scss', variant: 'purple' },
  { num: '04', skill: 'page-codegen(内置自检)', label: '生成后强制校验', product: '→ R1-R12 AST + S1-S5 page-spec', variant: 'cyan' },
  { num: '05', skill: 'convention-audit', label: '14 条规范审计', product: '→ reports/规范审查报告.md', variant: 'indigo' },
  { num: '06', skill: 'code-fix', label: '自动修复 → 强制复扫', product: '→ 修后自动 validate', variant: 'green' },
  { num: '07', skill: 'doctor-ui', label: 'UI 接入诊断', product: '→ I001~I005 + R001~R037', variant: 'cyan' },
  { num: '08', skill: 'menu-sync', label: '菜单注册 (MCP)', product: '→ SYS_MENU_INFO.md', variant: 'amber' },
  { num: '09', skill: 'dict-sync', label: '字典同步 (MCP)', product: '→ 线上字典对齐', variant: 'amber' },
  { num: '10', skill: 'permission-sync', label: '权限+角色同步', product: '→ v-permission + 角色授权', variant: 'green' },
]
</script>

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
