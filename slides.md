---
theme: default
title: AI 驱动研发工程体系
titleTemplate: '%s | 金恒科技·敏捷团队'
info: |
  ## AI 驱动研发工程体系 · 内部培训

  五仓库协同：jh-agileteam-doc 规范底座 · wl-skills-design 产品设计  
  wl-skills-kit 前端工具链 · wl-skills-ui UI 风格框架 · wl-skills-bd 后端 AI 工具
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
favicon: /favicon.svg
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
    <span class="text-slate-200">规范沉淀 · 设计先行 · 前后端 AI 工具链 · 业务项目实证</span>
  </p>
  <div class="cover-meta-stack mb-8 text-base text-slate-400">
    <div class="cover-meta-line">
      <span>jh-agileteam-doc · wl-skills-design · wl-skills-kit · wl-skills-ui · wl-skills-bd</span>
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
    <span class="text-slate-500 text-xs ml-2">设计 v0.6.0 · 前端 v2.9.4 · UI v1.8.13 · 后端 v0.0.1 骨架</span>
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

# 听完这次培训，你可以做些尝试

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="arch-card">
<div class="text-indigo-300 font-bold mb-1.5">🔧 两条命令，明天就能用</div>
<div class="text-slate-300 text-sm leading-relaxed">
  <div class="font-mono text-xs text-indigo-300 mb-1">$ npx @agile-team/wl-skills-kit</div>
  <div class="text-slate-400 text-xs mb-2">→ 项目里立刻多出 10 个 Skill + 14 条规范 + 17 个 MCP Tool</div>
  <div class="font-mono text-xs text-indigo-300 mb-1">$ npx @agile-team/wl-skills-design</div>
  <div class="text-slate-400 text-xs">→ 7 个设计 Skill + 176 项验证清单，AI 画流程图不再各画各的</div>
</div>
</div>

<div class="arch-card-cyan">
<div class="text-cyan-300 font-bold mb-1.5">📐 一份契约，前后端不再对不上</div>
<div class="text-slate-300 text-sm leading-relaxed">
  <div class="text-slate-400 text-xs">以前：spec 写 amount，数据库建 ORDER_AMOUNT，接口传 orderAmt</div>
  <div class="text-cyan-300 text-xs my-1">→ 联调时才发现对不上，返工 4~8 小时</div>
  <div class="text-slate-400 text-xs">现在：术语词典锚定一个名 → 设计/数据库/接口三方 ⊆ 词典校验</div>
  <div class="text-green-300 text-xs my-1">→ 设计时就杜绝，不是评审时才发现。返工降到 30 分钟内</div>
</div>
</div>

<div class="arch-card-green">
<div class="text-green-300 font-bold mb-1.5">✅ 已验证：wl-mdata 项目实测结果</div>
<div class="text-slate-300 text-sm leading-relaxed">
  <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
    <div class="text-slate-400">BaseTable 合规</div><div class="text-red-400">28% <span class="text-green-400">→ 100%</span></div>
    <div class="text-slate-400">api.md 契约存在</div><div class="text-red-400">0% <span class="text-green-400">→ 100%</span></div>
    <div class="text-slate-400">cid 绑定完整</div><div class="text-red-400">15% <span class="text-green-400">→ 100%</span></div>
    <div class="text-slate-400">规范审计</div><div class="text-red-400">0 偏差</div>
  </div>
</div>
</div>

<div class="arch-card-orange">
<div class="text-orange-300 font-bold mb-1.5">🎯 今天散会后的第一步</div>
<div class="text-slate-300 text-sm leading-relaxed">
  <div class="text-xs text-slate-400 mb-1">1. 挑你手头一个真实需求</div>
  <div class="text-xs text-slate-400 mb-1">2. <code>wl-skills-design</code> 出设计 → <code>kit</code> 出页面 → <code>bd</code> 出骨架</div>
  <div class="text-xs text-slate-400 mb-1">3. 跑一遍 convention-audit，看报告</div>
  <div class="text-amber-300 text-xs">1~2 个人先试着跑通一个小需求，跑出来的结果比任何培训都有说服力。</div>
</div>
</div>

</div>

---
layout: default
---

<div class="toc-page">

<div class="toc-row">
  <span class="level-tag l0 text-xs">01</span>
  <span class="font-bold text-blue-300 text-sm">为什么需要这套体系</span>
  <span class="text-slate-500 text-xs">AI 单页没问题，批量 + 多步 + 多人协同时一致性急剧下降</span>
</div>

<div class="toc-row">
  <span class="level-tag l1 text-xs">02</span>
  <span class="font-bold text-indigo-300 text-sm">L0–L7 能力层级体系</span>
  <span class="text-slate-500 text-xs">文件注入 → 提示词路由 → Skill → MCP → CLI → Pipeline → Multi-Agent → 自演化</span>
</div>

<div class="toc-row toc-row--amber">
  <span class="level-tag l2 text-xs">03</span>
  <span class="font-bold text-amber-300 text-sm">wl-skills-design 产品设计</span>
  <span class="text-slate-500 text-xs">7 Skill + 8 规范 + 176 验证 · 三角联动 · 生成即合规</span>
</div>

<div class="toc-row">
  <span class="level-tag l3 text-xs">04</span>
  <span class="font-bold text-purple-300 text-sm">wl-skills-kit 前端工具链</span>
  <span class="text-slate-500 text-xs">10 Skill + 17 MCP + 9 CLI + 14 规范 · 完整前端链路</span>
</div>

<div class="toc-row toc-row--cyan">
  <span class="level-tag l4 text-xs">05</span>
  <span class="font-bold text-cyan-300 text-sm">wl-skills-ui 视觉体系</span>
  <span class="text-slate-500 text-xs">令牌 → 原子控件 → 封装化妆 → 骨架 → Runtime · 老项目一行接入</span>
</div>

<div class="toc-row toc-row--green">
  <span class="level-tag l5 text-xs">06</span>
  <span class="font-bold text-green-300 text-sm">wl-skills-bd 后端工程</span>
  <span class="text-slate-500 text-xs">9 步从 api.md 到可部署服务 · 与前端镜像对齐</span>
</div>

<div class="toc-row toc-row--amber">
  <span class="level-tag l5 text-xs">07</span>
  <span class="font-bold text-amber-300 text-sm">全链路 Pipeline 实战</span>
  <span class="text-slate-500 text-xs">10 步端到端 · 8 步自动 + 2 步人工门控</span>
</div>

<div class="toc-row toc-row--cyan">
  <span class="level-tag l3 text-xs" style="font-size:0.6em">07.5</span>
  <span class="font-bold text-cyan-300 text-sm">实战演示</span>
  <span class="text-slate-500 text-xs">终端回放 · 流程动画 · 代码生成 · 改造对比</span>
</div>

<div class="toc-row toc-row--green">
  <span class="level-tag l5 text-xs" style="background:rgba(52,211,153,0.3);color:#6ee7b7">08</span>
  <span class="font-bold text-emerald-300 text-sm">AI 工作流完整闭环</span>
  <span class="text-slate-500 text-xs">需求设计 → 前端 → 后端 → 质量验证 · 契约贯穿</span>
</div>

<div class="toc-row toc-row--purple">
  <span class="level-tag l6 text-xs">09</span>
  <span class="font-bold text-purple-300 text-sm">挑战与突破</span>
  <span class="text-slate-500 text-xs">精准度 30%→85% · 上下文质量 · 人工门控 · 落地节奏</span>
</div>

<div class="toc-row">
  <span class="level-tag l7 text-xs">10</span>
  <span class="font-bold text-indigo-300 text-sm">远期愿景与行动计划</span>
  <span class="text-slate-500 text-xs">先跑通 → 再调度 → 再闭环 · 三阶段推进</span>
</div>

<div class="toc-row toc-row--purple">
  <span class="level-tag l6 text-xs">11</span>
  <span class="font-bold text-amber-300 text-sm">Hermes Agent 深度解析</span>
  <span class="text-slate-500 text-xs">SKILL.md 同源 · MCP 互通 · 互补路径</span>
</div>

</div>

---
src: ./pages/01-why.md
---

---
src: ./pages/02-l0-l7.md
---

---
src: ./pages/03-design.md
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
src: ./pages/06.5-demo.md
---

---
src: ./pages/08-closed-loop.md
---

---
src: ./pages/07-challenges.md
---

---
src: ./pages/08-vision.md
---

---
src: ./pages/09-hermes-agent.md
---

---
src: ./pages/10-ending.md
---
