import { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Trophy, MapPin, Send, Cpu, Bot, Brain, Smartphone, Globe, Folder, Award, Copy } from "lucide-react";
import { AnimatePresence, motion, LazyMotion, domAnimation, MotionConfig, useScroll, useSpring } from "framer-motion";

const PROFILE = {
  name: "Skander Hakouna ",
  title: "Final-Year Computer Engineering Student At ENICARTHAGE — Web & Mobile • Robotics/Embedded • AI/DS",
  about:
    "Full-stack web & mobile developer who also builds reliable embedded systems and practical AI features. 50+ robotics competitions with multiple wins.",
  location: "Ariana, Tunisia",
  email: "skander.hakouna@enicar.ucar.tn",
  phone: "+216-94007119",
  socials: {
    github: "https://github.com/SkanderTN",
    linkedin: "https://www.linkedin.com/in/skander-hakouna",
    youtube: "https://www.youtube.com/@your-channel",
  },
  photo: asset("Profile.jpeg"),
  metrics: [{ label: "All-terrain Robotics Competition wins", value: "4×" }],
};

// placeholder generator removed (unused)

// Helper to resolve static assets placed under src/SCREENS
function asset(filename: string) {
  return new URL(`./SCREENS/${filename}`, import.meta.url).href;
}

// Helper for PDFs placed under src/pdf
function pdfAsset(filename: string) {
  return new URL(`./pdf/${filename}`, import.meta.url).href;
}

const PROJECTS = [
  // 1 EcoPartage
  {
    category: "Web",
    title: "EcoPartage — Community Resource Sharing",
    summary:
      "Community platform for sharing items with AI-assisted image tagging and recommendation matching. Backend APIs cover listings, auth and scheduling.",
    stack: ["React", "Node", "Docker", "FastAPI (AI)"],
    video: "",
  repo: "https://github.com/SkanderTN/EcoPartage_Front",
    rapport: pdfAsset("Ecopartage (7).pdf"),
    demo: "",
    images: [asset("EcoPartage1.jpeg"), asset("EcoPartage2.jpeg"), asset("EcoPartage3.png"), asset("EcoPartage4.png"), asset("EcoPartage5.png"), asset("EcoPartage6.png")],
  },
  // 2 All-Terrain Rover
  {
    category: "Robotics",
    title: "All-Terrain Rover — Multi-controller Teleop + Smoothing",
    summary:
      "Implemented BLE/HID for PS3/PS4/Nintendo controllers with trajectory smoothing; measured command latency and jerk reduction.",
    stack: ["ESP32", "BLE/HID", "C/C++"],
    video: asset("AllTerrainVideo1.mp4"),
  repo: "https://github.com/SkanderTN/AllTerrainRover" ,
    demo: "",
    images: [
      asset("AllTerrain1.jpg"),
      asset("AllTerrain2.jpg"),
      asset("AllTerrain3.jpg"),
      asset("AllTerrain4.jpg"),
      asset("AllTerrain5.jpg"),
      asset("AllTerrain6.jpg"),
    ],
  },
  // 3 Advanced Line Follower
  {
    category: "Robotics",
    title: "Advanced Line-Following Robot (ESP32 + PID)",
    summary: "Designed control stack with PID + anti-windup, BLE telemetry, and lap-time benchmarking.",
    stack: ["ESP32", "C/C++", "PID"],
    video: asset("LfrVideo.mp4"),
    vertical: true,
  repo: "https://github.com/SkanderTN/LineFollowerRobot",
    demo: "",
    images: [asset("LFR1.jpg"), asset("LFR2.jpg"), asset("LFR3.jpg")],
  },
  // 4 Sales Forecasting
  {
    category: "AI-DS",
    title: "Sales/Demand Forecasting E2E",
    summary: "Feature engineering + model comparison (XGBoost vs baseline), REST inference + mini dashboard.",
    stack: ["Python", "pandas", "scikit-learn", "XGBoost"],
    video: "",
  repo: "https://github.com/SkanderTN/E2E_Rossmann_Sales_Forecasting_Project",
    demo: "",
    images: [asset("Sales1.png"), asset("Sales2.png"), asset("Sales3.png")],
  },
  // 5 ClubFLOW
  {
    category: "Web",
    title: "ClubFLOW — Club Management Platform",
    summary:
      "Responsive full-stack platform to manage university clubs: auth, member admin, events, and resource reservations.",
    stack: ["React", "Spring Boot", "MySQL", "Redux"],
    video: "",
    repo: "https://github.com/SkanderTN/Club_Flow_FINAL",
    demo: "",
    images: [asset("ClubFlow1.webp"), asset("ClubFlow2.webp"), asset("ClubFlow3.webp"), asset("ClubFlow4.webp"), asset("ClubFlow5.webp"), asset("ClubFlow6.webp")],
  },
  // 6 ShowTime (add rapport)
  {
    category: "Mobile",
    title: "ShowTime — Mobile Event Reservation",
    summary:
      "Android app + Spring Boot + MySQL for discovering, filtering, and reserving live events with confirmations.",
    stack: ["Android", "Java", "Spring Boot", "MySQL"],
    video: "",
    repo: "https://github.com/SkanderTN/showtime",
    rapport: pdfAsset("Rapport de Projet Développement Mobile_ Skander Hakouna.pdf"),
    demo: "",
    images: [asset("ShowTime1.webp"), asset("ShowTime2.webp"), asset("ShowTime3.webp"), asset("ShowTime4.webp"), asset("ShowTime5.webp"), asset("ShowTime6.webp")],
  },
  // 7 Interactive Quiz
  {
    category: "Web",
    title: "Interactive Web Quiz Game",
    summary: "Dynamic quiz app with leaderboards, scoring, and secure auth; Angular frontend and Node/Express backend.",
    stack: ["Angular", "Node", "Express", "MongoDB"],
    video: "",
    repo: "https://github.com/SkanderTN/Quiz",
    demo: "",
    images: [asset("Quiz2.png"), asset("Quiz1.png"), asset("WebQuiz2.webp"), asset("WebQuiz4.png"), asset("WebQuiz3.webp"), asset("Quiz3.png")],
  },
  // 8 Maze Solver Robot (new)
  {
    category: "Robotics",
    title: "Maze Solver Robot — Ultrasonic Scanning & Path Logic",
    summary: "Autonomous maze exploration with servo-mounted ultrasonic sensor sweeping for obstacle mapping and decision logic.",
    stack: ["Arduino", "Ultrasonic", "Servo", "C/C++"],
    video: "",
  repo: "https://github.com/SkanderTN/MazeSolverRobot",
    demo: "",
    images: [asset("MazeRobot1.jpg"), asset("MazeRobot2.jpg")],
  },
];

const STACKS = [
  // Frontend / UI
  "React", "Next.js", "Angular", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion",
  // Backend / Platform
  "Node", "Express", "NestJS", "Spring Boot", "REST APIs", "GraphQL",
  // Mobile
  "Android (Java)", "Flutter",
  // Data / AI
  "Python", "pandas", "scikit-learn", "Data Pipelines",
  // DevOps / Tooling
  "Docker", "GitHub Actions", "CI/CD",
  // Databases
  "PostgreSQL", "MySQL", "MongoDB",
  // Embedded / Robotics
  "Arduino", "ESP32", "C/C++", "PID Control", "PWM Control", "Sensors", "BLE/HID",
  // Misc
  "OpenCV", "FastAPI"
];

const TABS = ["All", "Robotics", "AI-DS", "Web", "Mobile"] as const;

function clsx(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

export default function Portfolio() {
  const [tab, setTab] = useState<typeof TABS[number]>("All");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbProjIdx, setLbProjIdx] = useState<number>(0);
  const [lbImgIdx, setLbImgIdx] = useState<number>(0);
  const lbRef = useRef<HTMLDivElement | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = PROFILE.email;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setEmailCopied(true);
        window.setTimeout(() => setEmailCopied(false), 2000);
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const itemFade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const staggerOuter = (stagger = 0.06, delayChildren = 0) => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  });
  const metricItem = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };
  const projectCard = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const highlightCard = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const thumbItem = (i: number) => ({
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: i * 0.05, duration: 0.35 } },
  });

  const filtered = useMemo(
    () => (tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === tab)),
    [tab]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!lbOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setLbOpen(false);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lbOpen, lbProjIdx, lbImgIdx]);

  useEffect(() => {
    if (lbOpen && lbRef.current) {
      lbRef.current.focus();
    }
  }, [lbOpen]);

  const openLightbox = (projIndex: number, imgIndex: number) => {
    setLbProjIdx(projIndex);
    setLbImgIdx(imgIndex);
    setLbOpen(true);
  };

  const navigate = (delta: number) => {
    const images = filtered[lbProjIdx]?.images ?? [];
    if (!images.length) return;
    const next = (lbImgIdx + delta + images.length) % images.length;
    setLbImgIdx(next);
  };

  // const projectsCount = PROJECTS.length;

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Scroll progress bar */}
          <motion.div aria-hidden className="fixed top-0 left-0 h-1 w-full bg-brand-500 origin-left z-40" style={{ scaleX: progress }} />
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-tr from-cyan-400 via-brand-500 to-fuchsia-500 shadow-glow" aria-hidden />
            <div className="flex flex-col leading-tight">
              <span className="font-bold">{PROFILE.name}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
                <MapPin className="size-3" aria-hidden />
                {PROFILE.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-ghost" href={PROFILE.socials.github} target="_blank" rel="noreferrer noopener" aria-label="Open GitHub">
              <Github className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>

            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-ghost" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer noopener" aria-label="Open LinkedIn">
              <Linkedin className="size-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
          </div>
        </nav>
      </header>

      <section className="py-10 sm:py-14">
        {/* Adjust to 3 columns on md+: left span 2, right span 1 for narrower stacks card */}
        <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerOuter(0.05)} initial="hidden" animate="show">
          <motion.div className="flex flex-col gap-6 md:col-span-2" variants={fadeInUp}>
            <motion.div className="flex flex-col md:flex-row items-start md:items-center gap-6" variants={staggerOuter(0.06)}>
              <motion.div className="relative" variants={itemFade}>
                <div className="absolute inset-0 -z-10">
                  <motion.div className="portrait-glow" aria-hidden animate={{ rotate: 360 }} transition={{ duration: 12, ease: "linear", repeat: Infinity }} />
                </div>
                <motion.div whileHover={{ scale: 1.02, rotate: 0.2 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-100 dark:bg-slate-900">
                  <img
                    src={PROFILE.photo}
                    alt="Portrait of Skander Hakouna"
                    className="block h-40 w-40 object-cover md:h-44 md:w-32"
                    width={320}
                    height={320}
                    loading="eager"
                  />
                </motion.div>
                <motion.span className="absolute -bottom-2 left-2 text-[10px] md:text-xs rounded-full bg-emerald-500 text-white px-2 py-1 shadow-md" animate={{ y: [0, -2, 0, 2, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  PFE Ready
                </motion.span>
              </motion.div>

              <motion.div className="flex-1" variants={staggerOuter(0.06)}>
                <motion.h1 variants={itemFade} className="text-2xl sm:text-3xl font-bold tracking-tight">{PROFILE.title}</motion.h1>
                <motion.p variants={itemFade} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-prose">
                  {PROFILE.about}
                </motion.p>
                <motion.div variants={staggerOuter(0.06)} className="mt-4 flex flex-wrap items-center gap-2">
                  <motion.a
                    variants={itemFade}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary"
                    aria-label="Open LinkedIn profile"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    variants={itemFade}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${PROFILE.email}`}
                    className="btn-ghost"
                    aria-label="Send email"
                  >
                    <Mail className="size-4" />
                    Contact
                  </motion.a>
                  <div className="flex items-center gap-2 ml-1">
                    <span className="text-xs text-slate-700 dark:text-slate-300 select-all">{PROFILE.email}</span>
                    <motion.button
                      type="button"
                      onClick={copyEmail}
                      className="btn-ghost p-1"
                      aria-label="Copy email address"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Copy className="size-4" />
                    </motion.button>
                    {emailCopied && <span className="text-emerald-500 text-xs">Copied</span>}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3" variants={staggerOuter(0.05, 0.08)} initial="hidden" animate="show">
                <motion.div
                  variants={metricItem}
                  className="glass rounded-lg px-4 py-3"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <div className="text-xs text-slate-500 dark:text-slate-400">Projects realized</div>
                  <div className="mt-1 flex items-center gap-2 text-xl font-semibold">
                    <motion.div whileHover={{ rotate: 12 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                      <Folder className="size-5 text-cyan-500" aria-hidden />
                    </motion.div>
                    10+
                  </div>
                </motion.div>

                <motion.div
                  variants={metricItem}
                  className="glass rounded-lg px-4 py-3"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <div className="text-xs text-slate-500 dark:text-slate-400">{PROFILE.metrics[0].label}</div>
                  <div className="mt-1 flex items-center gap-2 text-xl font-semibold">
                    <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                      <Trophy className="size-5 text-amber-500" aria-hidden />
                    </motion.div>
                    {PROFILE.metrics[0].value}
                  </div>
                </motion.div>

                <motion.div
                  variants={metricItem}
                  className="hidden md:block glass rounded-lg px-4 py-3"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <div className="text-xs text-slate-500 dark:text-slate-400">Hackathons &amp; Competitions</div>
                  <div className="mt-1 flex items-center gap-2 text-xl font-semibold">
                    <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                      <Award className="size-5 text-fuchsia-500" aria-hidden />
                    </motion.div>
                    <span>50+</span>
                  </div>
                </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="glass rounded-xl p-5 md:col-span-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Stacks I ship with</h3>
              <Cpu className="size-5 text-brand-500" aria-hidden />
            </div>
            {/* Chips container with stagger */}
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
              aria-label="Technology chips list"
            >
              {STACKS.map((s, i) => (
                <motion.span
                  key={s}
                  role="listitem"
                  aria-label={s}
                  className="chip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
                  variants={{ hidden: { opacity: 0, y: 4 }, show: { opacity: 1, y: 0 } }}
                  animate={{ y: [0, -2, 0, 2, 0] }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 3, delay: i * 0.03, repeat: Infinity, repeatType: "mirror" }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-6 sm:py-8">
        <motion.div className="grid gap-4 sm:gap-6 md:grid-cols-3" variants={staggerOuter(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={highlightCard} whileHover={{ y: -2, scale: 1.01 }} transition={{ type: "spring", stiffness: 140, damping: 18 }} className="glass rounded-xl p-5">
            <div className="flex items-center gap-2">
              <Globe className="size-5 text-brand-500" aria-hidden />
              <h3 className="font-semibold">Web & Mobile</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Human‑centered digital products: adaptive interfaces, clear information flow, secure user journeys, and dependable delivery from concept to launch across web and mobile form factors.
            </p>
          </motion.div>
          <motion.div variants={highlightCard} whileHover={{ y: -2, scale: 1.01 }} transition={{ type: "spring", stiffness: 140, damping: 18 }} className="glass rounded-xl p-5">
            <div className="flex items-center gap-2">
              <Bot className="size-5 text-emerald-500" aria-hidden />
              <h3 className="font-semibold">Robotics & Embedded</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Autonomous systems focus: real‑time sensing, feedback regulation, reliable actuation, communication links, and robustness under physical and timing constraints.
            </p>
          </motion.div>
          <motion.div variants={highlightCard} whileHover={{ y: -2, scale: 1.01 }} transition={{ type: "spring", stiffness: 140, damping: 18 }} className="glass rounded-xl p-5">
            <div className="flex items-center gap-2">
              <Brain className="size-5 text-fuchsia-500" aria-hidden />
              <h3 className="font-semibold">AI & Data</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Data value chain: collection, refinement, analytical modeling, evaluation, and integrating insight or intelligent behavior back into products responsibly.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-10">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="ml-auto" role="tablist" aria-label="Project categories">
            <div className="inline-flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/60 p-1 rounded-full" aria-hidden>
              {TABS.map((t) => (
                <div key={t} className="relative">
                  <motion.button
                    role="tab"
                    aria-selected={tab === t}
                    aria-controls={`panel-${t}`}
                    className={clsx(
                      "relative z-10 px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand-500",
                      tab === t ? "text-white" : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    )}
                    onClick={() => setTab(t)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t}
                  </motion.button>

                  {tab === t && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 m-0 rounded-full bg-brand-600 shadow-sm"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3" variants={staggerOuter(0.05)} initial="hidden" animate="show">
          {filtered.map((p, projIndex) => (
            <motion.article variants={projectCard} key={p.title} id={`panel-${p.category}`} className="group glass rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 relative">
              <motion.span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%)" }} />
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip bg-brand-600/10 text-brand-700 dark:text-brand-300 border-brand-600/30">{p.category}</span>
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
              </div>

              {p.video ? (
                <div className="p-4 pt-0">
                  {p.vertical ? (
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="w-full bg-black rounded-md overflow-hidden aspect-[9/18] md:aspect-[9/18]">
                        <video muted playsInline className="h-full w-full object-cover" controls src={p.video} poster={p.images?.[0]} />
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:gap-3">
                        {p.images?.map((src, i) => (
                          <motion.button
                            key={src}
                            type="button"
                            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 focus-visible:ring-2 focus-visible:ring-brand-500"
                            onClick={() => openLightbox(projIndex, i)}
                            aria-label={`Open image ${i + 1} of ${p.title}`}
                            variants={thumbItem(i)}
                            initial="hidden"
                            animate="show"
                            whileHover={{ scale: 1.02 }}
                          >
                            <img
                              src={src}
                              alt={`${p.title} screenshot ${i + 1}`}
                              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                              loading="lazy"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
                      <video muted playsInline className="h-full w-full object-cover" controls src={p.video} poster={p.images?.[0]} />
                    </div>
                  )}
                </div>
              ) : null}
              {/* if there's a video, show thumbnails below it (skip for vertical layout which shows images beside the video) */}
              {p.video && p.images && p.images.length > 0 && !p.vertical && (
                <div className="p-4 pt-3">
                  <div className="grid grid-cols-2 gap-2">
                    {p.images.slice(0, 4).map((src, i) => {
                      const more = p.images.length - 4;
                      const isLast = i === 3 && p.images.length > 4;
                      return (
                        <motion.button
                          key={src}
                          type="button"
                          className="group relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 focus-visible:ring-2 focus-visible:ring-brand-500"
                          onClick={() => openLightbox(projIndex, i)}
                          aria-label={`Open image ${i + 1} of ${p.title}`}
                          variants={thumbItem(i)}
                          initial="hidden"
                          animate="show"
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={src}
                            alt={`${p.title} screenshot ${i + 1}`}
                            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                            loading="lazy"
                          />
                          {isLast && (
                            <div className="absolute inset-0 bg-slate-950/50 text-white flex items-center justify-center text-sm font-semibold">
                              +{more} more
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}
              {!p.video && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {p.images.map((src, i) => (
                      <motion.button
                        key={src}
                        type="button"
                        className="group relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 focus-visible:ring-2 focus-visible:ring-brand-500"
                        onClick={() => openLightbox(projIndex, i)}
                        aria-label={`Open image ${i + 1} of ${p.title}`}
                        variants={thumbItem(i)}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={src}
                          alt={`${p.title} screenshot ${i + 1}`}
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                          loading="lazy"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 flex items-center gap-2">
                {p.category !== "Robotics" && (
                  <motion.a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ghost"
                    aria-label={`Open code repository for ${p.title}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Code2 className="size-4" />
                    Code
                    <ExternalLink className="size-3" aria-hidden />
                  </motion.a>
                )}
                {p.rapport && (
                  <motion.a
                    href={p.rapport}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ghost"
                    aria-label={`Open rapport for ${p.title}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Rapport
                    <ExternalLink className="size-3" aria-hidden />
                  </motion.a>
                )}
                {p.demo && p.demo.trim().length > 0 && (
                  <motion.a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary"
                    aria-label={`Open live demo for ${p.title}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="size-4" />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="py-10">
        <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerOuter(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <motion.div variants={highlightCard} className="glass rounded-xl p-6">
            <div className="flex items-center gap-2">
              <Send className="size-5 text-emerald-500" aria-hidden />
              <h3 className="font-semibold">Contact</h3>
            </div>
            <div className="mt-4 space-y-3">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Email"
              >
                <Mail className="size-5 text-emerald-500" />
                <div className="text-sm">
                  <div className="font-semibold">Email</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{PROFILE.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5 text-cyan-500" />
                <div className="text-sm">
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Connect with me</div>
                </div>
              </motion.a>

              <motion.a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 p-3 rounded-md bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="GitHub"
              >
                <Github className="size-5 text-amber-500" />
                <div className="text-sm">
                  <div className="font-semibold">GitHub</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Explore projects & code</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={highlightCard} className="glass rounded-xl p-6">
            <div className="flex items-center gap-2">
              <Smartphone className="size-5 text-cyan-500" aria-hidden />
              <h3 className="font-semibold">Interests & PFE focus</h3>
            </div>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <div className="font-semibold text-slate-700 dark:text-slate-200">Robotics & Embedded Systems</div>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Adaptive control, real‑time sensing, reliable actuation and telemetry for autonomous behavior.</p>
              </div>
              <div>
                <div className="font-semibold text-slate-700 dark:text-slate-200">Web & Mobile Platforms</div>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Product‑oriented interfaces, clear information architecture, secure user flows, and maintainable delivery pipelines.</p>
              </div>
              <div>
                <div className="font-semibold text-slate-700 dark:text-slate-200">Data & Intelligent Systems</div>
                <p className="mt-1 text-slate-600 dark:text-slate-300">Turning raw data into insight: structured preparation, evaluation, and pragmatic augmentation of user experiences.</p>
              </div>
              <div>
          
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </footer>

      <AnimatePresence>
        {lbOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-label="Image preview"
          >
            <div
              ref={lbRef}
              tabIndex={-1}
              className="absolute inset-0 flex items-center justify-center p-4"
              onClick={() => setLbOpen(false)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
              >
                <div className="absolute -top-10 left-0 text-sm text-white/80">
                  {(() => {
                    const total = filtered[lbProjIdx]?.images.length ?? 0;
                    return `${lbImgIdx + 1} / ${total}`;
                  })()}
                </div>
                <motion.img
                  key={`${lbProjIdx}-${lbImgIdx}`}
                  src={filtered[lbProjIdx]?.images[lbImgIdx]}
                  alt={`${filtered[lbProjIdx]?.title} large image ${lbImgIdx + 1}`}
                  className="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                />
                <div className="mt-3 flex items-center justify-between">
                  <motion.button
                    type="button"
                    className="btn-ghost text-white/90 border-white/30 hover:bg-white/10"
                    onClick={() => navigate(-1)}
                    aria-label="Previous image"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  >
                    ← Prev
                  </motion.button>
                  <motion.a
                    href={filtered[lbProjIdx]?.images[lbImgIdx]}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ghost text-white/90 border-white/30 hover:bg-white/10"
                    aria-label="Open original image in new tab"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  >
                    Open <ExternalLink className="size-4" />
                  </motion.a>
                  <motion.button
                    type="button"
                    className="btn-ghost text-white/90 border-white/30 hover:bg-white/10"
                    onClick={() => navigate(1)}
                    aria-label="Next image"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  >
                    Next →
                  </motion.button>
                </div>
                <motion.button
                  type="button"
                  className="absolute -top-10 right-0 btn-ghost text-white/90 border-white/30 hover:bg-white/10"
                  onClick={() => setLbOpen(false)}
                  aria-label="Close lightbox"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
