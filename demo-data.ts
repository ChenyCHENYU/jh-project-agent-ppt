/**
 * Demo 数据 — 基于真实 wl-skills-kit / wl-skills-design / wl-skills-bd / wl-skills-ui 包内容
 */

// ── L5 真实执行链路（映射到 skills/ 目录结构） ──
export const pipelineSteps = [
  { num: '01', skill: 'prototype-scan / spec-doc-parse', label: '原型线/规范线 → 页面清单', product: '→ page-spec JSON + 页面总表', variant: 'cyan' },
  { num: '02', skill: 'api-contract', label: '页面清单 → 接口契约', product: '→ src/views/**/api.md', variant: 'indigo' },
  { num: '03', skill: 'page-codegen', label: '契约+清单 → 三文件产出', product: '→ index.vue + data.ts + index.scss', variant: 'purple' },
  { num: '04', skill: 'page-codegen(内置自检)', label: '生成后强制校验', product: '→ R1-R12 AST + S1-S5 page-spec', variant: 'cyan' },
  { num: '05', skill: 'convention-audit', label: '14 条规范审计', product: '→ reports/规范审查报告.md', variant: 'indigo' },
  { num: '06', skill: 'code-fix', label: '自动修复 → 强制复扫', product: '→ 修后自动 validate', variant: 'green' },
  { num: '07', skill: 'doctor-ui', label: 'UI 接入诊断', product: '→ I001~I005 + R001~R037', variant: 'cyan' },
  { num: '08', skill: 'menu-sync', label: '菜单注册 (MCP)', product: '→ SYS_MENU_INFO.md', variant: 'amber' },
  { num: '09', skill: 'dict-sync', label: '字典同步 (MCP)', product: '→ 线上字典对齐', variant: 'amber' },
  { num: '10', skill: 'permission-sync', label: '权限+角色同步', product: '→ v-permission + 角色授权', variant: 'green' },
]

// ── 终端帧：npx 安装 + 各 Skill Pre-flight 输出 ──
export const installFrames = [
  { type: 'cmd', text: '$ npx @agile-team/wl-skills-kit' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 @agile-team/wl-skills-kit v2.11.1 — AI 工程体系初始化' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 步骤 1/5 — 编辑器规范文件' },
  { type: 'ok',  text: '  ✓ .github/copilot-instructions.md      (Copilot 主入口)' },
  { type: 'ok',  text: '  ✓ .cursor/rules/                       (Cursor 规则 ×3)' },
  { type: 'ok',  text: '  ✓ CLAUDE.md                            (Claude Code)' },
  { type: 'ok',  text: '  ✓ AGENTS.md                            (通用 Agent)' },
  { type: 'ok',  text: '  ✓ .windsurfrules                       (Windsurf)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 步骤 2/5 — AI Skills（11 个）' },
  { type: 'ok',  text: '  ✓ core/prototype-scan/SKILL.md         原型解析 → page-spec' },
  { type: 'ok',  text: '  ✓ core/api-contract/SKILL.md           接口约定 → api.md' },
  { type: 'ok',  text: '  ✓ core/page-codegen/SKILL.md           页面代码生成' },
  { type: 'ok',  text: '  ✓ core/validate-page/SKILL.md          产出校验' },
  { type: 'ok',  text: '  ✓ core/convention-audit/SKILL.md       14条规范审计' },
  { type: 'ok',  text: '  ✓ core/business-doc-extract/SKILL.md   业务文档提取' },
  { type: 'ok',  text: '  ✓ core/template-extract/SKILL.md       组件提取建议' },
  { type: 'ok',  text: '  ✓ core/spec-doc-parse/SKILL.md         标准需求解析' },
  { type: 'ok',  text: '  ✓ ops/code-fix/SKILL.md                自动修复' },
  { type: 'ok',  text: '  ✓ sync/menu-sync/SKILL.md              菜单同步' },
  { type: 'ok',  text: '  ✓ sync/dict-sync/SKILL.md              字典同步' },
  { type: 'ok',  text: '  ✓ sync/permission-sync/SKILL.md        权限同步' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 步骤 3/5 — MCP Tools（17 个）' },
  { type: 'ok',  text: '  ✓ mcp/server.js                        (stdio, JSON-RPC 2.0)' },
  { type: 'ok',  text: '  ✓ wls_menu_query / wls_menu_upsert / wls_menu_sync_from_report' },
  { type: 'ok',  text: '  ✓ wls_dict_query / wls_dict_upsert' },
  { type: 'ok',  text: '  ✓ wls_role_query / wls_role_upsert / wls_role_assign_menus' },
  { type: 'ok',  text: '  ✓ wls_code_scan / wls_validate_page / wls_doctor_ui' },
  { type: 'ok',  text: '  ✓ wls_route_check / wls_git_log_extract / wls_audit_report_push' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 步骤 4/5 — 编码规范（14 条）' },
  { type: 'ok',  text: '  ✓ standards/01-toolchain.md             工具链' },
  { type: 'ok',  text: '  ✓ standards/02-code-structure.md        三文件分离+script九段' },
  { type: 'ok',  text: '  ✓ standards/09-typescript.md            TS 类型' },
  { type: 'ok',  text: '  ✓ standards/12-base-table.md            BaseTable+AGGrid+cid' },
  { type: 'ok',  text: '  ✓ standards/13-platform-components.md   平台组件对照' },
  { type: 'ok',  text: '  ✓ standards/14-layout-containers.md     布局容器' },
  { type: 'ok',  text: '  ✓ ... 共 14 条规范' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 步骤 5/5 — 报告模板' },
  { type: 'ok',  text: '  ✓ reports/规范审查报告.md' },
  { type: 'ok',  text: '  ✓ reports/组件提取建议.md' },
  { type: 'ok',  text: '  ✓ reports/SYS_MENU_INFO.md' },
  { type: 'ok',  text: '  ✓ reports/SYS_DICT_INFO.md' },
  { type: 'ok',  text: '  ✓ reports/SYS_PERMISSION_INFO.md' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '✅ 初始化完成！11 Skills + 17 MCP Tools + 14 规范 已就绪' },
  { type: 'out', text: '   下一步: 在 Cursor 中说 "扫原型" 或 "建个页面"' },
]

export const scanFrames = [
  { type: 'cmd', text: '▶ 用户: "帮我建一个客户档案管理页面，有名称、类型、信用代码字段"' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 已触发技能 core/prototype-scan/SKILL.md' },
  { type: 'ok',  text: '✅ 已读取 standards/index.md                  → 规范门控' },
  { type: 'ok',  text: '✅ 模式 0 — 自然语言转 page-spec' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 提取关键信息:' },
  { type: 'ok',  text: '   页面中文名: 客户档案' },
  { type: 'ok',  text: '   交互模式:   LIST (默认，列表查询页)' },
  { type: 'ok',  text: '   服务缩写:   mmwr → 精整作业' },
  { type: 'ok',  text: '   资源名:     customerArchive' },
  { type: 'ok',  text: '   目录名:     customer-archive' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 构建 page-spec JSON:' },
  { type: 'ok',  text: '   query:    [customerName(input), customerType(dict), createDate(dateRange)]' },
  { type: 'ok',  text: '   toolbar:  [新增(primary), 删除(danger)]' },
  { type: 'ok',  text: '   columns:  [customerName / customerType / creditCode / enableStatus / createTime]' },
  { type: 'ok',  text: '   operations: [编辑, 删除]' },
  { type: 'ok',  text: '   platformComponents: [BaseQuery, BaseTable, jh-pagination]' },
  { type: 'ok',  text: '   newComponents: [] (无需新建)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 数据字典汇总:' },
  { type: 'ok',  text: '   dictCode=customer_type  客户类型  出现: query + columns' },
  { type: 'ok',  text: '   dictCode=enable_status  启用状态  出现: columns' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 pages.ts 注册片段:' },
  { type: 'ok',  text: '   ["customer-archive", "客户档案"]' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📝 notes:' },
  { type: 'warn', text: '   ⚠ [模式0] 字段英文名为AI推断值，请确认' },
  { type: 'warn', text: '   ⚠ [模式0] dictCode 为推断值，请后端确认' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '✅ page-spec JSON 输出完成 → 传递给 api-contract' },
]

export const contractFrames = [
  { type: 'cmd', text: '▶ api-contract — 基于 page-spec 生成接口契约' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 已触发技能 core/api-contract/SKILL.md' },
  { type: 'ok',  text: '✅ 已读取 page-spec: customerArchive (LIST)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 URL 命名:' },
  { type: 'ok',  text: '   /mmwr/customerArchive/list      POST  分页查询' },
  { type: 'ok',  text: '   /mmwr/customerArchive/getById    GET   详情查询' },
  { type: 'ok',  text: '   /mmwr/customerArchive/save       POST  新增' },
  { type: 'ok',  text: '   /mmwr/customerArchive/update     POST  编辑' },
  { type: 'ok',  text: '   /mmwr/customerArchive/remove     POST  删除' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 实体定义:' },
  { type: 'ok',  text: '   id            string   主键       (自动)' },
  { type: 'ok',  text: '   customerName  string   客户名称   (必填)' },
  { type: 'ok',  text: '   customerType  string   客户类型   (必填) dict=customer_type' },
  { type: 'ok',  text: '   creditCode    string   信用代码   (选填)' },
  { type: 'ok',  text: '   enableStatus  string   启用状态   (必填) dict=enable_status' },
  { type: 'ok',  text: '   createTime    string   创建时间   (自动)' },
  { type: 'ok',  text: '   createBy      string   创建人     (自动)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 响应结构:' },
  { type: 'ok',  text: '   外壳: { code: 2000, message, data }  ← 成功码 2000 非 200' },
  { type: 'ok',  text: '   分页: data.records + data.total + data.current' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '✅ api.md → src/views/mmwr/customer-archive/api.md' },
  { type: 'out', text: '   状态: 🟡 待后端确认' },
  { type: 'ok',  text: '✅ API_CONFIG → data.ts 中 URL 字段直接对应' },
]

export const codegenFrames = [
  { type: 'cmd', text: '▶ page-codegen — 基于契约+清单生成页面代码' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 已触发技能 core/page-codegen/SKILL.md' },
  { type: 'ok',  text: '✅ 已读取 templates/_index.md                → 模板注册表' },
  { type: 'ok',  text: '✅ 模板匹配 → TPL-LIST.md (标准列表页)' },
  { type: 'ok',  text: '✅ 已读取 standards/02-code-structure.md     → 三文件分离+script九段' },
  { type: 'ok',  text: '✅ 已读取 standards/12-base-table.md         → AGGrid必用+cid命名' },
  { type: 'ok',  text: '✅ 已读取 standards/13-platform-components.md → 平台组件对照' },
  { type: 'ok',  text: '✅ 已读取 standards/14-layout-containers.md  → 布局容器' },
  { type: 'ok',  text: '✅ 工具链检测：.prettierrc.js ✓ eslint ✓ .husky ✓' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 cid 生成:' },
  { type: 'ok',  text: '   MMWR_CUST_ARCHIVE          (表级 cid)' },
  { type: 'ok',  text: '   CUST_001 customerName       列级 cid' },
  { type: 'ok',  text: '   CUST_002 customerType        列级 cid' },
  { type: 'ok',  text: '   CUST_003 creditCode          列级 cid' },
  { type: 'ok',  text: '   CUST_004 enableStatus        列级 cid' },
  { type: 'ok',  text: '   CUST_005 createTime          列级 cid' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📦 本次生成完成' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '✅ src/views/mmwr/customer-archive/index.vue' },
  { type: 'ok',  text: '✅ src/views/mmwr/customer-archive/data.ts' },
  { type: 'ok',  text: '✅ src/views/mmwr/customer-archive/index.scss' },
  { type: 'ok',  text: '✅ src/views/mmwr/customer-archive/api.md' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '📌 后续: router/pages.ts 注册 → git cz 提交' },
]

export const auditFrames = [
  { type: 'cmd', text: '▶ convention-audit — 14 条规范审计' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 已触发技能 core/convention-audit/SKILL.md' },
  { type: 'ok',  text: '✅ 已读取 standards/index.md       → 规范门控（审计模式）' },
  { type: 'ok',  text: '✅ 已读取 standards/01 ~ 14 全量基线' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 扫描范围: src/views/mmwr/customer-archive/' },
  { type: 'ok',  text: '   扫描 3 个文件 (index.vue / data.ts / index.scss)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 逐条检查:' },
  { type: 'ok',  text: '   ✓ S01 工具链        .prettierrc.js / eslint / husky' },
  { type: 'ok',  text: '   ✓ S02 三文件分离    index.vue + data.ts + index.scss ✓' },
  { type: 'ok',  text: '   ✓ S04 编码基础      无 console.log / debugger' },
  { type: 'ok',  text: '   ✓ S09 TypeScript     类型完整, 无 any' },
  { type: 'ok',  text: '   ✓ S12 BaseTable      使用 BaseTable, cid 命名合规' },
  { type: 'ok',  text: '   ✓ S13 平台组件       BaseQuery + BaseTable + jh-pagination' },
  { type: 'ok',  text: '   ✓ S14 布局容器       未使用 C_Splitter' },
  { type: 'ok',  text: '   ✓ api.md 存在        前后端契约已建立' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '📊 审计结果: 0 偏差 · 全部通过 ✅' },
  { type: 'ok',  text: '   🔴 严重: 0   🟡 轻微: 0   🟢 提示: 0' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '📝 报告 → reports/规范审查报告.md (已追加)' },
]

export const syncFrames = [
  { type: 'cmd', text: '▶ sync — 菜单/字典/权限同步 (MCP)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '🚀 MCP Tools 调用链' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 步骤 1/3 — 菜单注册' },
  { type: 'ok',  text: '   → wls_menu_query(parentId)       查询父级菜单' },
  { type: 'ok',  text: '   → wls_menu_upsert({...})          写入菜单条目' },
  { type: 'ok',  text: '   路径: 精整作业 > 客户档案' },
  { type: 'ok',  text: '   → reports/SYS_MENU_INFO.md 已追加' },
  { type: 'warn', text: '   ⚠️ diff 预览 → 等待人工确认 (高风险操作)' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 步骤 2/3 — 字典同步' },
  { type: 'ok',  text: '   → wls_dict_query(customer_type)   查询现有字典' },
  { type: 'ok',  text: '   → wls_dict_upsert({...})          对齐字典值' },
  { type: 'ok',  text: '   dictCode: customer_type / enable_status' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '📋 步骤 3/3 — 权限同步' },
  { type: 'ok',  text: '   → wls_role_query()                查询角色列表' },
  { type: 'ok',  text: '   → wls_action_upsert({...})        注册按钮权限' },
  { type: 'ok',  text: '   v-permission: ["add","edit","delete","export"]' },
  { type: 'out', text: '' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
  { type: 'ok',  text: '✅ 菜单注册 + 字典同步 + 权限写入 完成' },
  { type: 'ok',  text: '──────────────────────────────────────────────' },
]

// ── 代码示例：page-codegen 真实产物 ──
export const codeVue = `<template>
  <div class="page-container">
    <BaseQuery :query-def="queryDef" />
    <BaseToolbar :toolbar-def="toolbarDef" />
    <BaseTable
      :columns="columns"
      :data-source="tableData"
      :loading="loading"
      row-key="id"
      cid="MMWR_CUST_ARCHIVE"
    />
    <jh-pagination v-model:current="current" v-model:size="size" :total="total" />
  </div>
</template>

<script setup lang="ts">
import { usePageQuery } from '@/hooks/usePageQuery'
import { createPage } from './data'
const page = createPage()
const { queryDef, toolbarDef, columns } = page.useDefs()
const { tableData, loading, current, size, total } = usePageQuery(
  page.apiConfig.list
)
</script>`

export const codeData = `import { AbstractPageQueryHook, TableColumnDesc } from '@jhlc/common-core'

export const API_CONFIG = {
  list: '/mmwr/customerArchive/list',
  remove: '/mmwr/customerArchive/remove',
  save: '/mmwr/customerArchive/save',
  update: '/mmwr/customerArchive/update',
  getById: '/mmwr/customerArchive/getById',
} as const

export function createPage() {
  return new (class extends AbstractPageQueryHook {
    columnDef(): TableColumnDesc[] {
      return [
        { key: 'customerName', title: '客户名称', width: 180,
          cid: 'CUST_001' },
        { key: 'customerType', title: '客户类型', width: 120,
          cid: 'CUST_002', dictCode: 'customer_type' },
        { key: 'creditCode', title: '信用代码', width: 200,
          cid: 'CUST_003' },
        { key: 'enableStatus', title: '启用状态', width: 100,
          cid: 'CUST_004', dictCode: 'enable_status' },
        { key: 'createTime', title: '创建时间', width: 170,
          cid: 'CUST_005' },
      ]
    }
  })()
}`

// ── 代码对比 ──
export const beforeCode = `<template>
  <div>
    <!-- 查询区域 -->
    <el-form :inline="true" :model="queryParams" ref="queryForm">
      <el-form-item label="客户名称">
        <el-input v-model="queryParams.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="客户类型">
        <el-select v-model="queryParams.type" placeholder="请选择">
          <el-option label="重点客户" value="01" />
          <el-option label="普通客户" value="02" />
          <el-option label="潜在客户" value="03" />
        </el-select>
      </el-form-item>
      <el-form-item label="建立日期">
        <el-date-picker v-model="queryParams.date" type="daterange" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 按钮栏 -->
    <el-row :gutter="10" style="margin-bottom:12px">
      <el-col :span="1.5">
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" @click="handleBatchDel">删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning" @click="handleExport">导出</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" border @selection-change="handleSelection">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="name" label="客户名称" />
      <el-table-column prop="type" label="客户类型">
        <template #default="scope">
          <el-tag v-if="scope.row.type === '01'">重点客户</el-tag>
          <el-tag v-else-if="scope.row.type === '02'">普通客户</el-tag>
          <el-tag v-else type="info">潜在客户</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="creditCode" label="信用代码" />
      <el-table-column prop="status" label="启用状态">
        <template #default="scope">
          <el-switch v-model="scope.row.status" :active-value="1" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="page.current"
      :page-size="page.size"
      :total="page.total"
      @current-change="handlePage"
    />
    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="600px">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
        <el-form-item label="客户名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="客户类型" prop="type">
          <el-select v-model="form.type">
            <el-option label="重点" value="01" />
            <el-option label="普通" value="02" />
          </el-select>
        </el-form-item>
        <el-form-item label="信用代码" prop="creditCode">
          <el-input v-model="form.creditCode" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
const tableData = ref([])
const loading = ref(false)
const queryParams = reactive({ name: '', type: '', date: [] })
const page = reactive({ current: 1, size: 20, total: 0 })
const dialogVisible = ref(false)
const dialogTitle = ref('')
const form = reactive({ name: '', type: '', creditCode: '' })
const formRef = ref(null)
const rules = { name: [{ required: true, message: '请输入', trigger: 'blur' }] }
const selectedRows = ref([])
function handleQuery() { page.current = 1; getList() }
function resetQuery() { queryParams.name = ''; queryParams.type = ''; getList() }
function handlePage(val) { page.current = val; getList() }
function handleSelection(val) { selectedRows.value = val }
function handleAdd() { dialogTitle.value = '新增'; Object.assign(form, { name: '', type: '', creditCode: '' }); dialogVisible.value = true }
function handleEdit(row) { dialogTitle.value = '编辑'; Object.assign(form, row); dialogVisible.value = true }
function handleDel(row) { axios.post('/api/customer/delete', { id: row.id }).then(() => getList()) }
function handleBatchDel() { const ids = selectedRows.value.map(r => r.id); axios.post('/api/customer/delete', { ids }).then(() => getList()) }
function handleExport() { window.open('/api/customer/export?' + new URLSearchParams(queryParams)) }
function submitForm() { formRef.value.validate((valid) => { if (valid) { axios.post('/api/customer/save', form).then(() => { dialogVisible.value = false; getList() }) } }) }
function getList() {
  loading.value = true
  axios.get('/api/customer/list', { params: { ...queryParams, current: page.current, size: page.size } })
    .then(res => { tableData.value = res.data.data.records; page.total = res.data.data.total })
    .finally(() => { loading.value = false })
}
onMounted(() => { getList() })
</script>`

export const afterCode = `<template>
  <div class="page-container">
    <BaseQuery :query-def="queryDef" />
    <BaseToolbar :toolbar-def="toolbarDef" />
    <BaseTable
      :columns="columns"
      :data-source="tableData"
      :loading="loading"
      row-key="id"
      cid="MMWR_CUST_ARCHIVE"
    />
    <jh-pagination v-model:current="current" v-model:size="size" :total="total" />
  </div>
</template>
<script setup lang="ts">
import { usePageQuery } from '@/hooks/usePageQuery'
import { createPage } from './data'
const page = createPage()
const { queryDef, toolbarDef, columns } = page.useDefs()
const { tableData, loading, current, size, total } = usePageQuery(
  page.apiConfig.list
)
</script>`
