---
layout: section
title: wl-skills-kit 前端标准化
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-purple-400 tracking-widest mb-3 uppercase">05 · 前端标准化</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">wl-skills-kit</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">一条命令，给项目装上"AI 工程底座"</p>
  <p class="text-slate-400">14 规范 · 11 Skill · 17 MCP · 约定不靠自觉，靠确定性卡控</p>
  <div class="mt-4">
    <span class="badge badge-done">v2.11.1</span>
    <span class="badge badge-new ml-2">@agile-team/wl-skills-kit</span>
  </div>
</div>

---
layout: default
---

<h1 class="tight-title">11 Skill 全链路：从一句话需求到可访问页面</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="grid-tight-2 gap-2.5">

<div class="compare-panel compare-panel-neutral !p-2.5">
  <div class="font-bold text-slate-100 mb-1 text-[11px]">① 输入理解 · core</div>
  <div class="space-y-0.5 text-[10.5px] text-slate-400">
    <div><span class="text-blue-300">prototype-scan</span> 原型/截图/口述</div>
    <div><span class="text-blue-300">spec-doc-parse</span> 说明书 IPO</div>
    <div><span class="text-purple-300">api-contract</span> → api.md</div>
    <div><span class="text-cyan-300">page-codegen</span> → 三文件+page-spec.json</div>
  </div>
</div>

<div class="compare-panel !p-2.5">
  <div class="font-bold text-slate-100 mb-1 text-[11px]">② 质检收口 · sync+ops</div>
  <div class="space-y-0.5 text-[10.5px] text-slate-400">
    <div><span class="text-cyan-300">convention-audit</span> 14 规范扫描</div>
    <div><span class="text-yellow-300">code-fix</span> 自动修复→<span class="text-green-300">强制复扫</span></div>
    <div><span class="text-amber-300">menu/dict/permission-sync</span></div>
    <div><span class="text-slate-500">写数据一律 diff + 人工确认</span></div>
  </div>
</div>

</div>

<div class="highlight-box-yellow !p-2.5">
  <div class="font-bold text-amber-300 mb-1 text-[11px]">★ 双线解构：什么质量的资料，走什么精度的链路</div>
  <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
    <div class="text-center">
      <div class="panel-soft-amber !p-1.5 text-[9.5px]">
        <div class="text-amber-300 font-bold">规范线 spec-doc-parse</div>
        <div class="text-slate-400">说明书/IPO/功能编码</div>
        <div class="text-green-400 font-bold mt-0.5">精度 95%+</div>
      </div>
      <div class="panel-soft-cyan !p-1.5 text-[9.5px] mt-1">
        <div class="text-cyan-300 font-bold">原型线 prototype-scan</div>
        <div class="text-slate-400">原型/截图/口述</div>
      </div>
    </div>
    <div class="text-blue-400 font-black text-lg px-1">⤳</div>
    <div class="panel-soft-indigo !p-2 text-center text-[9.5px]">
      <div class="text-indigo-200 font-bold">page-spec.json</div>
      <div class="text-slate-400 mt-0.5">两线汇聚<br>同一份真值锚点</div>
      <div class="text-slate-500 mt-0.5">互不污染</div>
    </div>
  </div>
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-kit/skills/_registry.md', lines: '41-55', desc: '11 Skill 启用路由表（触发词+MCP依赖）' },
  { file: 'wl-skills-kit/skills/_registry.md', lines: '63', desc: '优先级0 双线隔离：spec-doc-parse 强制接管规范线' },
  { file: 'wl-skills-kit/skills/_pipeline.md', lines: '21-31,52-66', desc: 'Pipeline I/O 契约 + next_suggest 顺序' },
  { file: 'wl-skills-kit/core/page-codegen/SKILL.md', lines: '99-121', desc: 'page-codegen 产物：三文件+api.md+page-spec.json' },
]" />

</div>

---
layout: default
---

<h1 class="tight-title">一条命令接入：四类资产一次挂载</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="grid grid-cols-4 gap-2 text-[10.5px]">
  <div class="panel-soft-amber text-center !p-3"><div class="text-xl mb-1">📐</div><div class="text-amber-300 font-bold">规范入口</div><div class="text-slate-500 text-[9.5px]">派生 9 种编辑器</div></div>
  <div class="panel-soft-indigo text-center !p-3"><div class="text-xl mb-1">🧩</div><div class="text-indigo-300 font-bold">任务能力</div><div class="text-slate-500 text-[9.5px]">11 SKILL.md</div></div>
  <div class="panel-soft-green text-center !p-3"><div class="text-xl mb-1">🔌</div><div class="text-green-300 font-bold">运行能力</div><div class="text-slate-500 text-[9.5px]">17 MCP 实时查后台</div></div>
  <div class="panel-soft-cyan text-center !p-3"><div class="text-xl mb-1">🏗️</div><div class="text-cyan-300 font-bold">工程基线</div><div class="text-slate-500 text-[9.5px]">14 规范+CLI</div></div>
</div>

<div class="grid-tight-2 gap-2.5">
  <div class="highlight-box !p-2.5">
    <div class="font-bold text-indigo-300 mb-0.5 text-[11px]">★ MCP 防绕过护栏</div>
    <div class="text-[10.5px] text-slate-400 leading-4">sync 类必须走 MCP 工具，工具不可用按自愈剧本引导配置，<strong class="text-slate-200">禁止 curl/fetch 绕开</strong>。</div>
  </div>
  <div class="highlight-box-green !p-2.5">
    <div class="font-bold text-green-300 mb-0.5 text-[11px]">★ 审计报告推送协作</div>
    <div class="text-[10.5px] text-slate-400 leading-4">wls_audit_report_push 把规范审查报告推到<strong class="text-slate-200">团队共享位置</strong>，多人接手同一项目时一眼看到技术债——避免"每次新人重新踩坑"。</div>
  </div>
</div>

<div class="statement-card statement-card-indigo !p-2.5">
  <div class="text-[10.5px] leading-4"><strong>价值：</strong>每个 Skill 既能单独触发，也能串成 Pipeline——<strong class="text-white">哪步不满意重跑哪步</strong>。</div>
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-kit/skills/sync/_mcp-guardrail.md', lines: '§2', desc: 'sync MCP 自愈剧本（防 curl/fetch 绕开）' },
  { file: 'wl-skills-kit/skills/_registry.md', lines: '57', desc: 'MCP 兜底纪律：工具不可用禁止绕开' },
  { file: 'wl-skills-kit/package.json', lines: '2-9', desc: 'name/version 2.11.1 + bin wl-skills' },
  { file: 'wl-skills-kit/standards/index.md', lines: '8-26,33-69', desc: '14 规范清单 + 任务类型 A-F 映射' },
]" />

</div>
