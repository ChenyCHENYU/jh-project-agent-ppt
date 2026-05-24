# jh-project-agent-ppt

> **AI 驱动研发工程体系** — 内部团队 AI 技术应用培训 Slidev PPT 项目

基于 [Slidev](https://cn.sli.dev/) 构建，聚焦 **wl-skills-kit · wl-skills-ui · wl-skills-bd** 三大模块，按 L0–L7 分层能力体系进行培训讲解。

---

## 环境要求

- Node.js >= 18.0.0
- pnpm（推荐）或 npm

> **Windows 用户注意**：Slidev v52（Vite 6）在 Windows 上存在路径解析 Bug，本项目已锁定使用 v0.49.29（基于 Vite 5），可正常运行。

## 快速启动

```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器（自动打开浏览器）
npm run dev

# 构建静态站点
npm run build

# 导出 PDF
npm run export

# 导出 PPTX
npm run export:pptx
```

## 项目结构

```
jh-project-agent-ppt/
├── slides.md              # 主入口（封面 + TOC + 章节导入）
├── pages/
│   ├── 01-why.md          # 第一章：为什么需要这套体系
│   ├── 02-l0-l7.md        # 第二章：L0–L7 能力层级体系
│   ├── 03-kit.md          # 第三章：wl-skills-kit 深度解析
│   ├── 04-ui.md           # 第四章：wl-skills-ui 视觉体系
│   ├── 05-bd.md           # 第五章：wl-skills-bd 后端镜像
│   ├── 06-workflow.md     # 第六章：AI 工作流实战
│   ├── 07-challenges.md   # 第七章：挑战与突破
│   └── 08-vision.md       # 第八章：长期愿景与 Hermes 接入
├── components/
│   ├── StatusBadge.vue    # 状态徽标组件
│   └── LevelCard.vue      # L 层级卡片组件
├── styles/
│   └── index.css          # 自定义深色技术主题样式
└── package.json
```

## PPT 内容概览

| 章节 | 主题 | 幻灯片数 |
|------|------|---------|
| Ch01 | 为什么需要这套体系 | ~6 |
| Ch02 | L0–L7 能力层级体系 | ~8 |
| Ch03 | wl-skills-kit 深度解析 | ~10 |
| Ch04 | wl-skills-ui 视觉体系 | ~6 |
| Ch05 | wl-skills-bd 后端镜像 | ~5 |
| Ch06 | AI 工作流实战 | ~8 |
| Ch07 | 挑战与突破 | ~6 |
| Ch08 | 长期愿景与 Hermes 接入 | ~6 |
| | **合计** | **~65** |

## 演讲者功能

启动开发服务器后：
- 按 `P` 进入演讲者模式（含演讲备注）
- 按 `O` 查看幻灯片总览
- 按 `D` 切换暗/亮模式
- 按 `F` 全屏

## 后续拓展空间

各章节末尾预留了 Demo 区域和拓展板块，可持续添加：

- 业务场景实战案例
- 具体项目的 Pipeline 跑通截图
- 团队实际数据和效果对比
- 新加入的 Skill / MCP Tool 演示

## 技术栈

- [Slidev](https://cn.sli.dev/) v0.49.29 — 基于 Web 的幻灯片制作工具（锁定版本，兼容 Windows）
- [Vue 3](https://v3.vuejs.org/) — 自定义组件
- [UnoCSS](https://unocss.dev/) — 工具类样式
- [Mermaid](https://mermaid.js.org/) — 架构图表
- [Shiki](https://shiki.matsu.io/) — 代码语法高亮

---

金恒科技 · 敏捷团队 · 2026 · 持续演进中
