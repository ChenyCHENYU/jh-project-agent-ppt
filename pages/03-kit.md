---
layout: section
title: wl-skills-kit 深度解析
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-purple-400 tracking-widest mb-3 uppercase">Chapter 04</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">wl-skills-kit</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">前端 AI 工程体系核心包</p>
  <p class="text-slate-400">10 Skills · 17 MCP Tools · 14 规范 · 9 CLI · 全流程自动化</p>
  <div class="mt-4">
    <span class="badge badge-done">v2.9.4</span>
    <span class="badge badge-new ml-2">@agile-team/wl-skills-kit</span>
  </div>
</div>

---
layout: default
---

<h1 class="tight-title">一行命令，不是装工具，而是接入工程底座</h1>

<div class="page-fit compare-stage compare-stage-tight text-[13px] leading-5">

<div class="compare-panel compare-panel-neutral">
  <div class="statement-card statement-card-green">
    <strong>新项目接入，其实就 3 个动作：</strong><br>
    先标准化，再接工具链，最后完成工程初始化。结果不是多几个脚本，而是把规范、Skill、MCP 和工程基线一次性挂到同一套项目语境里。
  </div>

  <div class="compare-code-stack font-mono text-[10.5px] leading-4.5">
    <div class="arch-card"><span class="text-slate-500">标准化</span><br>npx @robot-admin/git-standards init</div>
    <div class="arch-card-green"><span class="text-slate-500">能力接入</span><br>npx @agile-team/wl-skills-kit</div>
    <div class="arch-card-cyan"><span class="text-slate-500">工程初始化</span><br>npm run standards:init</div>
  </div>

  <div class="statement-card !p-3 text-[11px] leading-4.5">
    <div class="fit-grid-3-tight">
      <div><strong class="text-slate-100">10 种编辑器配置</strong><br><span class="text-slate-400">统一接入口</span></div>
      <div><strong class="text-slate-100">14 条规范 + 10 个 Skills</strong><br><span class="text-slate-400">覆盖主链路</span></div>
      <div><strong class="text-slate-100">17 个 MCP Tools</strong><br><span class="text-slate-400">补齐实时上下文</span></div>
    </div>
  </div>
</div>

<div class="compare-panel">
  <div class="compare-heading">
    <div class="compare-heading-stack">
      <div class="font-bold text-slate-100">接入后的项目，不是“会用 AI”，而是“知道该怎么让 AI 工作”</div>
      <div class="text-[11px] leading-4 text-slate-400">规范入口、任务能力、运行能力、工程基线被一次性接入同一套工程语境，AI 不再只能靠猜。</div>
    </div>
    <div class="orb-badge"><span>KIT<br>INIT</span></div>
  </div>

  <div class="info-matrix info-matrix-2 text-[10.5px] leading-4.5 font-mono">
    <div class="arch-card">
      <div class="text-slate-500 mb-2">规范入口</div>
      <div>.github/copilot-instructions.md</div>
      <div>.cursor/rules/</div>
      <div>CLAUDE.md / AGENTS.md</div>
    </div>
    <div class="arch-card-cyan">
      <div class="text-slate-500 mb-2">任务能力</div>
      <div>skills/prototype-scan</div>
      <div>skills/api-contract</div>
      <div>skills/page-codegen</div>
      <div>skills/validate-page</div>
    </div>
    <div class="arch-card-green">
      <div class="text-slate-500 mb-2">运行能力</div>
      <div>mcp/server.js</div>
      <div>menu / dict / permission sync</div>
      <div>project info / standards query</div>
    </div>
    <div class="arch-card-orange">
      <div class="text-slate-500 mb-2">工程基线</div>
      <div>docs/standards/</div>
      <div>best practices index</div>
      <div>validate / diff / export</div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Skills 全链路覆盖图

<div class="mt-4 compact-stack text-sm">

<div class="fit-grid-4">
  <div class="statement-card statement-card-indigo text-center">
    <div class="text-indigo-300 font-bold mb-2">① 输入理解</div>
    <div class="text-slate-300">prototype-scan</div>
    <div class="micro-note mt-2">原型 / 截图 / 口述需求</div>
  </div>
  <div class="statement-card statement-card-cyan text-center">
    <div class="text-cyan-300 font-bold mb-2">② 契约生成</div>
    <div class="text-slate-300">api-contract</div>
    <div class="micro-note mt-2">形成 api.md 唯一契约</div>
  </div>
  <div class="statement-card statement-card-green text-center">
    <div class="text-green-300 font-bold mb-2">③ 页面生成</div>
    <div class="text-slate-300">page-codegen</div>
    <div class="micro-note mt-2">产出 index.vue / data.ts</div>
  </div>
  <div class="statement-card text-center">
    <div class="text-amber-300 font-bold mb-2">④ 质检收口</div>
    <div class="text-slate-300">validate / audit / fix</div>
    <div class="micro-note mt-2">最后才进入后台同步</div>
  </div>
</div>

<div class="compare-stage text-xs">
  <div class="compare-panel compare-panel-neutral">
    <div class="font-bold text-slate-100">前半程：把需求变成机器可执行契约</div>
    <div class="feature-list">
      <div class="feature-item"><div class="feature-mark">1</div><div><strong class="text-blue-300">prototype-scan</strong><br><span class="text-slate-400">接受 Axure 原型、截图或口述需求，整理为结构化页面清单。</span></div></div>
      <div class="feature-item"><div class="feature-mark">2</div><div><strong class="text-purple-300">api-contract</strong><br><span class="text-slate-400">把需求收束成 api.md，成为前后端共同消费的契约。</span></div></div>
      <div class="feature-item"><div class="feature-mark">3</div><div><strong class="text-cyan-300">page-codegen</strong><br><span class="text-slate-400">根据契约和规范生成页面骨架代码。</span></div></div>
    </div>
  </div>

  <div class="compare-panel">
    <div class="font-bold text-slate-100">后半程：把页面收成可交付状态</div>
    <div class="feature-list">
      <div class="feature-item"><div class="feature-mark">4</div><div><strong class="text-cyan-300">validate-page</strong><br><span class="text-slate-400">先校验页面结构和基础规范，必要时联动 doctor-ui。</span></div></div>
      <div class="feature-item"><div class="feature-mark">5</div><div><strong class="text-yellow-300">convention-audit / code-fix</strong><br><span class="text-slate-400">定位问题并修复高频错误。</span></div></div>
      <div class="feature-item"><div class="feature-mark">6</div><div><strong class="text-amber-300">menu / dict / permission-sync</strong><br><span class="text-slate-400">只有写后台前需要 diff 预览和人工确认。</span></div></div>
    </div>
  </div>
</div>

<div class="statement-card statement-card-indigo text-sm">
  <strong>核心价值：</strong><code>api.md</code> 把前端生成、后端消费、AI 复核拉到同一条线上。每个 Skill 既能独立触发，也能串成完整 Pipeline。
</div>

</div>

---
layout: default
---

# 17 个 MCP Tools：把静态提示变成实时感知

<div class="statement-card statement-card-indigo mt-3 text-sm">
<strong>MCP 不是附加件，</strong>而是把菜单、字典、权限、项目结构这些“运行中的真实状态”接给 AI。没有它，AI 只能猜；有了它，AI 才能查。
</div>

<div class="tool-grid mt-3 text-sm">

<div class="tool-cluster tool-cluster-indigo">
  <div class="text-indigo-300 text-xs font-bold tracking-widest uppercase">实时感知 · 菜单</div>
  <div class="tool-list text-xs text-slate-400">
    <div class="tool-item"><code class="text-indigo-300 text-[10px]">wls_get_menu_list</code><br><span>查询完整菜单树</span></div>
    <div class="tool-item"><code class="text-indigo-300 text-[10px]">wls_validate_menu</code><br><span>菜单合规校验</span></div>
    <div class="tool-item"><code class="text-indigo-300 text-[10px]">wls_sync_menu</code><br><span>生成路由后再同步</span></div>
  </div>
</div>

<div class="tool-cluster tool-cluster-cyan">
  <div class="text-cyan-300 text-xs font-bold tracking-widest uppercase">实时感知 · 字典权限</div>
  <div class="tool-list text-xs text-slate-400">
    <div class="tool-item"><code class="text-cyan-300 text-[10px]">wls_get_dict_values</code><br><span>实时取枚举值</span></div>
    <div class="tool-item"><code class="text-cyan-300 text-[10px]">wls_get_permissions</code><br><span>查角色权限配置</span></div>
    <div class="tool-item"><code class="text-cyan-300 text-[10px]">wls_sync_dict</code><br><span>字典反向同步 + 3 更多</span></div>
  </div>
</div>

<div class="tool-cluster tool-cluster-green">
  <div class="text-green-300 text-xs font-bold tracking-widest uppercase">项目感知 · 校验</div>
  <div class="tool-list text-xs text-slate-400">
    <div class="tool-item"><code class="text-green-300 text-[10px]">wls_get_project_info</code><br><span>读取项目配置</span></div>
    <div class="tool-item"><code class="text-green-300 text-[10px]">wls_list_pages</code><br><span>枚举现有页面</span></div>
    <div class="tool-item"><code class="text-green-300 text-[10px]">wls_validate_page</code><br><span>页面合规校验 + 1 更多</span></div>
  </div>
</div>

<div class="tool-cluster tool-cluster-amber">
  <div class="text-amber-300 text-xs font-bold tracking-widest uppercase">协同能力 · 通知其他</div>
  <div class="tool-list text-xs text-slate-400">
    <div class="tool-item"><code class="text-amber-300 text-[10px]">wls_send_notice</code><br><span>飞书推送通知</span></div>
    <div class="tool-item"><code class="text-amber-300 text-[10px]">wls_get_standards</code><br><span>按需拉取规范文档</span></div>
    <div class="tool-item"><code class="text-amber-300 text-[10px]">wls_get_skill_list</code><br><span>查询可用 Skill 列表 + 1 更多</span></div>
  </div>
</div>

</div>

<div class="statement-card statement-card-indigo text-sm mt-3 text-center">
  没有 MCP，AI 只能靠静态文件和口头描述推测；有了 MCP，AI 可以<strong>实时查询后台</strong>，把运行态事实直接拉进上下文。
</div>

---
layout: default
---

# 数据实证：接入 wl-skills-kit 前后规范通过率

<div class="compare-stage mt-4 text-sm">

<div class="proof-card">
  <div class="font-bold text-slate-100 mb-1">存量项目抽样 vs wl-mdata 基线</div>
  <div class="text-slate-500 text-[10px] mb-3">数据来源：wl-ui-public · wl-mdata · 华新安全安防 · 环保项目 · 移动端（3 项目）· 销售 PC 端</div>
  <div class="proof-bars text-[11px]">
    <div v-for="item in [
      { name: 'BaseTable/AGGrid 合规', before: 28, after: 100 },
      { name: 'cid 绑定完整性', before: 15, after: 100 },
      { name: 'api.md 契约存在', before: 0, after: 100 },
      { name: 'mock-first 配置', before: 12, after: 100 },
      { name: 'TS 类型完整性', before: 45, after: 100 },
      { name: '平台组件合规', before: 38, after: 100 },
      { name: 'wk-skills-ui 接入', before: 5, after: 100 },
    ]" :key="item.name" class="proof-bar-row">
      <div class="text-slate-400 text-right">{{ item.name }}</div>
      <div class="proof-bar-track">
        <div class="proof-bar">
          <div class="proof-bar-fill proof-bar-fill-before" :style="{ width: item.before + '%' }"></div>
          <span class="text-red-400 text-[10px]">{{ item.before }}%</span>
        </div>
        <div class="proof-bar">
          <div class="proof-bar-fill proof-bar-fill-after" :style="{ width: item.after + '%' }"></div>
          <span class="text-green-400 text-[10px]">{{ item.after }}%</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-4 mt-3 text-[10px]">
    <div class="flex items-center gap-1"><div class="w-3 h-2.5 rounded" style="background:rgba(239,68,68,0.45)"></div><span class="text-slate-400">接入前（估算）</span></div>
    <div class="flex items-center gap-1"><div class="w-3 h-2.5 rounded" style="background:rgba(34,197,94,0.55)"></div><span class="text-slate-400">接入后（wl-mdata 实测）</span></div>
  </div>
</div>

<div class="compare-panel">
  <div class="statement-card statement-card-green">
    <strong>wl-mdata 实测：0 偏差审计通过</strong><br>
    14 条规范全覆盖，且已经过 wl-skills-kit validate 的全量扫描，具备作为前端基线项目的条件。
  </div>

  <div class="arch-card text-xs">
    <strong class="text-indigo-300">为什么接入前数字这么低？</strong>
    <ul class="mt-2 space-y-1 text-slate-400">
      <li>API 契约靠口头沟通，不写成文件。</li>
      <li>BaseTable 各人用法不统一，平台组件没有统一检查口径。</li>
      <li>cid、mock-first 这类工程细节缺少强制规范。</li>
    </ul>
  </div>

  <div class="statement-card text-sm">
    <strong>这里最该记住的不是 100% 这个数字，</strong>而是我们终于把规则、契约、组件和工程约束做成了 AI 能稳定消费的工程系统。
  </div>
</div>

</div>
