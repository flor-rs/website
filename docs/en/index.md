---
pageType: home

hero:
  name: Flor
  text: A Rust GUI Framework That Wants Everything, More, and Even More
  tagline: Solving Rust lifetime pain points, redefining GUI development experience
  actions:
    - theme: brand
      text: Quick Start
      link: guide/book-index
    - theme: alt
      text: GitHub
      link: https://github.com/flor-rs/flor
features:
  - title: Ultimate Performance
    details: High-performance rendering engine, low compiled size, retained mode design based on immediate mode, naturally supports high-performance animations.
    icon: ⚡
    link: /guide/book-index
  - title: No Forced Context Binding
    details: Signal system supports cross-thread, implements Copy trait, can be moved anywhere, assigned anywhere, without performance issues from waiting for UI thread like in C#.
    icon: 🔗
    link: /guide/use/signal
  - title: Declarative DSL
    details: Declarative UI DSL, atomic class style parsing support, terminal application experience is simple, complexity absorbed by framework/widget authors.
    icon: 🎨
    link: /guide/use/framework-dsl
  - title: Multi-Window Support
    details: Supports multi-window, can create windows in any thread, any location. Each window can independently set refresh mode.
    icon: 🖥️
    link: /guide/use/window
  - title: High API Consistency
    details: Unified builder pattern, consistent event handling, clear widget lifecycle, easy to learn and use.
    icon: 📚
    link: /guide/startup
  - title: AI-Friendly Design
    details: DSL design similar to React's functional UI expression, allowing AI to quickly understand and generate interface code.
    icon: 🤖
    link: /guide/ai
---