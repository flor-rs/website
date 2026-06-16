# Flor 文档站

这是 **Flor** 的官方文档网站 - 一个高性能、信号驱动的 Rust 原生 GUI 框架。

[English](./README.md) | 中文

## 关于 Flor

Flor 是一个现代化、人性化的、基于控件的 GUI 框架，专为通用原生桌面应用设计，具有轻量级的特点。主要特性包括：

- **信号驱动架构** - 响应式状态管理，精细粒度更新
- **高性能** - 优化的渲染管线和高效的内存使用
- **原生外观** - 平台特定的样式和行为
- **控件化设计** - 模块化、可复用的 UI 组件
- **现代 Rust** - 利用最新的 Rust 特性提供人性化的 API 设计

## 技术栈

- **Rspress** - 文档静态站点生成器
- **React** - UI 组件和交互元素
- **TypeScript** - 类型安全的配置和脚本
- **MDX** - 支持 JSX 的 Markdown，用于丰富内容展示

## 项目结构

```
website/
├── docs/                  # 文档源文件
│   ├── en/                # 英文文档
│   │   ├── api/           # API 参考
│   │   ├── guide/         # 用户指南
│   │   │   ├── control/   # 控件开发
│   │   │   ├── features/  # 框架能力
│   │   │   └── use/       # 框架使用
│   │   └── index.md       # 首页
│   ├── zh/                # 中文文档
│   │   ├── api/           # API 参考
│   │   ├── guide/         # 使用指南
│   │   │   ├── control/   # 控件开发
│   │   │   ├── features/  # 框架能力
│   │   │   └── use/       # 框架使用
│   │   └── index.md       # 首页
│   └── public/            # 静态资源
├── theme/                 # 自定义主题组件
│   ├── index.css          # 自定义样式
│   └── index.tsx          # 主题配置
├── rspress.config.ts      # Rspress 配置
├── package.json           # 依赖和脚本
└── tsconfig.json          # TypeScript 配置
```

## 开发指南

### 环境要求

- Node.js 18+ 或 Bun
- npm 或 Bun 包管理器

### 安装

安装依赖：

```bash
npm install
```

或使用 Bun：

```bash
bun install
```

### 本地开发

启动开发服务器：

```bash
npm run dev
```

这将在 `http://localhost:3000` 启动本地服务器，并启用热重载。

### 构建

构建生产版本：

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览

本地预览生产构建：

```bash
npm run preview
```

## 文档结构

### 中文文档 (`docs/zh/`)

- **API 参考** (`api/`) - 详细 API 文档
  - 原子类语法
  - 事件处理器
  - 布局原子类
  - 信号系统

- **使用指南** (`guide/`)
  - **框架使用** (`use/`)
    - 初始化、信号、窗口、事件
    - 控件状态、Builder 方法、Resolver Layer、DSL
  - **框架能力** (`features/`)
    - 剪贴板、拖放、系统托盘
    - 主题、显示器、高 DPI、跨线程
  - **控件开发** (`control/`)
    - ViewId、View Trait、Resolver 系统
    - 从零开发控件

### 英文文档 (`docs/en/`)

与中文文档结构相同，提供英文翻译版本。

## 贡献指南

### 添加新文档

1. 在相应目录创建新的 `.mdx` 文件
2. 将文件添加到同目录的 `_meta.json` 中以配置导航
3. 如果是顶级导航项，更新 `_nav.json`
4. 同时编写中英文两个版本的内容

### 翻译指南

- 保持翻译术语的一致性
- 代码示例在两个语言版本中保持一致
- 保持文档结构和格式
- 同时更新两个语言版本

### 写作指南

- 使用清晰、简洁的语言
- 包含实用的代码示例
- 提供上下文和解释说明
- 在适当位置链接到相关文档

## 部署

网站部署到 GitHub Pages：https://flor-rs.github.io/website/

## 许可证

本文档是 Flor 项目的一部分。请查看主仓库了解许可证信息。

## 相关资源

- [Flor GitHub 仓库](https://github.com/flor-rs/flor)
- [Rspress 文档](https://rspress.dev)
- [Rust 文档](https://doc.rust-lang.org)