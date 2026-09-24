"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import {
  ArrowDownRight, ArrowRight, Bot, Check, ChevronDown, Code2, Layers3,
  Megaphone, Menu, MessageCircle, Palette, Play, Sparkles, X, Zap,
} from "lucide-react"

const pillars = [
  {
    id: "build", number: "01", label: "Build", title: "Technology that earns its keep.",
    copy: "Fast, memorable digital products and internal systems designed around how your business actually works.",
    tags: ["Web design", "Web development", "Conversational websites", "Shopify", "WordPress", "CMS", "Internal tools"],
    icon: Code2, color: "lime",
  },
  {
    id: "grow", number: "02", label: "Grow", title: "Attention, engineered into demand.",
    copy: "Creative and performance systems that move people from first glance to meaningful action.",
    tags: ["ChatGPT Ads", "Meta Ads", "Instagram Ads", "Campaign strategy", "Conversion systems", "Content engines"],
    icon: Megaphone, color: "violet",
  },
  {
    id: "create", number: "03", label: "Create", title: "A brand people can feel.",
    copy: "A complete visual and storytelling studio, from the first identity sketch to the hundredth campaign asset.",
    tags: ["Brand identity", "Graphic design", "Packaging", "Product design", "UGC", "AI UGC", "Video", "Books & reports"],
    icon: Palette, color: "orange",
  },
  {
    id: "operate", number: "04", label: "Operate", title: "Less busywork. More business.",
    copy: "AI agents, automations, and operating systems that remove repetitive work without removing human judgment.",
    tags: ["AI automation", "Custom GPTs", "WhatsApp agents", "Voice agents", "Accounting workflows", "SOP systems", "Operations"],
    icon: Layers3, color: "blue",
  },
]

const process = [
  ["01", "Find the leak", "We map the bottleneck, opportunity, audience, and the business outcome worth chasing."],
  ["02", "Design the system", "Strategy, story, experience, and technology become one connected plan."],
  ["03", "Ship in the real world", "We build, launch, test, measure, and improve. Slides never count as delivery."],
  ["04", "Compound the advantage", "The system gets smarter, faster, and harder for competitors to copy."],
]

const marquee = ["CONVERSATIONAL WEBSITES", "CHATGPT ADS", "AI AUTOMATION", "BRAND SYSTEMS", "VIDEO STORIES", "VOICE AGENTS", "SHOPIFY", "META ADS"]

const aiCards = [
  { title: "A website that talks back", copy: "Turn static pages into guided conversations with an on-brand AI host that answers, qualifies, and converts." },
  { title: "Agents that never miss a lead", copy: "WhatsApp, inbound, and outbound voice agents designed around your actual sales and service workflows." },
  { title: "Automation with a business case", copy: "Custom GPTs and connected workflows that reduce delays, errors, and repetitive operational work." },
]

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Lyfix Technologies home">
      <span className="wordmark-mark"><span>L</span></span>
      <span>LYFIX<small>TECHNOLOGIES</small></span>
    </a>
  )
}

function OrbitalCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let frame = 0, width = 0, height = 0, mx = 0, my = 0
    const dots = Array.from({ length: 96 }, (_, i) => ({
      a: (i / 96) * Math.PI * 2, r: 0.2 + ((i * 37) % 80) / 100,
      z: ((i * 17) % 100) / 100, s: 0.3 + ((i * 13) % 10) / 20,
    }))
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth; height = canvas.clientHeight
      canvas.width = width * dpr; canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const move = (e: PointerEvent) => {
      const box = canvas.getBoundingClientRect()
      mx = (e.clientX - box.left - box.width / 2) * 0.06
      my = (e.clientY - box.top - box.height / 2) * 0.06
    }
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2 + mx, cy = height / 2 + my
      const radius = Math.min(width, height) * 0.32
      const glow = ctx.createRadialGradient(cx - radius * 0.28, cy - radius * 0.3, 1, cx, cy, radius * 1.2)
      glow.addColorStop(0, "rgba(222,255,62,.95)")
      glow.addColorStop(0.22, "rgba(93,71,255,.78)")
      glow.addColorStop(0.62, "rgba(20,18,35,.3)")
      glow.addColorStop(1, "rgba(5,5,8,0)")
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = "rgba(255,255,255,.14)"; ctx.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        ctx.beginPath(); ctx.ellipse(cx, cy, radius * (0.6 + i * 0.15), radius * (0.18 + i * 0.025), time * 0.00008 + i, 0, Math.PI * 2); ctx.stroke()
      }
      dots.forEach((d) => {
        const a = d.a + time * 0.00008 * d.s
        const x = cx + Math.cos(a) * radius * d.r
        const y = cy + Math.sin(a) * radius * d.r * 0.34 + Math.sin(a * 2) * 8
        ctx.fillStyle = d.z > 0.7 ? "#ddff3e" : `rgba(255,255,255,${0.2 + d.z * 0.6})`
        ctx.beginPath(); ctx.arc(x, y, 0.7 + d.z * 2, 0, Math.PI * 2); ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    resize(); window.addEventListener("resize", resize); window.addEventListener("pointermove", move)
    frame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move) }
  }, [])
  return <canvas className="orbital-canvas" ref={ref} aria-hidden="true" />
}

function BriefBuilder() {
  const [active, setActive] = useState("Growth")
  const outcomes: Record<string, string> = {
    Growth: "a sharper acquisition system", Brand: "an identity impossible to confuse",
    Product: "a digital product people enjoy using", Operations: "an operating system that buys back time",
  }
  return (
    <div className="brief-builder" id="start">
      <div className="brief-top"><span className="eyebrow">START WITH THE OUTCOME</span><span className="live-dot">30-MIN DISCOVERY</span></div>
      <h3>What should work better next?</h3>
      <div className="brief-options" role="tablist" aria-label="Project goal">
        {Object.keys(outcomes).map((item) => <button key={item} onClick={() => setActive(item)} className={active === item ? "active" : ""}>{item}</button>)}
      </div>
      <div className="brief-result">
        <p>You need <strong>{outcomes[active]}</strong>.</p>
        <a href={`mailto:hello@lyfix.tech?subject=${encodeURIComponent(`${active} project with Lyfix`)}`}>Build my roadmap <ArrowRight size={18} /></a>
      </div>
    </div>
  )
}

function ChatDemo() {
  const [open, setOpen] = useState(false)
  const [answer, setAnswer] = useState("Tell me what you want to improve. I’ll point you to the right Lyfix capability.")
  const replies: Record<string, string> = {
    Leads: "Start with the Growth studio: offer design, landing experience, ChatGPT Ads, Meta Ads, and a clean follow-up system.",
    Brand: "The Create studio can shape identity, packaging, content, UGC, and video into one recognisable brand system.",
    Automation: "The Operate studio maps repetitive work, then builds focused AI agents and automations with human checkpoints.",
  }
  return (
    <div className={`chat-demo ${open ? "open" : ""}`}>
      {open && (
        <div className="chat-panel">
          <div className="chat-head"><span><Bot size={17} /> LYFIX / CONVERSATIONAL DEMO</span><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={17} /></button></div>
          <div className="chat-body"><span className="bot-avatar">L</span><p>{answer}</p></div>
          <div className="chat-prompts">{Object.keys(replies).map((item) => <button key={item} onClick={() => setAnswer(replies[item])}>{item}</button>)}</div>
          <a className="chat-cta" href="mailto:hello@lyfix.tech?subject=New%20project%20brief">Take this conversation human <ArrowRight size={16} /></a>
        </div>
      )}
      <button className="chat-trigger" onClick={() => setOpen(!open)} aria-label="Open conversational demo">{open ? <X /> : <MessageCircle />}<span>TRY THE SITE AGENT</span></button>
    </div>
  )
}

export default function Home() {
  const [menu, setMenu] = useState(false)
  const [activePillar, setActivePillar] = useState(0)
  const [sent, setSent] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useMemo(() => pillars[activePillar], [activePillar])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")), { threshold: 0.12 })
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect() }
  }, [])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `New Lyfix brief: ${data.get("company") || "Project inquiry"}`
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\nNeed: ${data.get("need")}`
    window.location.href = `mailto:hello@lyfix.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <main id="top">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Wordmark />
        <nav className={menu ? "open" : ""} aria-label="Primary navigation">
          <a href="#services" onClick={() => setMenu(false)}>Capabilities</a>
          <a href="#ai" onClick={() => setMenu(false)}>AI systems</a>
          <a href="#process" onClick={() => setMenu(false)}>Process</a>
          <a href="#about" onClick={() => setMenu(false)}>Why Lyfix</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <ArrowDownRight size={17} /></a>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="kicker"><span /> CREATIVE × TECHNOLOGY × OPERATIONS</p>
          <h1>We make businesses<br /><em>impossible</em> to ignore.<br /><span>And easier to run.</span></h1>
          <div className="hero-foot">
            <p>One independent team for the brand, product, growth, AI, and operating systems your business needs next.</p>
            <a className="circle-link" href="#services" aria-label="Explore capabilities"><ArrowDownRight /></a>
          </div>
        </div>
        <div className="hero-visual">
          <OrbitalCanvas />
          <div className="orbit-label one"><span>01</span> CREATE</div>
          <div className="orbit-label two"><span>02</span> BUILD</div>
          <div className="orbit-label three"><span>03</span> GROW</div>
          <div className="orbit-label four"><span>04</span> OPERATE</div>
          <div className="hero-stamp"><Sparkles size={15} /> BUILT FOR<br />THE NEXT MOVE</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>{[...marquee, ...marquee].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>

      <section className="statement section-shell reveal" id="about">
        <p className="section-index">[ WHAT WE ACTUALLY DO ]</p>
        <h2>Most agencies sell a slice.<br />We connect the <em>whole machine.</em></h2>
        <div className="statement-grid">
          <p>Brands break when strategy, design, technology, marketing, and operations are handled as unrelated projects.</p>
          <p>Lyfix brings them into one system, so your customer sees one clear story and your team runs one clearer business.</p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-head section-shell reveal">
          <div><p className="section-index">[ THE LYFIX STACK ]</p><h2>Four studios.<br />One unfair advantage.</h2></div>
          <p>Pick one sharp intervention or bring us the messy whole. We work from business outcome backward.</p>
        </div>
        <div className={`service-stage ${active.color}`}>
          <div className="service-tabs">
            {pillars.map((pillar, index) => (
              <button key={pillar.id} onMouseEnter={() => setActivePillar(index)} onClick={() => setActivePillar(index)} className={index === activePillar ? "active" : ""}>
                <span>{pillar.number}</span>{pillar.label}<ChevronDown size={18} />
              </button>
            ))}
          </div>
          <div className="service-detail section-shell" key={active.id}>
            <div className="service-symbol"><active.icon strokeWidth={1.1} /></div>
            <div className="service-copy"><p>{active.number} / {active.label.toUpperCase()}</p><h3>{active.title}</h3><span>{active.copy}</span></div>
            <div className="service-tags">{active.tags.map(tag => <span key={tag}>{tag} <ArrowDownRight size={14} /></span>)}</div>
          </div>
        </div>
      </section>

      <section className="ai-section section-shell" id="ai">
        <div className="ai-intro reveal">
          <p className="section-index">[ AI THAT DOES THE WORK ]</p>
          <h2>Not “AI-powered.”<br /><span>Outcome-powered.</span></h2>
          <p>We do not bolt a chatbot onto a broken process and call it transformation. We design useful agents around real customer and team behavior.</p>
        </div>
        <div className="ai-console reveal">
          <div className="console-bar"><span /><span /><span /><b>LYFIX AGENT OS / LIVE PROTOTYPE</b></div>
          <div className="console-grid">
            <div className="console-flow">
              <div className="node customer"><MessageCircle /> New enquiry</div><i />
              <div className="node agent"><Bot /> Qualify intent <span>AI</span></div><i />
              <div className="node route"><Zap /> Route + follow up</div>
            </div>
            <div className="console-metrics"><span><b>24/7</b> response</span><span><b>3</b> connected channels</span><span><b>1</b> human handoff</span></div>
          </div>
        </div>
        <div className="ai-cards">{aiCards.map((card, i) => <article key={card.title} className="reveal"><span>0{i + 1}</span><h3>{card.title}</h3><p>{card.copy}</p><a href="#contact">Explore the system <ArrowRight size={16} /></a></article>)}</div>
      </section>

      <section className="principle-band">
        <div className="section-shell"><span>STRATEGY WITHOUT DELIVERY IS THEATRE.</span><strong>WE SHIP.</strong><Play fill="currentColor" /></div>
      </section>

      <section className="process section-shell" id="process">
        <div className="process-title reveal"><p className="section-index">[ HOW WE MOVE ]</p><h2>Small team energy.<br />Serious system thinking.</h2></div>
        <div className="process-list">{process.map(([no, title, copy]) => <article key={no} className="reveal"><span>{no}</span><h3>{title}</h3><p>{copy}</p><ArrowDownRight /></article>)}</div>
      </section>

      <section className="fit section-shell reveal">
        <div className="fit-card dark"><p>WE’RE A STRONG FIT IF</p><h3>You want one accountable team, move fast, value original thinking, and care whether the work actually works.</h3><div><Check /> Founders <Check /> Growing teams <Check /> New ventures <Check /> Brands in transition</div></div>
        <div className="fit-card bright"><p>WE’RE PROBABLY NOT IF</p><h3>You need the cheapest vendor, want to copy a competitor, or measure progress by the number of meetings.</h3><ArrowDownRight /></div>
      </section>

      <section className="brief-section section-shell reveal"><BriefBuilder /></section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy reveal"><p className="section-index">[ YOUR MOVE ]</p><h2>Bring the ambition.<br /><em>We’ll build the system.</em></h2><p>Tell us where the business is stuck or where you want it to go. We will respond with the clearest next step, even if that step is not hiring us.</p><a href="mailto:hello@lyfix.tech">hello@lyfix.tech <ArrowDownRight /></a></div>
        <form onSubmit={submit} className="contact-form reveal">
          <label><span>Your name</span><input name="name" required placeholder="What should we call you?" /></label>
          <label><span>Work email</span><input name="email" required type="email" placeholder="you@company.com" /></label>
          <label><span>Company / idea</span><input name="company" placeholder="What are you building?" /></label>
          <label><span>What needs to change?</span><textarea name="need" required placeholder="The honest version, please." rows={3} /></label>
          <button type="submit">{sent ? "Opening your email…" : "Send the brief"}<ArrowRight /></button>
        </form>
      </section>

      <footer className="footer section-shell">
        <div className="footer-top"><Wordmark /><h2>Business, <em>fixed forward.</em></h2></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} LYFIX TECHNOLOGIES</span><div><a href="#services">CAPABILITIES</a><a href="#ai">AI</a><a href="#contact">CONTACT</a></div><span>JAIPUR, INDIA · WORKING EVERYWHERE</span></div>
      </footer>
      <ChatDemo />
    </main>
  )
}
