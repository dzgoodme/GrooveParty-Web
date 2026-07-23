"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  { no: "01", title: "经典节奏操作", text: "跟随方向指令与节拍判定，重新感受 Perfect 与连续 Combo 的爽快反馈。", image: "./assets/gameplay/street-battle.jpg" },
  { no: "02", title: "多人同台斗舞", text: "与好友实时登台，比拼节奏、连击和舞台表现，让每一局都充满派对感。", image: "./assets/gameplay/city-stage.jpg" },
  { no: "03", title: "街舞动作表现", text: "街舞动作、舞步组合与节奏演出共同构成 GrooveParty 独特的舞台语言。", image: "./assets/gameplay/group-stage.jpg" },
  { no: "04", title: "复古街区舞台", text: "城市街区、俱乐部与巨型音响重新登场，唤醒熟悉的 2000 年代网游记忆。", image: "./assets/gameplay/club-floor.jpg" },
];

const modes = [
  ["↻", "节奏模式", "精准踩点，挑战更高连击。"],
  ["VS", "斗舞模式", "一对一实时比拼舞技。"],
  ["●●●", "团队模式", "组队协作，共同赢下舞台。"],
  ["★", "自由模式", "自由选歌，轻松享受舞蹈。"],
  ["♥", "情侣模式", "双人配合与社交互动。"],
  ["♫", "派对模式", "多人聚会，重现热闹舞厅。"],
];

const fashion = [
  ["街头酷感", "./assets/fashion/street-cool.jpg", "帽衫、棒球外套与经典街舞轮廓"],
  ["迷幻潮流", "./assets/fashion/dream-girl.jpg", "闪亮材质与个性配饰自由组合"],
  ["音乐态度", "./assets/fashion/music-boy.jpg", "用造型表达自己的节奏风格"],
  ["甜酷活力", "./assets/fashion/sweet-style.jpg", "青春色彩与舞台感兼具"],
];

const gallery = [
  "./assets/gameplay/city-duo.jpg",
  "./assets/gameplay/combo-stage.jpg",
  "./assets/gameplay/city-stage.jpg",
  "./assets/gameplay/group-stage.jpg",
  "./assets/gameplay/dance-floor.jpg",
  "./assets/gameplay/night-stage.jpg",
  "./assets/gameplay/club-floor.jpg",
  "./assets/gameplay/street-battle.jpg",
];

function Header({ onReserve }: { onReserve: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [["特色", "#features"], ["玩法", "#modes"], ["装扮", "#fashion"], ["回忆", "#gallery"], ["怀旧服", "#news"]];
  return (
    <header className="site-header">
      <a className="nav-brand" href="#top" aria-label="回到首页">
        <span className="brand-cn">劲舞世界</span><span className="brand-en">GrooveParty</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="打开导航">☰</button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="nav-cta" onClick={onReserve}>立即预约</button>
      </nav>
    </header>
  );
}

function Hero({ onReserve }: { onReserve: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [combo, setCombo] = useState(18);
  const reduced = useReducedMotion();
  return (
    <section className="hero" id="top">
      <img className="hero-bg" src="./assets/hero/grooveparty-poster.png" alt="劲舞世界 Groove Party 主题海报" />
      <div className="hero-warm-filter" />
      <div className="hero-grid" />
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="eyebrow">CLASSIC STREET DANCE ONLINE</motion.div>
        <motion.h1 initial={{ opacity: 0, x: -38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, delay: .08 }}>
          <span>劲舞世界</span><strong>GrooveParty</strong>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="hero-copy">
          熟悉的音乐、熟悉的舞步、熟悉的伙伴。<br />经典街舞网游怀旧服，带你回到最热烈的青春舞台。
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
          <button className="button button-primary" onClick={onReserve}>立即预约</button>
          <a className="button button-secondary" href="#video">观看宣传视频</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-character"
        onHoverStart={() => { setHovered(true); setCombo(v => v + 1); }}
        onHoverEnd={() => setHovered(false)}
        whileHover={reduced ? undefined : { y: [0, -7, 0, -3, 0], rotate: [0, -0.8, 0.8, 0], scale: [1, 1.01, 1.018, 1] }}
        transition={{ duration: .88, repeat: Infinity, ease: "easeInOut" }}
        aria-label="鼠标悬浮人物可触发轻微舞步效果"
      >
        <img src="./assets/hero/hero-stage.jpg" alt="跳舞中的游戏人物" />
        <AnimatePresence>{hovered && <motion.span className="perfect-pop" initial={{ opacity: 0, scale: .5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} key="perfect">PERFECT!</motion.span>}</AnimatePresence>
        <span className={hovered ? "dance-ring ring-active" : "dance-ring"} />
      </motion.div>

      <div className="rhythm-row" aria-hidden="true">{["↑", "↓", "←", "→", "○"].map((x, i) => <motion.span key={i} animate={reduced ? undefined : { y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: .8, delay: i * .09 }}>{x}</motion.span>)}</div>
      <a className="scroll-hint" href="#video">向下探索 <b>↓</b></a>
    </section>
  );
}

function VideoShowcase() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { await v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <section className="section video-section" id="video">
      <div className="section-heading"><span>FEATURE VIDEO</span><h2>把舞台重新点亮</h2><p>已经内置一段由你提供的游戏截图制作的本地预览视频，可随时替换为正式 PV。</p></div>
      <motion.div className="video-shell" whileHover={{ rotateX: 1.2, rotateY: -1.6, scale: 1.008 }} transition={{ type: "spring", stiffness: 180 }}>
        <video ref={ref} src="./media/grooveparty-preview-web.mp4" poster="./assets/hero/video-poster.jpg" playsInline controls onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
        {!playing && <button className="play-button" onClick={toggle} aria-label="播放宣传视频"><span>▶</span><small>PLAY VIDEO</small></button>}
        <div className="video-frame-glow" />
      </motion.div>
    </section>
  );
}

function FeatureSection() {
  return <section className="section" id="features"><div className="section-heading"><span>GAME FEATURES</span><h2>熟悉的操作，重新登台</h2></div><div className="feature-grid">{features.map((f, i) => <motion.article key={f.title} className="feature-card reveal-card" whileHover={{ y: -10 }}><div className="feature-image"><img src={f.image} alt={f.title} /><b>{f.no}</b></div><h3>{f.title}</h3><p>{f.text}</p><span className="card-arrow">↗</span></motion.article>)}</div></section>;
}

function ModeSection() {
  return <section className="section mode-section" id="modes"><div className="section-heading"><span>CLASSIC MODES</span><h2>选择你的舞台玩法</h2></div><div className="mode-grid">{modes.map(([icon, title, desc], i) => <motion.article className="mode-card reveal-card" key={title} whileHover={{ scale: 1.035, rotate: i % 2 ? .5 : -.5 }}><i>{icon}</i><div><h3>{title}</h3><p>{desc}</p></div></motion.article>)}</div></section>;
}

function FashionSection() {
  return <section className="section fashion-section" id="fashion"><div className="section-heading"><span>PLAYER FASHION</span><h2>没有固定主角，风格由玩家定义</h2><p>这里展示的是可塑造的玩家造型方向，而不是剧情角色。</p></div><div className="fashion-track">{fashion.map(([title, image, text]) => <motion.article className="fashion-card reveal-card" key={title} whileHover={{ y: -12 }}><img src={image} alt={title} /><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}</div></section>;
}

function GallerySection() {
  const [active, setActive] = useState<string | null>(null);
  const [galleryOffset, setGalleryOffset] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setGalleryOffset(offset => (offset + 1) % gallery.length), 4800);
    return () => window.clearInterval(timer);
  }, []);
  const rotatingGallery = gallery.map((_, slot) => {
    const index = (slot + galleryOffset) % gallery.length;
    return { src: gallery[index], index };
  });
  return <section className="section gallery-section" id="gallery"><div className="section-heading"><span>STAGE MEMORIES</span><h2>舞台回忆</h2><p>经典街区、多人斗舞、俱乐部舞台和节奏判定画面。</p></div><div className="gallery-grid">{rotatingGallery.map(({ src, index }, slot) => <motion.button className="gallery-item reveal-card" key={slot} whileHover={{ scale: 1.025 }} onClick={() => setActive(src)}><AnimatePresence initial={false}><motion.img key={src} src={src} alt={`劲舞世界经典游戏截图 ${index + 1}`} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .985 }} transition={{ duration: 1.15, ease: "easeInOut" }} /></AnimatePresence><span>查看大图</span></motion.button>)}</div><AnimatePresence>{active && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}><motion.img src={active} alt="游戏截图大图" initial={{ scale: .88 }} animate={{ scale: 1 }} /><button aria-label="关闭大图">×</button></motion.div>}</AnimatePresence></section>;
}

function NewsSection({ onReserve }: { onReserve: () => void }) {
  const items = [
    ["开服计划", "预约与测试时间将在准备完成后公布。", "01"],
    ["版本还原", "优先还原经典舞台、节奏体验、服饰与熟悉的 BGM 氛围。", "02"],
    ["活动回归", "签到、斗舞挑战、社区赛事与怀旧奖励逐步开放。", "03"],
    ["玩家社区", "寻找老友、分享截图与参与版本共创。", "04"],
  ];
  return <section className="section news-section" id="news"><div className="section-heading light"><span>NOSTALGIA SERVER</span><h2>怀旧服情报</h2></div><div className="news-grid">{items.map(([title, text, no]) => <article key={title} className="news-card reveal-card"><b>{no}</b><h3>{title}</h3><p>{text}</p><button onClick={title === "开服计划" ? onReserve : undefined}>{title === "开服计划" ? "立即预约" : "了解更多"} <span>→</span></button></article>)}</div></section>;
}

function ReservationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [contact, setContact] = useState(""); const [message, setMessage] = useState(""); const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => { e.preventDefault(); setBusy(true); setMessage(""); await new Promise(resolve => window.setTimeout(resolve, 450)); setMessage("预约信息已接收，正式开放后将与您联系。"); setContact(""); setBusy(false); };
  return <AnimatePresence>{open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.div className="reservation-modal" initial={{ y: 30, scale: .94 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} onMouseDown={e => e.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><span>RESERVATION</span><h2>预约怀旧服</h2><p>填写邮箱、手机号或其他联系方式。当前接口为演示接口，尚未连接持久化数据库。</p><form onSubmit={submit}><label>联系方式<input value={contact} onChange={e => setContact(e.target.value)} placeholder="example@email.com" required minLength={5} /></label><button className="button button-primary" disabled={busy}>{busy ? "提交中…" : "提交预约"}</button></form>{message && <div className="form-message">{message}</div>}</motion.div></motion.div>}</AnimatePresence>;
}

function Footer() {
  return <footer className="footer"><div className="footer-brand"><img src="./assets/branding/groove-party-original.jpg" alt="Groove Party 原版标志" /><div><h2>让我们再次开跳！</h2><p>青春不散场，舞台永不落幕。</p></div></div><div className="footer-links"><a href="#top">返回首页</a><a href="#video">宣传视频</a><a href="#gallery">游戏截图</a><a href="#news">怀旧服情报</a></div><small>本页面为怀旧服概念开发项目。游戏素材版权归相应权利人所有，请在正式运营前完成授权与合规审核。</small></footer>;
}

export default function HomePage() {
  const [reserveOpen, setReserveOpen] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: .7, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    });
    return () => ctx.revert();
  }, []);
  return <><Header onReserve={() => setReserveOpen(true)} /><main><Hero onReserve={() => setReserveOpen(true)} /><VideoShowcase /><FeatureSection /><ModeSection /><FashionSection /><GallerySection /><NewsSection onReserve={() => setReserveOpen(true)} /></main><Footer /><ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} /></>;
}
