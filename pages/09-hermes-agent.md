---
layout: section
title: Hermes Agent 深度解析
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-amber-400 tracking-widest mb-3 uppercase">Chapter 11</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">Hermes Agent</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">同道中人还是遥远的参照？</p>
  <p class="text-slate-400">对比分析 · 互补关系 · SKILL.md 同源 · 集成路径</p>
</div>

---
layout: default
title: Hermes Agent 是什么？
---

# Hermes Agent — 同道中人

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="arch-card space-y-2">

**来自 Nous Research**

Hermes 系列模型的作者，开源，MIT License  
2026年2月发布，已有 **v0.14.0**，每1-2周迭代

<div class="mt-2 flex gap-2 flex-wrap">
  <span class="badge badge-done">164k ★ GitHub</span>
  <span class="badge badge-new">1,174 贡献者</span>
</div>

</div>

<div class="arch-card-purple space-y-2">

**核心定位**

> "The **self-improving** AI agent."  
> 内置学习循环的 Agent——从经验创建技能，使用中自我改进，跨会话积累对你的理解。

不是代码补全，不是聊天机器人  
是一个**24×7 运行在服务器上的自治体**

</div>

<div class="arch-card-cyan space-y-1">

**技术能力速览**

- 🧠 持久记忆（FTS5 全文索引）
- 🔧 技能系统（SKILL.md 开放标准）  
- 🤖 并行子智能体（生产可用 L6）
- 📅 定时任务 / Cron 调度
- 🌐 20+ 消息平台（飞书、钉钉等）

</div>

</div>

---
layout: two-cols
title: 共同点与差异点
---

# 我们站在同一条路上

<div class="pr-4 space-y-3 mt-2">

<div class="arch-card-green text-sm">

**🤝 共同认知**

- 都使用 **SKILL.md 开放标准**（agentskills.io）
- 都采用 **MCP 协议** 作为工具层
- 都相信：AI 需要**结构化上下文**才能可靠工作
- 都在探索 **L6 Multi-Agent** 协作

</div>

<div class="arch-card-purple text-sm">

**⚡ Hermes 领先的地方**

- **生产级 L6/L7**：并行子 Agent + 自演化已上线
- **通用平台**：20+ 消息平台、定时任务
- **活跃生态**：164k ★，1174 贡献者，社区规模巨大
- **零门槛运行**：$5 VPS 即可部署

</div>

</div>

::right::

<div class="pl-4 space-y-3 mt-2">

<div class="arch-card-yellow text-sm">

**🏆 我们领先的地方**

- **企业认证集成**：SSO、权限、审计链
- **领域专用知识**：Vue 3 / AGGrid / TypeScript 的精准约束
- **IDE 原生**：Cursor / VS Code 深度集成，实时协作
- **CI/CD 门禁**：PR 自动检查，质量卡口
- **团队策展技能**：经过项目验证，非通用模板
- **版本化管理**：Skills 跟随 Git，可回滚

</div>

<div class="arch-card text-sm">

**📌 一句话总结**

> Hermes 造了**通用引擎**（调度 · 记忆 · 演化）  
> 我们造了**领域燃料**（前后端企业规范 · 项目规则 · CI 门禁）

两者 **互补不竞争**

</div>

</div>

---
layout: default
title: 结论 — 我们的位置
---

<h1 class="tight-title">结论：我们不是在重复造轮子</h1>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="arch-card-purple">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-2xl">🚗</div>
    <div class="text-purple-300 font-bold text-base">Hermes Agent = 引擎</div>
  </div>
  <div class="text-slate-300 text-sm space-y-1.5 leading-relaxed">
    <div>通用调度 · 持久记忆 · 自演化</div>
    <div>L6 Multi-Agent（生产可用）</div>
    <div>20+ 平台接入 · 定时任务</div>
    <div>社区生态 · 模型中立（200+ 模型）</div>
  </div>
  <div class="mt-3 pt-2 border-t border-purple-500/30 text-sm">
    <span class="text-purple-400 font-bold">解决的：</span><span class="text-slate-200">通用 AI 运行时</span>
  </div>
</div>

<div class="arch-card-yellow">
  <div class="flex items-center gap-2 mb-2">
    <div class="text-2xl">⛽</div>
    <div class="text-amber-300 font-bold text-base">我们的体系 = 领域燃料</div>
  </div>
  <div class="text-slate-300 text-sm space-y-1.5 leading-relaxed">
    <div>前端企业规范（Vue3 · AGGrid · UnoCSS）</div>
    <div>后端工作流（Spring Boot · MyBatis-Plus）</div>
    <div>CI/CD 质量门禁</div>
    <div>团队策展 Skills（经过项目验证）</div>
  </div>
  <div class="mt-3 pt-2 border-t border-amber-500/30 text-sm">
    <span class="text-amber-400 font-bold">解决的：</span><span class="text-slate-200">企业领域 AI 落地</span>
  </div>
</div>

</div>

<div class="mt-4 text-center">
  <div style="background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(168,85,247,0.12),rgba(251,191,36,0.12));border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:16px 24px;max-width:640px;margin:0 auto">
    <div class="text-xl font-bold text-white leading-relaxed">
      我们不是在重复造轮子——<br>
      我们在为引擎配上<span class="gradient-text">领域专用的燃料</span>。
    </div>
  </div>

  <div class="mt-4 flex justify-center gap-3">
    <span class="badge badge-done">SKILL.md 同源</span>
    <span class="badge badge-new">MCP 互通</span>
    <span class="badge badge-wip">L6/L7 路径已清晰</span>
  </div>
</div>
