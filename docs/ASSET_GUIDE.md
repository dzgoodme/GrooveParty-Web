# 素材替换指南

- `public/assets/hero/hero-stage.jpg`：首屏舞台背景与悬浮人物分层来源。
- `public/assets/hero/video-poster.jpg`：视频封面。
- `public/media/grooveparty-preview.mp4`：宣传视频。
- `public/assets/gameplay/*`：游戏特色和截图画廊。
- `public/assets/fashion/*`：玩家造型展示。
- `public/assets/branding/groove-party-original.jpg`：原始 Groove Party 标志素材。

Hero 人物效果使用相同背景图叠加并通过 `clip-path` 截取主体，因此人物保持原始画风。替换 Hero 图后，需要在 `app/globals.css` 中重新调整 `.hero-character` 的 `clip-path`。
