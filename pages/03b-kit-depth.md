---
layout: default
---

<h1 class="tight-title">怎么保证有效①：规则不靠自觉，靠确定性卡控</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="highlight-box-yellow !p-2.5">
  <div class="text-[10.5px] leading-4"><strong>核心问题：</strong>规范写在文档里 AI 会"忘记"。kit 把"必遵"约定接上<strong class="text-white">确定性执行器</strong>——生成完机械校验、机械修复。</div>
</div>

<div class="grid-tight-2 gap-2.5">

<div class="compare-panel compare-panel-after !p-2.5">
  <div class="font-bold text-green-300 mb-1 text-[11px]">规则→执行器覆盖矩阵</div>
  <div class="grid grid-cols-2 gap-x-2 gap-y-0.5 font-mono text-[9px]">
    <div><span class="text-cyan-300">R2</span> 禁 getAction</div>
    <div><span class="text-cyan-300">R3</span> el-table换BaseTable</div>
    <div><span class="text-cyan-300">R6</span> 禁 axios</div>
    <div><span class="text-cyan-300">R7</span> 禁 eval</div>
    <div><span class="text-cyan-300">R8</span> 有API必有data.ts</div>
    <div><span class="text-cyan-300">R10</span> el-form换平台</div>
    <div><span class="text-amber-300">S2</span> 列顺序=原型</div>
    <div><span class="text-amber-300">S3</span> 按钮顺序=原型</div>
    <div><span class="text-amber-300">S4</span> 操作列对应原型</div>
    <div><span class="text-amber-300">S5</span> 按钮文字保真</div>
  </div>
</div>

<div class="compare-panel !p-2.5">
  <div class="font-bold text-indigo-300 mb-1 text-[11px]">闭环：验证是嵌入的</div>
  <div class="space-y-0.5 text-[10px] text-slate-400 leading-3.5">
    <div><span class="text-green-400">▸</span> <strong>page-codegen</strong> 生成后内置自检</div>
    <div><span class="text-green-400">▸</span> <strong>code-fix</strong> 后强制再 validate</div>
    <div><span class="text-slate-500">非独立节点，是两处强制自检门控</span></div>
  </div>
</div>

</div>

<div class="statement-card statement-card-green !p-2.5">
  <div class="text-[10.5px] leading-4"><strong>治理：</strong><code>lint:skills</code> 在 CI 校验——标"阻断"的规则若没真实执行器就<strong class="text-white">报错阻断发版</strong>，文档约定收敛成代码卡控。</div>
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-kit/kit-internal/rule-coverage.md', lines: '24-48', desc: '覆盖矩阵：每条 R/S 规则→执行器→是否阻断' },
  { file: 'wl-skills-kit/lib/ast-rules.js', lines: '418,488,498,556,587', desc: 'R1/R3/R6/R7/R8 AST 判定逻辑' },
  { file: 'wl-skills-kit/lib/page-spec.js', lines: '367,409,470,492', desc: 'S2/S3/S4/S5 page-spec 比对逻辑' },
  { file: 'wl-skills-kit/core/page-codegen/SKILL.md', lines: '61-77', desc: '生成后强制自检（不可跳过）' },
  { file: 'wl-skills-kit/skills/_registry.md', lines: '73', desc: 'code-fix 后必须自动 validate 复扫' },
]" />

</div>

---
layout: default
---

<h1 class="tight-title">怎么保证有效②：高风险有人兜底，路由不乱跑</h1>

<div class="split-trace">

<div class="split-main text-[12px] leading-5">

<div class="grid-tight-2 gap-2.5">

<div class="highlight-box-red !p-2.5">
  <div class="font-bold text-red-300 mb-1 text-[11px]">⚠️ 高风险确认机制</div>
  <div class="space-y-0.5 text-[10.5px] text-slate-400">
    <div><span class="text-red-300">▸ page-codegen</span> 会创建/覆盖文件</div>
    <div><span class="text-red-300">▸ menu/dict/permission-sync</span> 会写后端数据</div>
    <div><span class="text-red-300">▸ code-fix</span> 会改源码</div>
  </div>
  <div class="text-[9.5px] text-slate-500 mt-1">触发前必须输出"即将执行 XX，确认继续？"</div>
</div>

<div class="highlight-box !p-2.5">
  <div class="font-bold text-indigo-300 mb-1 text-[11px]">🛡️ 误触发防护</div>
  <div class="text-[10.5px] text-slate-400 leading-4">同时命中 2+ Skill 且非明确流水线意图时，<strong class="text-slate-200">必须先列候选询问</strong>，而非 AI 自行决定路线。</div>
</div>

</div>

<div class="statement-card statement-card-indigo !p-2.5">
  <div class="text-[10.5px] leading-4"><strong>这回答了一个根本问题：</strong>AI 越能干，怎么确保它干得对、改得安全、不乱来——靠的不是提示词说教，而是<strong class="text-white">把约束埋进工程卡控和确认门控</strong>。</div>
</div>

</div>

<SourceTrace :items="[
  { file: 'wl-skills-kit/skills/_registry.md', lines: '74-77', desc: '高风险确认机制（codegen/sync/fix）' },
  { file: 'wl-skills-kit/skills/_registry.md', lines: '78', desc: '误触发防护（2+命中先问）' },
  { file: 'wl-skills-kit/skills/_pipeline.md', lines: '87-95', desc: '强制/建议执行对照表（唯一强制=code-fix→validate）' },
  { file: 'wl-skills-kit/ops/code-fix/SKILL.md', lines: '39-43,47-74', desc: 'code-fix 步骤6 强制复扫（用户说不验也必须验）' },
]" />

</div>
