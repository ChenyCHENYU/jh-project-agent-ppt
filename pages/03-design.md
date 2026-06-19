---
layout: section
title: wl-skills-design 产品设计
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-amber-400 tracking-widest mb-3 uppercase">Chapter 03</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">wl-skills-design</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">产品设计 AI 技能包 · AI 工作流的上游起点</p>
  <p class="text-slate-400">7 Skills · 8 条规范 · 176 项验证清单 · 双层资料（模板 + 样例）· 三角联动</p>
  <div class="mt-4">
    <span class="badge badge-done">v0.6.0</span>
    <span class="badge badge-new ml-2">@agile-team/wl-skills-design</span>
  </div>
</div>

---
layout: default
---

# 设计阶段的三个痛点

<div class="grid grid-cols-3 gap-4 mt-4" style="height:calc(100% - 5rem)">

<div class="accent-top-card">
  <div class="accent-card-body">
    <div class="text-indigo-400 text-xs tracking-widest uppercase mb-3">痛点 A · 规范各画各的</div>
    <div class="text-white font-bold text-base mb-3">"每个人的流程图长得都不一样"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      泳道布局、节点色标、连线规则<br>全凭个人习惯，<br>
      <span class="text-amber-300">5 个人画同一业务，出 5 种风格。</span>
    </div>
    <div class="text-xs text-indigo-600 pt-3 mt-2 border-t border-indigo-900/60">
      后果：<strong class="text-indigo-400">评审基线不统一，下游开发理解分歧</strong>
    </div>
  </div>
</div>

<div class="accent-top-card-purple">
  <div class="accent-card-body">
    <div class="text-purple-400 text-xs tracking-widest uppercase mb-3">痛点 B · AI 不懂设计规范</div>
    <div class="text-white font-bold text-base mb-3">"AI 生成的设计文档要大改"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      AI 不知道你的数据字典该 10 列还是 6 列，<br>
      不知道系统字段必须强制注入，<br>
      <span class="text-amber-300">不知道接口字段要和数据库对齐。</span>
    </div>
    <div class="text-xs text-purple-600 pt-3 mt-2 border-t border-purple-900/60">
      后果：<strong class="text-purple-400">AI 生成 → 人工逐条校正 → 反而更慢</strong>
    </div>
  </div>
</div>

<div class="accent-top-card-red">
  <div class="accent-card-body">
    <div class="text-red-400 text-xs tracking-widest uppercase mb-3">痛点 C · 字段三处对不齐</div>
    <div class="text-white font-bold text-base mb-3">"spec 一个名、库表又一个名、接口再一个名"</div>
    <div class="text-slate-400 text-sm leading-relaxed flex-1">
      需求说明书写 <code>status</code>，<br>
      数据库建了 <code>ORDER_STATUS</code>，<br>
      接口传 <code>orderStatus</code>——<br>
      <span class="text-amber-300">三个名字指同一件事。</span>
    </div>
    <div class="text-xs text-red-600 pt-3 mt-2 border-t border-red-900/60">
      后果：<strong class="text-red-400">联调返工、数据对不上、测试用例白写</strong>
    </div>
  </div>
</div>

</div>

---
layout: default
---

<h1 class="tight-title">七大设计能力：覆盖产品设计全链路</h1>

<div class="grid grid-cols-2 gap-2 mt-1 text-[11px] leading-5">

<div class="layer-row !py-1.5">
  <div class="level-tag l0 flex items-center justify-center text-xs shrink-0 w-8 !py-1">①</div>
  <div class="layer-body layer-body-blue !py-2 !px-3">
    <div class="font-semibold text-blue-300">流程图 · draw.io 泳道图</div>
    <div class="text-slate-500 text-[9px]">standards/01-flowchart.md · 需求域 · 20 项验证</div>
    <div class="text-slate-400 mt-0.5">画布 / 泳道 / 节点色标 / 连线规则 / 活动编码</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l1 flex items-center justify-center text-xs shrink-0 w-8 !py-1">②</div>
  <div class="layer-body layer-body-indigo !py-2 !px-3">
    <div class="font-semibold text-indigo-300">需求说明书 · IPO / 流程 / 报表</div>
    <div class="text-slate-500 text-[9px]">standards/06-spec-doc.md · 需求域 · 43 项验证</div>
    <div class="text-slate-400 mt-0.5">Word 模板固定结构 / 四段式写法 / 状态机 / 主从表</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l2 flex items-center justify-center text-xs shrink-0 w-8 !py-1">③</div>
  <div class="layer-body layer-body-purple !py-2 !px-3">
    <div class="font-semibold text-purple-300">原型标注 · D1–D3 深度标准</div>
    <div class="text-slate-500 text-[9px]">standards/02-prototype.md · 需求域 · 23 项验证</div>
    <div class="text-slate-400 mt-0.5">8 种交互模式 / 7 项必标 / D3 可被 prototype-scan 消费</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l3 flex items-center justify-center text-xs shrink-0 w-8 !py-1">④</div>
  <div class="layer-body layer-body-cyan !py-2 !px-3">
    <div class="font-semibold text-cyan-300">数据库设计 · ER / 数据字典 / DDL</div>
    <div class="text-slate-500 text-[9px]">standards/03-database.md · 数据域 · 34 项验证</div>
    <div class="text-slate-400 mt-0.5">7 个强制系统字段 / 10 列标准数据字典 / 索引策略</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l4 flex items-center justify-center text-xs shrink-0 w-8 !py-1">⑤</div>
  <div class="layer-body layer-body-green !py-2 !px-3">
    <div class="font-semibold text-green-300">接口设计 · RESTful / OpenAPI</div>
    <div class="text-slate-500 text-[9px]">standards/04-api-design.md · 接口域 · 38 项验证</div>
    <div class="text-slate-400 mt-0.5">统一响应包装 / 错误码 / 幂等 / 与 spec-DB 联动</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l5 flex items-center justify-center text-xs shrink-0 w-8 !py-1">⑥</div>
  <div class="layer-body !py-2 !px-3" style="background:linear-gradient(180deg,rgba(251,146,60,0.08),rgba(251,146,60,0.04));border-color:rgba(251,146,60,0.18)">
    <div class="font-semibold text-amber-300">集成评审 · 评分 + 追溯矩阵</div>
    <div class="text-slate-500 text-[9px]">standards/07-design-review.md · 跨域 · 18 项验证</div>
    <div class="text-slate-400 mt-0.5">spec→DB→IF 三角联动 / P0 一票否决 / 4 等级评分</div>
  </div>
</div>

<div class="layer-row !py-1.5">
  <div class="level-tag l6 flex items-center justify-center text-xs shrink-0 w-8 !py-1">⑦</div>
  <div class="layer-body !py-2 !px-3" style="background:linear-gradient(180deg,rgba(244,114,182,0.08),rgba(244,114,182,0.04));border-color:rgba(244,114,182,0.18)">
    <div class="font-semibold text-pink-300">术语词典 · 字段对齐锚点</div>
    <div class="text-slate-500 text-[9px]">standards/08-glossary.md · 跨域 · 18 项验证</div>
    <div class="text-slate-400 mt-0.5">中英文名 / 枚举 / 编码统一 / 三方 ⊆ 词典校验 O(N)</div>
  </div>
</div>

</div>

---
layout: default
---

# 关键架构：双层资料 + 三角联动

<div class="compare-stage mt-4 text-sm">

<div class="compare-panel compare-panel-neutral">
  <div class="statement-card statement-card-amber">
    <strong>双层资料 — 模板给结构，样例给水位</strong><br>
    每个 Skill 目录同时放两层资料：`templates/`（纯占位符空白骨架）和 `examples/`（填好真实数据的标杆）。AI 用模板起骨架，对照样例校准质量——生成结果必须不低于样例。
  </div>

  <div class="arch-card text-[11px] leading-5 font-mono">
    <div class="text-slate-500 mb-2">skills/&lt;category&gt;/&lt;skill&gt;/</div>
    <div>├── templates/   ← 空白起点：纯结构 + {占位符}，零业务数据</div>
    <div>├── examples/    ← 质量标杆：真实场景填好 + 自检清单</div>
    <div>├── SKILL.md     ← AI 触发文件（薄包装）</div>
    <div>├── USAGE.md     ← 人读使用说明</div>
    <div>└── sub/         ← Sub-Skill 按任务拆解</div>
  </div>

  <div class="statement-card text-sm">
    <strong>为什么这样更好？</strong><br>模板告诉 AI「该有哪些结构」，样例告诉 AI「好到什么程度才算达标」。两者并存，AI 既不会漏结构，也不会只满足于「能跑」。
  </div>
</div>

<div class="compare-panel">
  <div class="statement-card statement-card-cyan">
    <strong>三角联动 — 从源头杜绝字段对不齐</strong><br>
    spec → 数据库 → 接口形成可追溯三角。每个字段在三个产物中必须一致，不一致在评审阶段就被拦截。
  </div>

  <div class="info-matrix info-matrix-2 text-[11px] leading-5">
    <div class="compare-panel compare-panel-before !p-4">
      <div class="font-bold text-red-300">没有三角联动</div>
      <div class="text-slate-400">spec 写 <code>amount</code></div>
      <div class="text-slate-400">DB 建 <code>ORDER_AMOUNT</code></div>
      <div class="text-slate-400">IF 传 <code>orderAmt</code></div>
      <div class="text-red-400 text-xs mt-2">→ 联调时才发现对不上</div>
    </div>
    <div class="compare-panel compare-panel-after !p-4">
      <div class="font-bold text-green-300">有了三角联动</div>
      <div class="text-slate-400">词典锚定 <code>orderAmount</code></div>
      <div class="text-slate-400">DB-X 校验字段 ⊆ 词典</div>
      <div class="text-slate-400">IF-X 校验字段 ⊆ 词典</div>
      <div class="text-green-400 text-xs mt-2">→ 设计时就杜绝，不是评审时才发现</div>
    </div>
  </div>

  <div class="statement-card statement-card-green text-sm">
    <strong>术语词典作为中央锚点：</strong>两两互比 O(N²) → 与词典比对 O(N)。新增文档只需对齐词典，不用和所有已有文档逐个互比。
  </div>
</div>

</div>

---
layout: default
---

<h1 class="tight-title">设计 → 开发：上游产物驱动下游生成 <span class="tight-title-sub">wl-skills-design → wl-skills-kit 的衔接</span></h1>

<div class="page-fit compare-stage compare-stage-tight text-[11px] leading-4">

<div class="compare-panel compare-panel-neutral">
  <div class="statement-card statement-card-amber !p-2 text-[10px]">
    <strong>设计包的输出 = 开发包的输入</strong><br>
    没有规范化设计产物，prototype-scan 无输入可消费；没有 spec IPO，api.md 无从生成。
  </div>

  <div class="flow-column-compact text-[10px]">
    <div class="flow-node !p-1.5">
      <div class="text-blue-300 font-bold">📋 需求说明书</div>
      <div class="text-slate-500 text-[8px]">IPO / 流程说明 / 报表</div>
    </div>
    <div class="flow-arrow text-[9px] text-slate-600">↓</div>
    <div class="flow-node-amber !p-1.5">
      <div class="text-amber-300 font-bold">🏷️ 原型标注 D3</div>
      <div class="text-slate-500 text-[8px]">开发就绪 · prototype-scan 消费</div>
    </div>
    <div class="flow-arrow text-[9px] text-slate-600">↓</div>
    <div class="flow-node-amber !p-1.5">
      <div class="text-amber-300 font-bold">🗄️ 数据库 + 接口</div>
      <div class="text-slate-500 text-[8px]">三角联动 · 生成即合规</div>
    </div>
    <div class="flow-arrow text-[9px] text-slate-600">↓</div>
    <div class="flow-node-green !p-1.5">
      <div class="text-green-300 font-bold">✅ 集成评审</div>
      <div class="text-slate-500 text-[8px]">评分 + 追溯 + P0 闸门</div>
    </div>
  </div>
</div>

<div class="compare-panel">
  <div class="arch-card text-[10px] leading-4 !p-2">
    <div class="text-slate-500 mb-1">design 产出 → kit 消费</div>
    <div class="text-amber-300">D3 标注 → prototype-scan（page-spec）</div>
    <div class="text-amber-300">spec IPO → api-contract（api.md 契约）</div>
    <div class="text-amber-300">数据库 → service-codegen 消费</div>
    <div class="text-amber-300">接口设计 → 前后端共用 RESTful</div>
    <div class="text-amber-300">术语词典 → 全链路字段锚点</div>
  </div>

  <div class="arch-card-cyan text-[10px] leading-4 font-mono !p-2">
    <div class="text-slate-500 mb-1">衔接示例</div>
    <div>$ npx @agile-team/wl-skills-design</div>
    <div>"设计订单模块数据库" → 按规范生成</div>
    <div>"标注订单列表原型" → D3 标注</div>
    <div class="text-slate-500 mt-1">↓ 产物交开发侧</div>
    <div>$ npx @agile-team/wl-skills-kit</div>
    <div>"扫原型" → 消费 D3</div>
    <div>"出页面" → Vue 代码</div>
  </div>

  <div class="statement-card statement-card-amber !p-2 text-[10px]">
    <strong>关键洞察：</strong>设计包是 AI 工作流的<strong class="text-white">上游燃料站</strong>，产物质量直接决定下游 AI 生成的精准度。
  </div>
</div>

</div>

---
layout: default
---

<h1 class="tight-title">176 项验证清单：生成即合规</h1>

<div class="compare-stage mt-1 text-sm leading-5">

<div class="compare-panel compare-panel-after">
  <div class="compare-heading !mb-1.5">
    <div class="font-bold text-slate-100">每个设计域都有编号验证清单，不允许跳过直接交付</div>
    <span class="badge badge-done">闭环</span>
  </div>

  <div class="feature-list text-xs" style="gap:4px">
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">01</div><div><strong class="text-blue-300 text-xs">流程图</strong> 20 项<br><span class="text-slate-500 text-[10px]">画布 / 泳道 / 节点 / 色标 / 连线 / 编码</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">02</div><div><strong class="text-purple-300 text-xs">原型标注</strong> 23 项<br><span class="text-slate-500 text-[10px]">交互模式 / 字段 / 组件 / 深度 / spec 对齐</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">03</div><div><strong class="text-indigo-300 text-xs">需求说明书</strong> 43 项<br><span class="text-slate-500 text-[10px]">固定页面 / 组织架构 / 流程说明 / IPO 表 / 报表</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">04</div><div><strong class="text-cyan-300 text-xs">数据库</strong> 34 项<br><span class="text-slate-500 text-[10px]">命名 / 系统字段 / 索引 / 类型映射 / spec 联动</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">05</div><div><strong class="text-green-300 text-xs">接口</strong> 38 项<br><span class="text-slate-500 text-[10px]">RESTful / 统一响应 / 错误码 / 安全 / spec-DB 联动</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">06</div><div><strong class="text-amber-300 text-xs">集成评审</strong> 18 项<br><span class="text-slate-500 text-[10px]">spec↔DB↔IF / 命名口径 / 追溯矩阵</span></div></div>
    <div class="feature-item" style="padding:5px 10px;gap:7px"><div class="feature-mark text-xs">07</div><div><strong class="text-pink-300 text-xs">术语词典</strong> 18 项<br><span class="text-slate-500 text-[10px]">四类词条 / 字段 9 列映射 / 三方 ⊆ 词典校验</span></div></div>
  </div>
</div>

<div class="compare-panel">
  <div class="statement-card statement-card-green">
    <strong>闭环：生成 → 验证 → 修复 → 复验</strong><br>
    验证不过不交付，修复后必须复验。集成评审消费各域 validate 结论。
  </div>

  <div class="arch-card text-[11px] leading-5">
    <strong class="text-indigo-300">与前端验证的关系</strong>
    <ul class="mt-1 space-y-0.5 text-slate-400">
      <li>kit <code>convention-audit</code> → 校验开发规范</li>
      <li>design 验证 → 校验设计产物规范</li>
      <li>设计验证通过 → 生成精准度↑ → 开发验证通过率↑</li>
    </ul>
  </div>

  <div class="statement-card text-sm">
    <strong>176 项验证清单的真正价值</strong>不是数字本身，而是把“什么算合格”从人脑判断变成机器可执行的检查项。清单就是底线。
  </div>
</div>

</div>
