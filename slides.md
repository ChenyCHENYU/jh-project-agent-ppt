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
layout: default
---

<div class="h-full flex flex-col items-center justify-center text-center gap-8">
  <div class="metric-stage">
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-red">30%</div>
      <div class="metric-caption">无上下文时<br>AI 输出符合团队规范的比例</div>
    </div>
    <div class="metric-divider">→</div>
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-green">85%</div>
      <div class="metric-caption">规范注入 + Skills + MCP<br>体系化接入后的目标区间</div>
    </div>
  </div>
  <div class="metric-summary">
    这 55% 的差距，不靠换更好的 AI 模型——靠的是<strong class="text-white">你主动给 AI 的上下文质量</strong>
  </div>
</div>

---
layout: intro
---

# 这次培训，你最该带走什么

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="arch-card">
<div class="text-indigo-300 font-bold mb-2">🎯 解决什么问题</div>
<div class="text-slate-400 text-sm leading-relaxed">团队已经在用 AI，但还没有把 AI 变成稳定工程能力。<br>这次培训要解决的，是怎么把“偶尔好用”变成“可复制地产出”。</div>
</div>

<div class="arch-card-cyan">
<div class="text-cyan-300 font-bold mb-2">📐 今天围绕三件事</div>
<div class="text-slate-400 text-sm space-y-1">
  <div>· 为什么 AI 给的不是你想要的？</div>
  <div>· L0–L7 每层解决什么问题？</div>
  <div>· 端到端 Pipeline 实战怎么跑？</div>
</div>
</div>

<div class="arch-card-green">
<div class="text-green-300 font-bold mb-2">✅ 今天就能用的</div>
<div class="text-slate-400 text-sm leading-relaxed">L0–L4 已落地成熟，培训结束后<br>你可以立刻把这套前端工程底座接进自己的项目。</div>
</div>

<div class="arch-card-orange">
<div class="text-orange-300 font-bold mb-2">🔭 正在验证的方向</div>
<div class="text-slate-400 text-sm leading-relaxed">L5 Pipeline 正以 wl-mdata + mdm-service<br>为基线试运行，后面会直接给你看这条路怎么走通。</div>
</div>

</div>

---
layout: default
---

# 今天这条主线，怎么往下走

<div class="statement-card statement-card-indigo mt-3 text-sm">
<strong>建议听法：</strong>前半段先看“为什么 AI 现在还不稳定”，中段看“我们怎么把它做成体系”，后半段再看“这套体系会往哪里继续演进”。
</div>

<div class="chapter-map mt-3 text-sm h-[78%] content-start">

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l0 text-xs">01</span>
    <span class="font-bold text-slate-100">为什么需要这套体系</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">真实研发场景 · AI 的能力边界 · 解法方向</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l1 text-xs">02</span>
    <span class="font-bold text-slate-100">L0–L7 能力层级体系</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">从氛围编程到自演化 · 当前真实落地状态</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l2 text-xs">03</span>
    <span class="font-bold text-slate-100">wl-skills-kit 前端工具链</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">10 Skill · 17 MCP Tool · 9 CLI · 14 条规范</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l3 text-xs">04</span>
    <span class="font-bold text-slate-100">wl-skills-ui UI 风格框架</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">L0–L4 五层架构 · Native/Skin 双模 · Scanner 治理</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l4 text-xs">05</span>
    <span class="font-bold text-slate-100">wl-skills-bd 后端 AI 工具</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">9 Skill · 14 条规范 · 反向沉淀自 mdm-service</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l5 text-xs">06</span>
    <span class="font-bold text-slate-100">全链路 AI Pipeline 实战</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">api.md 前后端契约 · L5 试运行 · L6 设计</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l6 text-xs">07</span>
    <span class="font-bold text-slate-100">挑战与权衡</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">精度边界 · 上下文限制 · 团队落地阻力</div>
</div>

<div class="chapter-map-card">
  <div class="flex items-center gap-2">
    <span class="level-tag l7 text-xs">08</span>
    <span class="font-bold text-slate-100">远期愿景与行动建议</span>
  </div>
  <div class="text-slate-400 text-xs leading-relaxed">L7 自演化飞轮 · Hermes 外部参照 · 团队成员行动清单</div>
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

