---
layout: section
title: AI 工作流完整闭环
---

<div class="h-full flex flex-col justify-center">
  <div class="text-sm text-emerald-400 tracking-widest mb-3 uppercase">Chapter 08</div>
  <h2 class="text-3xl font-black mb-3">
    <span class="gradient-text">AI 工作流完整闭环</span>
  </h2>
  <p class="text-slate-300 text-lg mb-2">需求设计 → 前端开发 → 后端开发 → 质量验证</p>
  <p class="text-slate-400">四个 Skills 包各守一环 · 契约贯穿 · 基建先行才有闭环</p>
</div>

---
layout: default
---

# 一图看完：四包闭环，契约贯穿

<div class="page-fit compact-stack text-[12px] leading-5">

<div class="fit-grid-4-tight text-[11px]">
  <div class="panel-soft-amber text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">环 01</div>
    <div class="text-amber-200 font-bold">需求设计</div>
    <div class="micro-note mt-0.5">wl-skills-design</div>
  </div>
  <div class="panel-soft-indigo text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">环 02</div>
    <div class="text-indigo-200 font-bold">前端开发</div>
    <div class="micro-note mt-0.5">wl-skills-kit + wl-skills-ui</div>
  </div>
  <div class="panel-soft-green text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">环 03</div>
    <div class="text-green-200 font-bold">后端开发</div>
    <div class="micro-note mt-0.5">wl-skills-bd</div>
  </div>
  <div class="panel-soft-cyan text-center !px-2 !py-1.5">
    <div class="text-slate-400 mb-1">环 04</div>
    <div class="text-cyan-200 font-bold">质量验证</div>
    <div class="micro-note mt-0.5">审计 + 评审 + 回流 <span class="text-slate-500">(测试 Skills 后续补充)</span></div>
  </div>
</div>

<div class="panel-soft dense-table">
  <table>
    <thead>
      <tr>
        <th style="width:70px">环节</th>
        <th style="width:120px">Skills 包</th>
        <th>核心能力</th>
        <th style="width:150px">输出产物</th>
        <th style="width:110px">下游消费</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-amber-300 font-bold">需求设计</td>
        <td>wl-skills-design</td>
        <td>流程图 / 说明书 / 原型标注 / 数据库 / 接口 / 评审 / 词典</td>
        <td>D3 原型标注 · spec IPO · 数据字典 · 接口定义</td>
        <td class="text-indigo-300">→ 前端 kit</td>
      </tr>
      <tr>
        <td class="text-indigo-300 font-bold">前端开发</td>
        <td>wl-skills-kit + wl-skills-ui</td>
        <td>prototype-scan / api-contract / page-codegen / validate / audit / sync</td>
        <td>api.md 契约 · Vue 页面代码 · 视觉对齐</td>
        <td class="text-green-300">→ 后端 bd</td>
      </tr>
      <tr>
        <td class="text-green-300 font-bold">后端开发</td>
        <td>wl-skills-bd</td>
        <td>api-design-be / entity-codegen / service-codegen / db-migration / audit-be</td>
        <td>Controller/Service/Mapper · DDL · 审计报告</td>
        <td class="text-cyan-300">→ 质量验证</td>
      </tr>
      <tr>
        <td class="text-cyan-300 font-bold">质量验证</td>
        <td>kit + ui + bd + design</td>
        <td>convention-audit / validate / design-review / 审计回流</td>
        <td>审计报告 · 评审评分 · 闭环反馈</td>
        <td class="text-amber-300">→ 回流设计<br><span class="text-slate-500 text-[9px]">(需求→开发闭环阶段，测试 Skills 后续补充)</span></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="grid grid-cols-2 gap-1.5 text-[10px] leading-4.5">
  <div class="statement-card statement-card-amber !p-2.5">
    <strong>契约贯穿：</strong><code>api.md</code> 由前端 api-contract 生成，后端 service-codegen 消费，双端偏差改契约不改代码。术语词典作为字段对齐锚点贯穿设计到代码。
  </div>
  <div class="statement-card statement-card-green !p-2.5">
    <strong>闭环回写：</strong>质量验证的审计报告和闭环反馈回流到设计侧，驱动规范迭代和 Skill 升级——这是需求到开发闭环的关键一环，后续测试 Skills 将进一步补全验证能力。
  </div>
</div>

</div>

---
layout: default
---

# 传统交付 vs AI 重构交付

<div class="compare-stage mt-4 text-sm">

<div class="compare-panel compare-panel-before">
  <div class="compare-heading">
    <div class="font-bold text-slate-100">传统交付模式</div>
    <span class="badge badge-wip">人驱动</span>
  </div>

  <div class="flow-column-compact text-[11px]">
    <div v-click class="flow-node !p-2">
      <div class="text-blue-300 font-bold">产品写需求</div>
      <div class="text-slate-500 text-[9px]">Word 文档 · 自然语言 · 无结构化验证</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ 口头传达 / 文档转发</div>
    <div v-click class="flow-node !p-2">
      <div class="text-indigo-300 font-bold">前端手写页面</div>
      <div class="text-slate-500 text-[9px]">按理解开发 · 规范靠个人记忆</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ 口头对字段 / 联调返工</div>
    <div v-click class="flow-node !p-2">
      <div class="text-green-300 font-bold">后端手写接口</div>
      <div class="text-slate-500 text-[9px]">另起炉灶 · 与前端各猜各的</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ 联调 + 回归</div>
    <div v-click class="flow-node !p-2">
      <div class="text-cyan-300 font-bold">测试手工用例</div>
      <div class="text-slate-500 text-[9px]">最后入场 · 发现问题成本最高</div>
    </div>
  </div>

  <div class="panel-soft-red !p-3 text-xs mt-2">
    <div class="text-red-300 font-bold mb-1">核心问题</div>
    <div class="text-slate-400">各环节靠人传递信息，无机器可消费的统一契约，返工成本随规模线性上升。</div>
  </div>
</div>

<div class="compare-panel compare-panel-after">
  <div class="compare-heading">
    <div class="font-bold text-slate-100">AI 重构交付模式</div>
    <span class="badge badge-done">契约驱动</span>
  </div>

  <div class="flow-column-compact text-[11px]">
    <div v-click class="flow-node-amber !p-2">
      <div class="text-amber-300 font-bold">AI 按规范生成设计</div>
      <div class="text-slate-500 text-[9px]">176 项验证 · 三角联动 · 生成即合规</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ D3 标注 / spec IPO 直接消费</div>
    <div v-click class="flow-node-indigo !p-2">
      <div class="text-indigo-300 font-bold">AI 生成前端代码</div>
      <div class="text-slate-500 text-[9px]">14 条规范 + 10 Skill + 17 MCP Tool</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ api.md 唯一契约 · 无歧义</div>
    <div v-click class="flow-node-green !p-2">
      <div class="text-green-300 font-bold">AI 生成后端骨架</div>
      <div class="text-slate-500 text-[9px]">消费同一份 api.md · 9 步到可部署</div>
    </div>
    <div v-click class="flow-arrow text-[10px] text-slate-600">↓ 审计 + 评审 + 测试推导</div>
    <div v-click class="flow-node-cyan !p-2">
      <div class="text-cyan-300 font-bold">AI 辅助质量验证</div>
      <div class="text-slate-500 text-[9px]">前移到每步验证 · 反馈回流驱动演化</div>
    </div>
  </div>

  <div class="panel-soft-green !p-3 text-xs mt-2">
    <div class="text-green-300 font-bold mb-1">核心改变</div>
    <div class="text-slate-400">各环节消费同一套机器可读契约，信息传递零损耗，返工从"大面积重来"变为"少量校正"。</div>
  </div>
</div>

</div>

---
layout: default
---

# 为什么基建必须先行

<div class="mt-4">

<div class="statement-card statement-card-indigo text-sm mb-4">
<strong>一个容易被忽视的事实：</strong>AI 的能力不是瓶颈，上下文质量才是。四个 Skills 包做的事情不是"给 AI 加功能"，而是把团队经验编码成 AI 稳定消费的工程系统。这套基建不扎实，AI 永远在猜——猜规范、猜字段、猜风格、猜架构。
</div>

<div class="grid grid-cols-3 gap-4 text-sm">

<div class="arch-card-orange">
  <div class="text-amber-300 font-bold mb-2">基建不足时</div>
  <div class="space-y-1.5 text-slate-400 text-xs leading-relaxed">
    <div>✗ AI 生成代码 → 风格各异 → 逐页返工</div>
    <div>✗ AI 生成接口 → 字段对不上 → 联调崩</div>
    <div>✗ AI 生成设计 → 不合规范 → 大改特改</div>
    <div>✗ 加更多人 → 混乱随人数放大</div>
  </div>
  <div class="text-amber-300 text-xs font-bold mt-2">结果：AI 越快，返工越贵</div>
</div>

<div class="arch-card-green">
  <div class="text-green-300 font-bold mb-2">基建扎实后</div>
  <div class="space-y-1.5 text-slate-400 text-xs leading-relaxed">
    <div>✓ AI 读取规范 → 风格统一 → 校正极少</div>
    <div>✓ AI 消费契约 → 字段对齐 → 联调流畅</div>
    <div>✓ AI 按规范生成 → 176 项验证 → 即出即合规</div>
    <div>✓ 加更多人 → 风格和规范自动对齐</div>
  </div>
  <div class="text-green-300 text-xs font-bold mt-2">结果：AI 越快，交付越稳</div>
</div>

<div class="arch-card-cyan">
  <div class="text-cyan-300 font-bold mb-2">方向验证</div>
  <div class="space-y-1.5 text-slate-400 text-xs leading-relaxed">
    <div>✓ wl-mdata 基线项目 0 偏差审计通过</div>
    <div>✓ 规范通过率从 15%~45% → 100%</div>
    <div>✓ 联调返工 4~8h → 30 分钟内</div>
    <div>✓ Hermes Agent 同源 SKILL.md 验证路径可行</div>
  </div>
  <div class="text-cyan-300 text-xs font-bold mt-2">结果：这条路走对了</div>
</div>

</div>

<div class="panel-soft-amber mt-4 text-sm">
  <strong class="text-amber-300">四个包的分工不是"各做各的"，而是共同构成一条从需求到交付的 AI 高速公路。</strong>
  <span class="text-slate-400">设计包铺路面（规范 + 产物），前端包造车（生成 + 校验），后端包装货（骨架 + 同步），质量包做年检（审计 + 评审）。路不修好，车跑不快；路修好了，车自动就能跑。</span>
</div>

</div>

---
layout: default
---

<h1 class="tight-title">四包协作：每个环节的 AI 是怎么工作的</h1>

<div class="page-fit compact-stack text-[11px] leading-4">

<div class="fit-grid-4-tight text-[10px]">
  <div class="panel-soft-amber text-center !px-2 !py-1.5">
    <div class="text-lg">📋</div>
    <div class="text-amber-200 font-bold text-[10px]">需求设计</div>
    <div class="text-[8px] text-slate-500">7 Skill · 8 规范 · 176 验证</div>
  </div>
  <div class="panel-soft-indigo text-center !px-2 !py-1.5">
    <div class="text-lg">⚡</div>
    <div class="text-indigo-200 font-bold text-[10px]">前端开发</div>
    <div class="text-[8px] text-slate-500">10 Skill · 14 规范 · 17 MCP</div>
  </div>
  <div class="panel-soft-green text-center !px-2 !py-1.5">
    <div class="text-lg">🗄️</div>
    <div class="text-green-200 font-bold text-[10px]">后端开发</div>
    <div class="text-[8px] text-slate-500">9 Skill · 14 规范</div>
  </div>
  <div class="panel-soft-cyan text-center !px-2 !py-1.5">
    <div class="text-lg">✅</div>
    <div class="text-cyan-200 font-bold">质量验证</div>
    <div class="text-[8px] text-slate-500">审计 · 评审 · 回流</div>
    <div class="text-[7px] text-slate-600">测试 Skills 后续补充</div>
  </div>
</div>

<div class="compare-stage compare-stage-tight text-[10px] leading-4">
  <div class="compare-panel compare-panel-neutral">
    <div class="font-bold text-amber-300 mb-1">设计阶段 · AI 做什么</div>
    <div class="text-slate-400 space-y-0.5">
      <div>1. 意图路由 → 加载对应 Skill + 规范</div>
      <div>2. 读 <code>templates/</code> 空白骨架开始填充</div>
      <div>3. 对照 <code>examples/</code> 标杆校准质量</div>
      <div>4. 跑验证清单 → 修复 → 复验 → 出报告</div>
      <div>5. spec ↔ DB ↔ IF 三角联动，词典做锚点</div>
    </div>
  </div>

  <div class="compare-panel">
    <div class="font-bold text-indigo-300 mb-1">开发阶段 · AI 做什么</div>
    <div class="text-slate-400 space-y-0.5">
      <div>1. 读 D3 标注 → prototype-scan → page-spec</div>
      <div>2. spec IPO → api-contract → api.md 契约</div>
      <div>3. page-spec + api.md → page-codegen → Vue</div>
      <div>4. convention-audit → 定位问题 → code-fix</div>
      <div>5. 菜单/字典/权限 → diff → 人工确认 → 写入</div>
    </div>
  </div>
</div>

<div class="statement-card statement-card-indigo !p-2 text-[10px]">
  <strong>模式总结：</strong>每个环节都是"规范 → 模板 → 样例 → 生成 → 验证 → 修复"闭环。AI 在<strong class="text-white">被约束的轨道上高速执行</strong>，约束越精确，输出越稳定。
</div>

</div>
