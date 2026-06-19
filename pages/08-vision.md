---
layout: section
title: 远期愿景与行动计划
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-violet-400 tracking-widest mb-3 uppercase">Chapter 10</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">远期愿景与行动计划</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">全链路闭环 · 多智能体协同 · L7 自演化</p>
  <p class="text-slate-400">从研发工具到产品研发测试一体化智能体</p>
</div>

---
layout: default
---

# 下一步怎么走：三阶段推进

<div class="slide-block compact-stack text-sm">

<div class="phase-line">
  <div class="text-right pr-3">
    <div class="text-blue-300 font-bold">阶段一</div>
    <div class="micro-note">开发侧 Pipeline</div>
  </div>
  <div class="panel-soft-indigo">
    <div class="phase-track">
      <span class="phase-done">✅ L1-L4 已落地</span>
      <span class="phase-done">✅ L5 协议验证</span>
      <span class="phase-active">🟡 真实页面连续跑通</span>
    </div>
    <div class="dense-note text-slate-400 mt-2">退出条件：至少 3 个真实业务页面能连续跑通扫描、契约、生成、审计、同步链路，且无需大面积返工。</div>
  </div>
</div>

<div class="phase-line">
  <div class="text-right pr-3">
    <div class="text-purple-300 font-bold">阶段二</div>
    <div class="micro-note">Multi-Agent</div>
  </div>
  <div class="panel-soft-purple">
    <div class="phase-track">
      <span class="phase-plan">🔭 Orchestrator 设计</span>
      <span class="phase-plan">🔭 可视化工作台 MVP</span>
      <span class="phase-plan">🔭 L6 稳定运行</span>
    </div>
    <div class="dense-note text-slate-400 mt-2">进入条件：先把人工判断沉淀成可复用路由规则，再交给调度层稳定接管执行。</div>
  </div>
</div>

<div class="phase-line">
  <div class="text-right pr-3">
    <div class="text-green-300 font-bold">阶段三</div>
    <div class="micro-note">全链路闭环</div>
  </div>
  <div class="panel-soft-green">
    <div class="phase-track">
      <span class="phase-plan phase-ghost">产品侧 Pipeline</span>
      <span class="phase-plan phase-ghost">测试侧 Pipeline</span>
      <span class="phase-plan phase-ghost">三侧打通 + L7 规划</span>
    </div>
    <div class="dense-note text-slate-400 mt-2">进入条件：研发侧先形成稳定数据闭环，产品和测试再接入同一套契约与反馈系统。</div>
  </div>
</div>

</div>

<div class="statement-card statement-card-indigo mt-3 text-sm">
<strong>推进原则：</strong> 先跑通，再调度，再闭环。不是按时间点承诺，而是按验证结果推进；前一阶段没有形成可复用经验，就不扩大到下一阶段。
</div>

---
layout: default
---

# 最终形态：产品、研发、测试共用一套闭环

<div class="slide-block compact-stack">

<div class="statement-card statement-card-indigo text-sm">
<strong>核心不是多 3 个 Agent，</strong>而是让产品、研发、测试三侧都消费同一套契约，并把结果持续回写到同一个反馈系统。
</div>

<div class="fit-grid-3 text-sm">
<div class="panel-soft-indigo text-center">
  <div class="text-blue-300 font-bold mb-2">🎨 产品侧 Agent</div>
  <div class="text-slate-300 text-sm">需求澄清 · 场景还原 · page-spec / input-spec</div>
  <div class="micro-note mt-2">把“要什么”变成机器可消费的验收口径</div>
</div>
<div class="panel-soft-purple text-center">
  <div class="text-purple-300 font-bold mb-2">⚡ 研发侧 Multi-Agent</div>
  <div class="text-slate-300 text-sm">需求解析 · 代码生成 · 校验审计 · 同步执行</div>
  <div class="micro-note mt-2">核心执行层，统一消耗契约并产出代码与报告</div>
</div>
<div class="panel-soft-green text-center">
  <div class="text-green-300 font-bold mb-2">✅ 测试侧 Agent</div>
  <div class="text-slate-300 text-sm">接口测试生成 · E2E 场景生成 · 回归补全</div>
  <div class="micro-note mt-2">把研发侧产物转成可执行质量反馈</div>
</div>
</div>

<div class="panel-soft">
  <div class="fit-grid-3 text-[11px]">
    <div class="text-center">
      <div class="text-slate-500 mb-1">产品 → 研发</div>
      <div class="text-slate-200">page-spec + input-spec</div>
    </div>
    <div class="text-center">
      <div class="text-slate-500 mb-1">研发 → 测试</div>
      <div class="text-slate-200">审计报告 + 缺陷预警</div>
    </div>
    <div class="text-center">
      <div class="text-slate-500 mb-1">测试 → 产品</div>
      <div class="text-slate-200">缺陷反馈 + 需求回流</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-sm">
<div class="arch-card">
  <div class="text-blue-300 font-bold">产品侧价值</div>
  <div class="text-slate-400 mt-1">需求不再停留在自然语言文档，而是沉淀成可直接驱动生成的 page-spec。</div>
</div>
<div class="arch-card">
  <div class="text-purple-300 font-bold">研发侧价值</div>
  <div class="text-slate-400 mt-1">研发角色从“手工搬砖”转向“做判断、做审阅”，把时间放在关键决策上。</div>
</div>
<div class="arch-card">
  <div class="text-green-300 font-bold">测试侧价值</div>
  <div class="text-slate-400 mt-1">测试用例和 E2E 场景跟随契约自动更新，质量反馈不再晚于开发收尾。</div>
</div>
</div>

</div>

---
layout: default
---

<h1 class="tight-title hermes-title">外部参照：Hermes Agent 与我们的下一步</h1>

<div class="page-fit-sm compare-stage compare-stage-tight hermes-stage text-[11px] leading-4.5">

<div class="compare-panel compare-panel-neutral">
  <div class="statement-card statement-card-indigo">
    <strong>我们看 Hermes，不是因为它“更强”，</strong><br>
    而是它做的事和我们 L6-L7 的方向高度一致，这说明我们的长期愿景是有现实参照的，不是凭空想象。
  </div>

  <div class="feature-list">
    <div class="feature-item"><div class="feature-mark">H</div><div><strong class="text-indigo-300">持久记忆 + 跨会话回溯</strong><br><span class="text-slate-400">不是只靠当前上下文，而是能长期积累用户、任务和经验。</span></div></div>
    <div class="feature-item"><div class="feature-mark">H</div><div><strong class="text-indigo-300">并行子 Agent + 调度</strong><br><span class="text-slate-400">把多步复杂流程拆给隔离子代理，并通过网关和调度器长期运行。</span></div></div>
    <div class="feature-item"><div class="feature-mark">H</div><div><strong class="text-indigo-300">Cron / Gateway / 多平台入口</strong><br><span class="text-slate-400">Telegram、Slack、邮件、定时任务这些运行时能力，都是成熟形态。</span></div></div>
    <div class="feature-item"><div class="feature-mark">H</div><div><strong class="text-indigo-300">Skill / MCP 同源</strong><br><span class="text-slate-400">它和我们并不冲突，底层语言其实很接近：SKILL.md、MCP、上下文文件。</span></div></div>
  </div>
</div>

<div class="compare-panel compare-panel-after">
  <div class="statement-card statement-card-green">
    <strong>我们的价值不在重造 Hermes，</strong><br>
    应把前后端企业研发里的“领域燃料”做好，接到这样的引擎之上。
  </div>

  <div class="feature-list">
    <div class="feature-item"><div class="feature-mark">W</div><div><strong class="text-green-300">我们已经有领域约束</strong><br><span class="text-slate-400">Vue 3、AG Grid、UnoCSS、Spring Boot、MyBatis-Plus、CI 门禁、菜单字典权限约束都在这里。</span></div></div>
    <div class="feature-item"><div class="feature-mark">W</div><div><strong class="text-green-300">我们已经有项目级真实链路</strong><br><span class="text-slate-400">从 kit init、api.md 到前后端 Pipeline，这套不是概念验证，而是业务项目里跑出来的。</span></div></div>
    <div class="feature-item"><div class="feature-mark">?</div><div><strong class="text-green-300">有 Hermes 还要多智能体吗？</strong><br><span class="text-slate-400">要。Hermes 解决的是“怎么调度多个 Agent”，不替我们解决“这些 Agent 应该懂什么业务规则、走什么企业链路”。</span></div></div>
    <div class="feature-item"><div class="feature-mark">◎</div><div><strong class="text-green-300">对团队的意义</strong><br><span class="text-slate-400">未来不是“再多一个 Agent”，而是让通用引擎真正跑懂我们的研发体系。</span></div></div>
  </div>
</div>

</div>

<div class="statement-card statement-card-indigo hermes-conclusion mt-0.5 !p-2 text-[10.5px] leading-[1.25rem]">
<strong>结论：</strong>Hermes 更像多智能体运行时，我们更像企业研发燃料。未来不是“有了 Hermes 就不要多智能体”，而是<strong>不必从零造运行时，但一定要把多智能体接到我们的企业规则之上</strong>。
</div>

---
layout: default
---

<h1 class="tight-title">L7：自演化体系</h1>

<div class="page-fit compare-stage compare-stage-tight text-[13px] leading-5">

<div class="compare-panel compare-panel-neutral">

<div class="statement-card statement-card-indigo">
<strong>自演化是什么意思？</strong><br>
不是 AI 自己写自己的规范，而是通过持续积累数据，让规范和 Skill 的迭代<strong>更有数据支撑、更系统化</strong>。
</div>

<div class="arch-card text-[12px] leading-5">
<strong>L7 的输入数据（需要 L5/L6 积累）：</strong>
<ul class="mt-1 space-y-0.5 text-slate-300">
  <li>convention-audit 历史报告（问题分布）</li>
  <li>Pipeline 决策记录（人工判断规律）</li>
  <li>code-fix 修改记录（哪些错误最常见）</li>
  <li>业务文档积累（语义化的业务知识库）</li>
</ul>
</div>

<div class="statement-card text-sm">
<strong>为什么 L7 还远？</strong><br>
需要 L5 稳定运行 3 到 6 个月，积累足够的审计报告和修改样本。没有数据，规则无法自演化。
</div>

<div class="statement-card statement-card-green text-[11px] leading-4.5">
<strong>飞轮开始转的信号：</strong>
当 convention-audit 提示修改后，下次 AI 不再犯同样的错，说明飞轮已经开始转。L7 只是把这个过程<strong>系统化、可量化、可加速</strong>。
</div>

</div>

<div>

<!-- 飞轮 HTML 替代 mermaid -->
<div class="flow-column-compact text-[10px]">
  <div class="flow-node w-32 text-center !p-2.5">
    <div class="text-indigo-300 font-bold">🤖 AI 生成代码</div>
    <div class="text-slate-500 text-[9px]">Copilot / Cursor</div>
  </div>
  <div class="flow-arrow text-[10px] text-slate-600">↓</div>
  <div class="flow-node-green w-32 !p-2.5">
    <div class="text-green-300 font-bold">👁 人工 Review</div>
    <div class="text-slate-500 text-[9px]">校验 · 修改</div>
  </div>
  <div class="flow-arrow text-[10px]">↓</div>
  <div class="flow-node-amber w-32 !p-2.5">
    <div class="text-amber-300 font-bold">📊 数据积累</div>
    <div class="text-slate-500 text-[9px]">审计 / 决策 / 样本</div>
  </div>
  <div class="flow-arrow text-[10px]">↓</div>
  <div class="flow-node-purple w-32 !p-2.5">
    <div class="text-purple-300 font-bold">🔬 规律发现</div>
    <div class="text-slate-500 text-[9px]">错误模式 / 高频问题</div>
  </div>
  <div class="flow-arrow text-[10px]">↓</div>
  <div class="flow-node-green w-32 !p-2.5">
    <div class="text-green-300 font-bold">✏️ 规范迭代</div>
    <div class="text-slate-500 text-[9px]">更新 Skill / 规范</div>
  </div>
</div>

</div>

</div>

---
layout: default
---

# 行动计划：三步开始落地

<div class="grid grid-cols-2 gap-4 mt-4" style="height:calc(100% - 5.5rem)">

<div class="compact-stack">

<div class="step-card panel-soft-indigo">
  <div class="step-index text-indigo-400">1</div>
  <div>
    <div class="font-bold text-white mb-1">先跑一遍真实链路</div>
    <div class="text-slate-400 text-sm leading-relaxed">拿你手头真实需求，从 <code class="text-indigo-300">kit init</code> 到 prototype-scan、page-codegen、convention-audit，完整走一遍。</div>
  </div>
</div>

<div class="step-card panel-soft-cyan">
  <div class="step-index text-cyan-400">2</div>
  <div>
    <div class="font-bold text-white mb-1">接入 wl-skills-ui 化妆模式</div>
    <div class="text-slate-400 text-sm leading-relaxed">不动业务逻辑，只补一行样式入口，立刻验证视觉令牌和页面一致性是否真正建立起来。</div>
  </div>
</div>

<div class="step-card panel-soft-green">
  <div class="step-index text-green-400">3</div>
  <div>
    <div class="font-bold text-white mb-1">留下第一份 Pipeline 决策记录</div>
    <div class="text-slate-400 text-sm leading-relaxed">把“我为什么这样判断”写进 <code class="text-green-300">_pipeline-notes.md</code>，它会成为后面 L6 和 L7 的第一批训练素材。</div>
  </div>
</div>

</div>

<div class="flex flex-col justify-between">

<div class="quote-panel flex-1 flex flex-col justify-center">
  <div class="text-slate-400 text-xs tracking-widest uppercase mb-3">最后一句话</div>
  <div class="text-white font-black leading-snug" style="font-size:1.35rem">
    你给 AI 的上下文质量，<br>
    <span class="text-purple-300">决定了它能给你的答案质量。</span>
  </div>
  <div class="mt-4 text-slate-300 text-sm leading-relaxed">
    这套体系真正的价值，不在于多一个工具，而在于把“如何提供高质量上下文”做成团队可复制、可复用、可持续演进的基础设施。
  </div>
</div>

<div class="fit-grid-3 mt-3 text-sm">
  <div class="arch-card text-center">
    <div class="text-2xl mb-2">🔨</div>
    <div class="font-bold text-blue-300 mb-1">现阶段</div>
    <div class="text-slate-400 text-xs leading-5">把最佳实践变成 AI 可执行规则，减少重复劳动。</div>
  </div>
  <div class="arch-card-cyan text-center">
    <div class="text-2xl mb-2">⚡</div>
    <div class="font-bold text-cyan-300 mb-1">中期</div>
    <div class="text-slate-400 text-xs leading-5">从人工串联 Skills 走向 Agent Pipeline 自动化。</div>
  </div>
  <div class="arch-card-green text-center">
    <div class="text-2xl mb-2">🚀</div>
    <div class="font-bold text-green-300 mb-1">长期</div>
    <div class="text-slate-400 text-xs leading-5">产品、研发、测试基于同一闭环协同演进。</div>
  </div>
</div>

</div>

</div>

<!--
演讲者备注：
结尾要有"今天听完，明天能做什么"的行动指南
不要只是理论，要有具体的第一步
-->
