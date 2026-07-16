# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.6] - 2026-07-13

### Changed
- 重构为 iconfont（字体图标）方案，替代内联SVG
- 使用 svgicons2svgfont + svg2ttf + wawoff2 生成字体文件
- Vue3 基础组件使用 `<i>` 标签 + CSS `::before` 伪元素
- UniApp 基础组件使用 `<text>` 标签 + CSS 类名
- 字体文件 vu-icons.woff2 约85KB（1821个图标）

### Fixed
- 修复 SVGO 路径数据损坏问题（使用原始SVG生成字体）
- 修复 UniApp 在微信小程序中图标不显示的问题
- 修复 ttf2woff2 在 Windows 上的 E_CONVERT_ERROR

## [1.3.5] - 2026-07-10

### Changed
- 优化 SVG 图标生成流程
- 添加字体生成验证脚本

### Fixed
- 修复图标去重逻辑
- 修复字体 CSS 生成格式

## [1.3.4] - 2026-03-02

### Fixed
- 修复UniApp图标在微信小程序中不显示的问题
- 使用Base64编码的SVG data URI替代mask-image方案
- 使用`<image>`标签替代`<rich-text>`组件渲染SVG

## [1.0.0] - 2024-01-24

### Added
- 初始版本发布
- 支持 Vue3 和 UniApp 双框架
- 11个常用图标组件：
  - VuUser (用户)
  - VuSearch (搜索)
  - VuStar (星星)
  - VuHome (首页)
  - VuSettings (设置)
  - VuMessage (消息)
  - VuInfo (信息)
  - VuClose (关闭)
  - VuAdd (添加)
  - VuEdit (编辑)
  - VuFavorite (收藏)
- 支持自定义尺寸和颜色
- 完整的 TypeScript 类型声明
- 支持 Tree Shaking 按需引入
- 自动化构建流程
- SVG 优化功能

### Features
- 🎨 支持 Vue3 和 UniApp 双框架
- 📦 支持按需引入，Tree Shaking 优化
- 🎯 内联 SVG 渲染，性能优异
- 🌈 支持自定义尺寸和颜色
- 📝 完整的 TypeScript 类型声明
- 🚀 自动化构建流程

## [1.3.0] - 2026-01-25

### Updated
- 版本更新

## [Unreleased]

### Planned
- 更多图标组件
- 动画效果支持
- 更多主题样式
- 图标搜索功能
