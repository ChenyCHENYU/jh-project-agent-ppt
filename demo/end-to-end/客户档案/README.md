# 客户档案 — 端到端闭环样例

> 四包如何围绕**一个业务模块**，从需求设计到代码产出，串成一条完整的 AI 标准化链路。

## 目录结构

```
客户档案/
├── 01-design/               ← wl-skills-design 产物
│   ├── 数据库设计.md          （214项验证 · 字段对齐词典）
│   └── 术语词典.md            （三角联动中央锚点）
│
├── 02-contract/             ← 契约枢纽（四包唯一交汇点）
│   └── api.md                （★ 前端生成·后端消费·AI复核）
│
├── 03-frontend/             ← wl-skills-kit 真实产出 ✓
│   ├── index.vue  (59行)     （BaseQuery/BaseTable/jh-pagination）
│   ├── data.ts    (584行)    （API_CONFIG + managementColumns + renderStatusTag）
│   └── index.scss            （页面样式）
│
├── 04-backend/              ← wl-skills-bd 产物（基于 mdm-service 风格）
│   ├── controller/           CustomerArchiveController.java
│   ├── service/              CustomerArchiveService.java（extends JhServiceImpl）
│   ├── entity/               CustomerArchive.java（extends CoreEntity）
│   ├── mapper/               CustomerArchiveMapper.java + .xml
│   └── dto/                  CustomerArchivePageDTO.java
│
└── 05-reports/              ← convention-audit 真实产出 ✓
    └── 规范审查报告.md          （🔴严重/🟡轻微/🟢提示 + 修复标记）
```

## 闭环链路

```
design 数据库设计 + 术语词典
        │  （字段 ⊆ 词典，三方对齐锚点）
        ▼
   api.md 契约  ◄── kit api-contract 生成
        │  （前后端共同消费的唯一文件）
        ├──► kit page-codegen ──► index.vue + data.ts（真实 ✓）
        │
        └──► bd service-codegen ──► Controller + Service + Entity + Mapper
                                        │
                                        ▼
                              convention-audit ──► 规范审查报告（真实 ✓）
```

## 真实度标注

| 环节 | 来源 | 真实度 |
|------|------|--------|
| design 设计产物 | 基于 api.md 字段反推，对齐 design 包验证项 | 规范样例 |
| api.md 契约 | kit 真实产出（demo/produce/aiflow/） | ✅ 真实 |
| 前端代码 | kit page-codegen 真实生成 | ✅ 真实 |
| 后端代码 | 基于 mdm-service 真实风格 + bd 包规范模拟生成 | ⚠️ 样例（bd 骨架阶段） |
| 审计报告 | convention-audit 真实产出模板 | ✅ 真实 |

## 现场演示建议

1. 打开 `02-contract/api.md` — 看 4 个接口 + 14 字段 + 9 字典
2. 打开 `03-frontend/data.ts` — 看 584 行真实产出（API_CONFIG / managementColumns / renderStatusTag）
3. 打开 `04-backend/entity/CustomerArchive.java` — 看后端如何消费同一份契约
4. 打开 `01-design/术语词典.md` — 看 9 个 dictCode 如何锚定三方字段命名
5. 指出：**api.md 是唯一交汇点**，前端后端字段名完全一致，因为都对齐了词典
