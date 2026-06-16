---
pageType: home

hero:
  name: Flor
  text: 一个既要，又要，还要的 Rust GUI 框架
  tagline: 解决 Rust 生命周期痛点，重新定义 GUI 开发体验
  actions:
    - theme: brand
      text: 快速开始
      link: guide/book-index
    - theme: alt
      text: GitHub
      link: https://github.com/flor-rs/flor
  # image:
    # src: /rspress-icon.png
    # alt: Flor 框架 logo
features:
  - title: 极致性能
    details: 高性能渲染引擎，低编译后体积，基于即时模式的保留模式设计，天然支持高性能动画。
    icon: ⚡
    link: /guide/book-index
  - title: 跨线程响应式信号系统
    details: 支持跨线程使用的响应式信号系统，解决 Rust 生命周期带来的痛点，实现 UI 与数据的自动同步。
    icon: 📡
    link: /guide/use/signal
  - title: 无上下文绑定
    details: 不强制绑定上下文，支持在任意线程任意地方创建窗口，提供极大的开发灵活性。
    icon: 🔓
    link: /guide/book-index
  - title: 声明式 UI DSL
    details: 简洁直观的声明式 UI 语法，结合 Tailwind CSS 风格的布局类，快速构建复杂界面。
    icon: 🎨
    link: /api/layout-class
  - title: 多窗口支持
    details: 原生支持多窗口，各窗口可独立设置刷新模式，满足复杂应用场景需求。
    icon: 🖥️
    link: /guide/book-index
  - title: 原生句柄暴露
    details: 暴露底层句柄，支持作为 native 库使用，提供最大的灵活性和扩展性。
    icon: 🔧
    link: /guide/book-index
  - title: 样式派生宏
    details: 通过 `#[derive(Resolver)]` 宏自动生成完整的样式管理系统，简化控件开发流程。
    icon: 📦
    link: /guide/control/resolver/style-derive-macro
  - title: 跨平台兼容
    details: 自写平台支持，确保在 Windows、macOS、Linux 等多个平台上的一致体验。
    icon: 🌍
    link: /guide/book-index
  - title: 框架调试协议 (计划中)
    details: 计划中的调试协议和配套控制台，提供强大的开发和调试工具。
    note: 重点主线任务，尚未动工
    icon: 🐛
    link: /guide/book-index
---
