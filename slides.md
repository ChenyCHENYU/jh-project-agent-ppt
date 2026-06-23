---
theme: default
title: AI 开发阶段的标准化
titleTemplate: '%s | 金恒科技·敏捷团队'
info: |
  ## AI 开发阶段的标准化 · 技术分享

  四包协同：wl-skills-design 产品设计 · wl-skills-kit 前端工具链
  wl-skills-ui UI 风格框架 · wl-skills-bd 后端 AI 工具
  以 api.md 契约贯穿，规范编码化 + 生成即合规

  **金恒科技 · 敏捷团队 · 2026.06.23**
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
    <span class="text-sm text-slate-400 tracking-widest">金恒科技 · 敏捷团队</span>
  </div>

  <h1 class="text-5xl font-black leading-tight mb-4">
    <span class="gradient-text">AI 开发阶段的标准化</span>
  </h1>

  <p class="text-xl text-slate-300 mb-2">
    <span class="text-slate-200">规范编码化 · 契约贯穿 · 生成即合规</span>
  </p>
  <div class="cover-meta-stack mb-8 text-base text-slate-400">
    <div class="cover-meta-line">
      <span>wl-skills-design · wl-skills-kit · wl-skills-ui · wl-skills-bd</span>
    </div>
    <div class="cover-meta-line text-sm text-slate-500">
      <span>四个包各标准化一个阶段，api.md 契约贯穿全链路</span>
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
    <span class="badge badge-done">design v0.7.0</span>
    <span class="badge badge-wip">kit v2.11.1</span>
    <span class="badge badge-new">ui v1.8.13</span>
    <span class="badge badge-plan">bd v0.0.2 骨架</span>
    <span class="text-slate-500 text-xs ml-2">四包协同 · 业务实证中</span>
  </div>

  <div class="cover-corner-note">2026.06.23</div>

</div>

---
layout: default
---

<div class="h-full flex flex-col items-center justify-center text-center gap-3">

  <div class="text-slate-400 text-xs tracking-widest uppercase mb-1">一个容易被忽略的事实</div>

  <div v-click class="text-white font-bold text-lg mb-1">单点对话写一个页面，AI 可能 90% 准确。但当任务变成这样呢？</div>

  <div class="grid grid-cols-3 gap-3 text-sm max-w-3xl w-full">
    <div v-click class="panel-soft-indigo text-center !py-3">
      <div class="text-2xl mb-1">📄 × 20</div>
      <div class="text-indigo-300 font-bold text-sm">批量生成 20 个页面</div>
      <div class="text-slate-400 text-[11px] mt-1">每个都要符合同一套规范</div>
    </div>
    <div v-click class="panel-soft-cyan text-center !py-3">
      <div class="text-2xl mb-1">🔗 × 10</div>
      <div class="text-cyan-300 font-bold text-sm">串联 10 步工作流</div>
      <div class="text-slate-400 text-[11px] mt-1">每步输出是下步输入</div>
    </div>
    <div v-click class="panel-soft-green text-center !py-3">
      <div class="text-2xl mb-1">👥 × N</div>
      <div class="text-green-300 font-bold text-sm">多人协同一致性</div>
      <div class="text-slate-400 text-[11px] mt-1">风格命名结构要统一</div>
    </div>
  </div>

  <div v-click class="metric-stage mt-1">
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-red" style="font-size:3rem">30%</div>
      <div class="metric-caption">规模化场景<br>无体系约束</div>
    </div>
    <div class="metric-divider">→</div>
    <div class="metric-panel">
      <div class="metric-number-hero metric-number-green" style="font-size:3rem">85%</div>
      <div class="metric-caption">标准化接入<br>四包协同</div>
    </div>
  </div>

  <div v-click class="metric-summary !text-[13px]">
    单次对话准确率不是瓶颈——<strong class="text-white">规模化、多步骤、跨模块下的一致性</strong>才是真正要解决的问题。
  </div>
</div>

---
layout: default
clicks: 6
---

<div class="agenda">

<div class="agenda-head">
  <div class="text-xs text-blue-400 tracking-widest uppercase mb-2 vc-in" v-click>目录 · AGENDA</div>
  <div class="text-white font-black text-3xl vc-in" v-click>今天会讲什么</div>
</div>

<div class="agenda-spine"></div>

<div v-click class="agenda-item vc-in">
  <div class="agenda-node"></div>
  <div class="agenda-num">01</div>
  <div>
    <div class="agenda-title">为什么需要标准化</div>
    <div class="agenda-sub">单点准、规模化崩——批量 + 多步 + 多人协同时的一致性塌方</div>
  </div>
</div>

<div v-click class="agenda-item vc-in">
  <div class="agenda-node"></div>
  <div class="agenda-num">02</div>
  <div>
    <div class="agenda-title">什么是标准化 · 全景</div>
    <div class="agenda-sub">规范编码化 + 契约贯穿 + 生成即合规 · 能力分层地图</div>
  </div>
</div>

<div v-click class="agenda-focus vc-in">
  <div class="agenda-node agenda-node--accent"></div>
  <div class="agenda-num">03–07</div>
  <div class="agenda-focus-card">
    <div class="agenda-focus-title">四个包各标准化一个阶段 <span class="agenda-focus-badge">今天主线</span></div>
    <div class="agenda-focus-sub">每个包守一个开发环节，api.md 契约贯穿全链路</div>
    <div class="agenda-focus-chips">
      <div class="agenda-chip"><div class="agenda-chip-name text-amber-300">design</div><div class="agenda-chip-desc">设计 · 214验证</div></div>
      <div class="agenda-chip"><div class="agenda-chip-name text-indigo-300">kit</div><div class="agenda-chip-desc">前端 · 11 Skill</div></div>
      <div class="agenda-chip"><div class="agenda-chip-name text-cyan-300">ui</div><div class="agenda-chip-desc">视觉 · 5层</div></div>
      <div class="agenda-chip"><div class="agenda-chip-name text-green-300">bd</div><div class="agenda-chip-desc">后端 · 9 步</div></div>
    </div>
  </div>
</div>

<div v-click class="agenda-item vc-in">
  <div class="agenda-node"></div>
  <div class="agenda-num">08–11</div>
  <div>
    <div class="agenda-title">契约贯穿 · 工作流 · 实战演示 · 量化效果</div>
    <div class="agenda-sub">api.md 唯一交汇点 · 终端链路还原 · 30→85 数据</div>
  </div>
</div>

<div v-click class="agenda-item vc-in">
  <div class="agenda-node"></div>
  <div class="agenda-num">12–14</div>
  <div>
    <div class="agenda-title">四包闭环 · 挑战与边界 · 怎么开始</div>
    <div class="agenda-sub">持续反馈飞轮 · 合理预期 · 基建先行小步快跑</div>
  </div>
</div>

</div>

---
src: ./pages/00-preface.md
---

---
src: ./pages/01-why.md
---

---
src: ./pages/02-thesis.md
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
src: ./pages/03b-kit-depth.md
---

---
src: ./pages/04-ui.md
---

---
src: ./pages/05-bd.md
---

---
src: ./pages/05b-contract.md
---

---
src: ./pages/06-workflow.md
---

---
src: ./pages/06.5-demo.md
---

---
src: ./pages/06.6-e2e-demo.md
---

---
src: ./pages/09-metrics.md
---

---
src: ./pages/08-closed-loop.md
---

---
src: ./pages/07-challenges.md
---

---
src: ./pages/10-action.md
---

---
src: ./pages/10-ending.md
---
