---
layout: section
title: 挑战与突破
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-red-400 tracking-widest mb-3 uppercase">13 · 挑战与边界</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text-warm">挑战与突破</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">不是回避问题，而是画清边界</p>
  <p class="text-slate-400">精准度瓶颈 · 上下文限制 · 人工门控 · 团队落地节奏</p>
</div>

---
layout: default
---

# 真正的难点，不止一个

<div class="fit-grid-2 mt-4" style="height:calc(100% - 5rem)">

<div class="panel-soft-red flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <span class="text-red-400 font-bold text-sm">挑战一</span>
    <span class="text-white font-bold">精准度瓶颈</span>
  </div>
  <div class="flex items-center gap-4 my-1">
    <div class="text-center">
      <div class="big-number text-red-400">30%</div>
      <div class="text-slate-600 text-xs mt-1">规模化裸用</div>
    </div>
    <div class="text-slate-700 text-2xl font-bold">→</div>
    <div class="text-center">
      <div class="big-number text-green-400">85%</div>
      <div class="text-slate-600 text-xs mt-1">体系化接入</div>
    </div>
  </div>
  <div class="text-slate-500 text-xs leading-relaxed">业务逻辑不确定性 + 规范与实现的 gap，决定了 85% 已经是很高的工程化水平。目标不是零修改，而是从<strong class="text-slate-300">"大面积返工"变成"少量校正"</strong>。</div>
</div>

<div class="panel-soft-amber flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <span class="text-amber-400 font-bold text-sm">挑战二</span>
    <span class="text-white font-bold">上下文噪音</span>
  </div>
  <div class="text-amber-300 font-black text-2xl my-1">质量 &gt; 长度</div>
  <div class="text-slate-500 text-xs leading-relaxed">1M 窗口已不是核心问题，真正的问题是把无关上下文一股脑塞进去。<strong class="text-slate-300">懒加载规范 + MCP 实时查询</strong>的价值，是只在需要时注入有效上下文。</div>
</div>

<div class="panel-soft-indigo flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <span class="text-indigo-400 font-bold text-sm">挑战三</span>
    <span class="text-white font-bold">人工确认边界</span>
  </div>
  <div class="text-indigo-300 font-black text-xl my-1">diff → 确认 → 执行</div>
  <div class="text-slate-500 text-xs leading-relaxed">写数据库 / 改菜单 / 发消息必须人工确认。<strong class="text-slate-300">没有 diff 预览的确认，本质上就是盲目执行</strong>，所以高风险动作必须先可视化再放行。</div>
</div>

<div class="panel-soft-purple flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <span class="text-purple-400 font-bold text-sm">挑战四</span>
    <span class="text-white font-bold">团队认知落地</span>
  </div>
  <div class="text-purple-300 font-black text-xl my-1">小步，可量化</div>
  <div class="text-slate-500 text-xs leading-relaxed">不是“全团队一起转型”。先找 1-2 个愿意先跑的人，先把结果做出来再扩散。<strong class="text-slate-300">成功案例永远比口号和培训更有说服力。</strong></div>
</div>

</div>

---
layout: default
---

# 真正有效的，不是更激进，而是更有节奏

<div class="compare-stage mt-4 text-sm">

<div class="compare-panel compare-panel-after">
  <div class="compare-heading">
    <div class="font-bold text-slate-100">这些做法，值得继续坚持</div>
    <span class="badge badge-done">保留</span>
  </div>

  <div class="feature-list">
    <div class="feature-item"><div class="feature-mark">✓</div><div><strong>规范先行</strong><br><span class="text-slate-400">先把 standards 写好，再建 Skill。Skill 只是规范的执行者。</span></div></div>
    <div class="feature-item"><div class="feature-mark">✓</div><div><strong>渐进式引入</strong><br><span class="text-slate-400">L0 → L1 → L2 逐层落地，每层都先在真实项目里证明有效。</span></div></div>
    <div class="feature-item"><div class="feature-mark">✓</div><div><strong>审计先于生成</strong><br><span class="text-slate-400">先看现有代码债务，再决定怎么建规则，避免一上来就全量生成。</span></div></div>
    <div class="feature-item"><div class="feature-mark">✓</div><div><strong>Pipeline 笔记文化</strong><br><span class="text-slate-400">每次人工判断都留下记录，它们会变成下一阶段的可执行规则。</span></div></div>
  </div>
</div>

<div class="compare-panel compare-panel-before">
  <div class="compare-heading">
    <div class="font-bold text-slate-100">这些坑，已经踩过一次</div>
    <span class="badge badge-wip">别重蹈</span>
  </div>

  <div class="feature-list">
    <div class="feature-item"><div class="feature-mark">×</div><div><strong>一次性全套接入</strong><br><span class="text-slate-400">Skill、MCP、CLI 一起上到大项目，问题一出根本不知道是哪层失控。</span></div></div>
    <div class="feature-item"><div class="feature-mark">×</div><div><strong>把 AI 生成当最终答案</strong><br><span class="text-slate-400">跳过审计直接上线，问题会在更贵的阶段暴露。</span></div></div>
    <div class="feature-item"><div class="feature-mark">×</div><div><strong>规范只写“应该怎样”</strong><br><span class="text-slate-400">没有边界条件、反例和原因说明，AI 会按自己的理解补空白。</span></div></div>
  </div>

  <div class="statement-card statement-card-green text-sm">
    <strong>核心认知：</strong>这套体系不是一个装完就结束的产品，而是一个持续反馈的飞轮。每次人工判断都在喂下一个自动化决策，这是长期有效的唯一方式。
  </div>
</div>

</div>

<!--
演讲者备注：
这一章是整个培训中最"真实"的部分
强调：不是在抱怨 AI 不好，而是在设定合理预期
"已验证的突破路径"要多讲，是团队实际踩坑总结出来的
-->
