---
layout: section
title: AI 工作流实战
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-yellow-400 tracking-widest mb-3 uppercase">Chapter 06</div>
  <h2 class="text-4xl font-black mb-4">
    <span class="gradient-text">AI 工作流实战</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">从人工串联 Skills 到 AI 自动化流水线</p>
  <p class="text-slate-400">L5 Pipeline 试运行 · L6 Multi-Agent 规划</p>
</div>

---
layout: default
---

<h1 class="tight-title">L5 全链路时序：一图览全程</h1>

<div class="page-fit compact-stack l5-timeline-stage text-[12px] leading-5">

<div class="fit-grid-4-tight text-[11px]">
  <div class="panel-soft text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 01</div>
    <div class="text-slate-100 font-bold">开发者</div>
    <div class="micro-note mt-0.5">输入需求 / 确认 diff</div>
  </div>
  <div class="panel-soft-cyan text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 02</div>
    <div class="text-slate-100 font-bold">AI 编辑器</div>
    <div class="micro-note mt-0.5">串联 Skill / 汇总产物</div>
  </div>
  <div class="panel-soft-purple text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 03</div>
    <div class="text-slate-100 font-bold">wl-skills-kit</div>
    <div class="micro-note mt-0.5">执行生成 / 审计 / 同步</div>
  </div>
  <div class="panel-soft-amber text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">角色 04</div>
    <div class="text-slate-100 font-bold">后端</div>
    <div class="micro-note mt-0.5">消费 api.md / 接收同步结果</div>
  </div>
</div>

<div class="panel-soft dense-table timeline-table l5-timeline-table">
  <table>
    <thead>
      <tr>
        <th style="width:44px">步骤</th>
        <th style="width:112px">流向</th>
        <th style="width:126px">动作</th>
        <th>产物 / 结果</th>
        <th style="width:70px;text-align:center">门控</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-indigo-300 font-bold">01</td>
        <td>开发者 → AI</td>
        <td>需求输入</td>
        <td>原型 / 截图 / 口述</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">02</td>
        <td>AI → Kit</td>
        <td>prototype-scan</td>
        <td>页面清单、字段表、路由建议</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">03</td>
        <td>AI → Kit</td>
        <td>api-contract</td>
        <td>生成 api.md 接口契约</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">04</td>
        <td>AI → 后端</td>
        <td>共享契约</td>
        <td>api.md 成为唯一前后端交汇点</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">05</td>
        <td>AI → Kit</td>
        <td>page-codegen</td>
        <td>产出 index.vue、data.ts、index.scss</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">06</td>
        <td>AI → Kit</td>
        <td>validate-page</td>
        <td>运行校验，必要时联动 doctor-ui</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">07</td>
        <td>AI → Kit</td>
        <td>convention-audit</td>
        <td>输出规范审查报告，定位待整改项</td>
        <td style="text-align:center">自动</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">08</td>
        <td>AI → 开发者</td>
        <td>diff 预览</td>
        <td>展示菜单 / 字典 / 权限写入变更</td>
        <td style="text-align:center" class="text-yellow-300 font-bold">人工</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">09</td>
        <td>开发者 → AI</td>
        <td>确认放行</td>
        <td>人工确认后继续执行同步</td>
        <td style="text-align:center" class="text-yellow-300 font-bold">人工</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">10</td>
        <td>AI / Kit → 后端</td>
        <td>menu/dict/permission-sync</td>
        <td>后台同步完成，页面达到上线就绪状态</td>
        <td style="text-align:center" class="text-green-300 font-bold">完成</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="grid grid-cols-2 gap-1.5 text-[10px] leading-4.5">
  <div class="statement-card statement-card-indigo !p-2.5">
    <strong>关键契约节点：</strong><code>api.md</code> 是全链路唯一公共契约，前端生成、后端消费、AI 复核都以它为准。
  </div>
  <div class="statement-card !p-2.5">
    <strong>唯一人工门控：</strong>只有菜单 / 权限写入前要看 diff，前面的扫描、生成、校验、审计都应自动推进。
  </div>
</div>

</div>

---
layout: default
---

# 四类场景，四条链路

<div class="statement-card statement-card-indigo mt-3 text-sm">
<strong>选链路原则：</strong>真实项目不会每次都完整跑 ① → ⑩。资料完整度、风险等级、目标时效不同，所以我们归纳了 4 条最常见的场景链路，按情况选最合适的一条。
</div>

<div class="mt-3 grid grid-cols-2 gap-4 text-sm">

<div class="arch-card">
<div class="text-blue-300 font-bold mb-2">📐 有完整原型/详设</div>
<div class="text-slate-400 mb-2">走全链路 ① → ⑩</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 精准度最高</div>
  <div>✓ 业务文档同步生成</div>
  <div>✓ 适合新模块/新功能</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：资料完整、要一次做对。完整跑一遍约 2~4 小时。</div>
</div>

<div class="arch-card-cyan">
<div class="text-cyan-300 font-bold mb-2">🗣️ 口述需求快速出页面</div>
<div class="text-slate-400 mb-2">走 ⑤ → ⑥ → ⑦（跳过①②③）</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 快速验证，10~30 分钟出骨架</div>
  <div>⚠️ 后续需补 api.md 契约</div>
  <div>⚠️ 业务文档缺失，需人工补充</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：目标先看页面，不追求一次补齐全部契约。</div>
</div>

<div class="arch-card-green">
<div class="text-green-300 font-bold mb-2">🔍 存量项目体检</div>
<div class="text-slate-400 mb-2">走 wls_code_scan → ⑦ → ⑧ → ⑥</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 先摸清现有问题</div>
  <div>✓ 审计 → 修复 → 验证</div>
  <div>✓ 不破坏现有逻辑</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：先治现状，再谈生成，不先动大手术。</div>
</div>

<div class="arch-card-orange">
<div class="text-orange-300 font-bold mb-2">🔄 只做菜单/权限同步</div>
<div class="text-slate-400 mb-2">直接 ⑨（前提：已有 api.md 和页面骨架）</div>
<div class="space-y-1 text-slate-300">
  <div>✓ 快速同步后台数据</div>
  <div>⚠️ 无 api.md → 不能同步</div>
  <div>⚠️ 必须有 diff 预览</div>
</div>
<div class="text-xs text-slate-500 mt-2">适用判断：页面已基本成型，只需要把后台配置同步到位。</div>
</div>

</div>

<div class="statement-card statement-card-indigo mt-4 text-sm">
<strong>L5 Pipeline 阶段一目标：</strong> 完整走通 3 个以上真实业务页面的全链路（① → ⑩），无需 AI 二次补救。这是进入 L6 的前提。
</div>

---
layout: default
---

# 节点决策记录：把隐性判断变成显性规则

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
<div class="statement-card statement-card-indigo mb-4 text-sm">
<strong>一个关键洞察</strong><br>
L5 手动跑 Pipeline 时，你会做很多“顺手就判断了”的动作。<br>
这些判断不是经验噪音，而是后面 L6 Agent 必须显式学习的路由规则。
</div>

<div class="space-y-2 text-sm">
<div class="arch-card-orange">
  <div class="text-orange-300 font-bold">类型 1：结构识别</div>
  <div class="text-slate-400 mt-1">prototype-scan 输出了一个叫 <code>AddModal</code> 的页面，你一眼判断这是弹窗，不该继续走 page-codegen 主流程。</div>
</div>
<div class="arch-card-orange mt-2">
  <div class="text-orange-300 font-bold">类型 2：例外豁免</div>
  <div class="text-slate-400 mt-1">convention-audit 报了一条警告，但你知道这是项目阶段性例外，所以临时跳过，不当作通用错误处理。</div>
</div>
<div class="arch-card-orange mt-2">
  <div class="text-orange-300 font-bold">类型 3：格式转换</div>
  <div class="text-slate-400 mt-1">某一步输出和下游期望格式不一致，你手动转了一下，这其实就是待固化的数据转换规则。</div>
</div>
</div>

</div>

<div>
<div class="statement-card statement-card-green mb-4 text-sm">
<strong>实践方法：记规则，不记故事</strong><br>
在 L5 跑通阶段，开一个 <code>_pipeline-notes.md</code>。<br>
每次手动调整就记一条，格式：
</div>

```markdown
# Pipeline 决策记录

## prototype-scan 判断规则
- 输出名含 Modal/Dialog 
  → 标记为 dialog-type，不走 page-codegen 主流程

## convention-audit 例外规则  
- xxx 模块的 BaseTable 使用旧版 API
  → 暂时豁免，等升级完成后移除例外

## 数据格式转换规则
- api-contract 输出的字段类型使用 Java 类型
  → 传给 page-codegen 前需转换为 TS 类型
```

<div class="statement-card mt-3 text-sm">
<strong>这些笔记 → 会直接变成 L6 Orchestrator 的路由规则</strong><br>
从“人脑里知道怎么判断”，变成“系统里写明如何判断”。
</div>

</div>

</div>

---
layout: default
---

# L6 Multi-Agent：把职责拆开，而不是把系统搞复杂

<div class="mt-2">

<div class="statement-card statement-card-indigo mb-3 text-sm">
<strong>为什么要拆成多 Agent？</strong>因为需求解析、代码生成、校验审计、系统同步的输入输出和风险等级都不同。拆开后，才能分别复用、重跑、门控。
</div>

<div class="panel-soft-indigo mx-auto max-w-md mb-3 text-center">
  <div class="font-bold text-indigo-200 text-sm">🎯 Orchestrator（调度层）</div>
  <div class="text-xs text-slate-400 mt-0.5">接收需求 · 路由 Agent · 管理顺序 · 汇总产物</div>
</div>

<div class="flex justify-center mb-2 text-slate-600 text-xs tracking-widest">▼ 分发给各专职 Agent ▼</div>

<div class="grid grid-cols-5 gap-2 text-xs mb-3">
  <div class="panel-soft-indigo text-center !p-2">
    <div class="text-base mb-0.5">📋</div>
    <div class="font-bold text-blue-300 text-[11px]">需求解析</div>
    <div class="micro-note mt-0.5">prototype-scan<br>business-doc</div>
  </div>
  <div class="panel-soft-purple text-center !p-2">
    <div class="text-base mb-0.5">⚡</div>
    <div class="font-bold text-violet-300 text-[11px]">代码生成</div>
    <div class="micro-note mt-0.5">api-contract<br>page-codegen</div>
  </div>
  <div class="panel-soft-cyan text-center !p-2">
    <div class="text-base mb-0.5">✅</div>
    <div class="font-bold text-cyan-300 text-[11px]">校验</div>
    <div class="micro-note mt-0.5">validate-page<br>doctor-ui</div>
  </div>
  <div class="panel-soft-green text-center !p-2">
    <div class="text-base mb-0.5">🔍</div>
    <div class="font-bold text-green-300 text-[11px]">审计</div>
    <div class="micro-note mt-0.5">convention-audit<br>code-fix</div>
  </div>
  <div class="panel-soft-amber text-center !p-2">
    <div class="text-base mb-0.5">🔄</div>
    <div class="font-bold text-amber-300 text-[11px]">同步</div>
    <div class="micro-note mt-0.5">menu/dict/perm</div>
    <div class="micro-note text-amber-400 mt-0.5">⚠️ 人工确认</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-xs">
  <div class="statement-card statement-card-indigo !p-3">
    <strong class="text-indigo-300">并行执行</strong><br>
    <span class="text-slate-400">前四个 Agent 可流水线并发，Orchestrator 管理依赖关系</span>
  </div>
  <div class="statement-card !p-3">
    <strong class="text-yellow-300">产物一致性</strong><br>
    <span class="text-slate-400">每步输出作为下步输入，链路可中断重跑，不从头开始</span>
  </div>
  <div class="statement-card statement-card-green !p-3">
    <strong class="text-green-300">人工门控</strong><br>
    <span class="text-slate-400">同步 Agent 写系统数据前必须等待 diff 预览 + 人工确认</span>
  </div>
</div>

</div>
