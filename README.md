# 劲舞世界 GrooveParty 怀旧服官网

这是一个完整的 **Next.js App Router** 官网项目，使用用户提供的《劲舞世界 / GrooveParty》原始素材制作。

## 已实现

- 暖色街舞风 Hero 首屏
- 使用同一原始截图分层模拟人物悬浮舞步，不改变人物画风
- `PERFECT!`、Combo、节奏箭头与脚下光圈反馈
- 本地 MP4 宣传预览视频（由原始截图生成，可直接替换）
- 游戏特色、经典玩法、玩家造型、截图灯箱
- 怀旧服预约弹窗及 Next.js Route Handler 演示接口
- GSAP ScrollTrigger 滚动入场与 Hero 视差
- 桌面与移动端响应式布局

## 运行

```bash
npm install
npm run dev
```

打开：`http://localhost:3000`

生产构建：

```bash
npm run build
npm start
```

## 替换宣传视频

将正式视频放到：

`public/media/grooveparty-preview.mp4`

保持文件名不变即可，也可以修改 `components/HomePage.tsx` 内的视频路径。

## 后端预留

- `POST /api/reservation`：预约演示接口，目前只校验并返回结果，未写入数据库。
- `GET /api/news`：公告演示接口。

正式上线时建议将预约接口接入 MySQL/PostgreSQL，并增加验证码、频率限制、隐私声明与管理后台。

## 素材说明

项目使用了用户提供的游戏截图和宣传壁纸。正式公开运营前，请确认游戏名称、Logo、图片、音乐和视频等素材的授权及当地合规要求。
