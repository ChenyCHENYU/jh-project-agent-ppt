---
theme: default
title: AI 驱动研发工程体系
titleTemplate: '%s | 金恒科技·敏捷团队'
info: |
  ## AI 驱动研发工程体系 · 内部培训

  四仓库协同：jh-agileteam-doc 规范底座 · wl-skills-kit 前端工具链  
  wl-skills-ui UI 风格框架 · wl-skills-bd 后端 AI 工具
  以 wl-mdata / mdm-service 为业务基线，打通全链路 AI 落地

  **金恒科技 · 敏捷团队 · 2026**
colorSchema: dark
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Noto Sans SC'
  mono: 'JetBrains Mono'
css: unocss
---

<!-- =======================================
     封面
     ======================================= -->

<div class="cover-shell h-full flex flex-col justify-center">
  <div class="hero-kicker mb-6 inline-flex">
    <span class="text-sm text-slate-400 tracking-widest">金恒科技 · 敏捷团队 · 内部培训</span>
  </div>

  <h1 class="text-5xl font-black leading-tight mb-4">
    <span class="gradient-text">AI 驱动研发工程体系</span>
  </h1>

  <p class="text-xl text-slate-300 mb-2">
    <span class="text-slate-200">规范沉淀 · 前后端 AI 工具链 · 业务项目实证</span>
  </p>
  <div class="cover-meta-stack mb-8 text-base text-slate-400">
    <div class="cover-meta-line">
      <span>jh-agileteam-doc · wl-skills-kit · wl-skills-ui · wl-skills-bd</span>
    </div>
    <div class="cover-meta-line text-sm text-slate-500">
      <span>以 wl-mdata / mdm-service 为业务基线</span>
      <span class="cover-meta-status">业务验证中</span>
    </div>
  </div>

  <div class="cover-presenter-card mb-7">
    <div class="cover-presenter-item">
      <span class="cover-presenter-label">演讲人</span>
      <span class="cover-presenter-value">CHENY</span>
    </div>
    <div class="cover-presenter-divider"></div>
    <div class="cover-presenter-item">
      <span class="cover-presenter-label">工号</span>
      <span class="cover-presenter-value">409322</span>
    </div>
    <div class="cover-presenter-divider"></div>
    <div class="cover-presenter-item cover-presenter-item-wide">
      <span class="cover-presenter-label">部门</span>
      <span class="cover-presenter-value">共享技术中心</span>
    </div>
  </div>

  <div class="flex gap-3 flex-wrap items-center">
    <span class="badge badge-done">L1–L4 已落地</span>
    <span class="badge badge-wip">L5 多项目试运行</span>
    <span class="badge badge-plan">L6–L7 规划中</span>
    <span class="text-slate-500 text-xs ml-2">前端 v2.9.4 · UI v1.8.13 · 后端 v0.0.1 骨架</span>
  </div>

  <div class="cover-corner-note">2026 · 持续演进中</div>

</div>

---
src: ./pages/00-preface.md
---

---
layout: default
---

<div class="h-full flex flex-col items-center justify-center text-center gap-6">

  <div class="text-slate-400 text-sm tracking-widest uppercase mb-2">一个容易被忽略的事实</div>

  <div class="text-white font-bold text-xl mb-2">单点对话写一个页面，AI 可能 90% 准确。<br>但当任务变成这样呢？</div>

  <div class="grid grid-cols-3 gap-4 text-sm max-w-3xl w-full">
    <div class="panel-soft-indigo text-center !py-5">
      <div class="text-3xl mb-2">📄 × 20</div>
      <div class="text-indigo-300 font-bold">批量生成 20 个页面</div>
      <div class="text-slate-400 text-xs mt-2">每个页面都要符合<br>同一套组件规范和布局约定</div>
    </div>
    <div class="panel-soft-cyan text-center !py-5">
      <div class="text-3xl mb-2">🔗 × 10</div>
      <div class="text-cyan-300 font-bold">串联 10 步工作流</div>
      <div class="text-slate-400 text-xs mt-2">扫描→契约→生成→校验→同步<br>每步输出是下步输入</div>
    </div>
    <div class="panel-soft-green text-center !py-5">
      <div class="text-3xl mb-2">👥 × N</div>
      <div class="text-green-300 font-bold">多人协同一致性</div>
      <div class="text-slate-400 text-xs mt-2">5 个人用 AI 生成的代码<br>风格、命名、结构要统一</div>
    </div>
  </div>

  <div class="metric-stage mt-4">
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-red" style="font-size:5rem">30%</div>
      <div class="metric-caption">规模化场景下<br>无体系约束的一致性</div>
    </div>
    <div class="metric-divider">→</div>
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-green" style="font-size:5rem">85%</div>
      <div class="metric-caption">规范 + Skills + MCP<br>体系化接入后</div>
    </div>
  </div>

  <div class="metric-summary">
    单次对话的准确率不是瓶颈——<strong class="text-white">规模化、多步骤、跨模块场景下的一致性</strong>才是真正要解决的问题
  </div>
</div>

---
layout: intro
---

# 听完这次培训，你能拿走什么

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="arch-card">
<div class="text-indigo-300 font-bold mb-2">🔧 一套可直接接入的工程底座</div>
<div class="text-slate-400 text-sm leading-relaxed">一行命令把 10 个 Skill + 14 条规范 + 17 个 MCP Tool 写入你的项目，AI 立刻从"猜"变成"按规则工作"。</div>
</div>

<div class="arch-card-cyan">
<div class="text-cyan-300 font-bold mb-2">📐 一份前后端统一契约方案</div>
<div class="text-slate-400 text-sm leading-relaxed">api.md 作为唯一交汇点，前端生成它、后端消费它、AI 两端都读它。联调返工从 4~8 小时降到 30 分钟内。</div>
</div>

<div class="arch-card-green">
<div class="text-green-300 font-bold mb-2">✅ 一条已验证的全链路 Pipeline</div>
<div class="text-slate-400 text-sm leading-relaxed">从需求扫描到页面生成、规范审计、菜单同步，10 步中 8 步自动推进，人只在写后台数据前确认一次。</div>
</div>

<div class="arch-card-orange">
<div class="text-orange-300 font-bold mb-2">🎯 一个清晰的团队落地路径</div>
<div class="text-slate-400 text-sm leading-relaxed">不是"全员转型"，而是先 1~2 人跑通真实页面，用结果说话再扩散。今天会给出具体的第一步行动。</div>
</div>

</div>

---
layout: default
---

# 今天这条主线

<div class="grid grid-cols-2 gap-3 mt-3" style="height:calc(100% - 4rem)">

<div class="arch-card flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l0 text-xs">01</span>
    <span class="font-bold text-blue-300 text-sm">为什么需要这套体系</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">AI 写单个页面没问题，但批量生成 + 多步串联 + 多人协同时一致性急剧下降。根因：缺少项目级上下文约束。</div>
</div>

<div class="arch-card flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l1 text-xs">02</span>
    <span class="font-bold text-indigo-300 text-sm">L0–L7 能力层级体系</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">8 层递进路径：文件注入 → 提示词路由 → Skill 固化 → MCP 实时查询 → CLI 工程化 → Pipeline → Multi-Agent → 自演化。</div>
</div>

<div class="arch-card flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l2 text-xs">03</span>
    <span class="font-bold text-purple-300 text-sm">wl-skills-kit 前端工具链</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">10 Skill + 17 MCP Tool + 9 CLI + 14 条规范。一行命令接入，覆盖从需求扫描到菜单同步的完整前端链路。</div>
</div>

<div class="arch-card-cyan flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l3 text-xs">04</span>
    <span class="font-bold text-cyan-300 text-sm">wl-skills-ui 视觉体系</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">设计令牌 → 原子控件 → 封装化妆 → 页面骨架 → Runtime 渲染。老项目一行样式入口统一视觉基线，不动业务代码。</div>
</div>

<div class="arch-card-green flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l4 text-xs">05</span>
    <span class="font-bold text-green-300 text-sm">wl-skills-bd 后端工程</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">与前端镜像对齐的后端 AI 工程体系。9 步从 api.md 契约到可部署服务，反向沉淀自 mdm-service 真实项目。</div>
</div>

<div class="arch-card-orange flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l5 text-xs">06</span>
    <span class="font-bold text-amber-300 text-sm">全链路 Pipeline 实战</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">10 步端到端流水线：需求输入 → 契约生成 → 代码产出 → 校验审计 → 后台同步。8 步自动推进，2 步人工门控。</div>
</div>

<div class="arch-card-purple flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l6 text-xs">07</span>
    <span class="font-bold text-purple-300 text-sm">挑战与突破</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">精准度从 30% 到 85% 的真实路径、上下文质量 > 长度、人工确认边界设定、团队小步落地节奏。</div>
</div>

<div class="arch-card flex flex-col justify-center">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="level-tag l7 text-xs">08</span>
    <span class="font-bold text-indigo-300 text-sm">远期愿景与行动计划</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">三阶段推进：先跑通 → 再调度 → 再闭环。产品·研发·测试共用一套契约体系，附团队落地行动清单。</div>
</div>

</div>

---
src: ./pages/01-why.md
---

---
src: ./pages/02-l0-l7.md
---

---
src: ./pages/03-kit.md
---

---
src: ./pages/04-ui.md
---

---
src: ./pages/05-bd.md
---

---
src: ./pages/06-workflow.md
---

---
src: ./pages/07-challenges.md
---

---
src: ./pages/08-vision.md
---
