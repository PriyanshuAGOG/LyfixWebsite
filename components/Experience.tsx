"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { ArrowDown, ArrowUpRight, Asterisk, Menu, MoveRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const MetalScene = dynamic(() => import("./MetalScene"), { ssr: false })

const capabilities = [
  { n: "01", title: "Brand & Experience", lead: "Make the first impression impossible to forget.", items: "Strategy · Identity · Graphic systems · Packaging · Product & book design · UGC · AI UGC · Film · Storytelling" },
  { n: "02", title: "Platforms & Products", lead: "Digital experiences engineered for attention and action.", items: "Web design · Development · Conversational websites · Shopify · WordPress · CMS · Internal systems" },
  { n: "03", title: "AI & Automation", lead: "Intelligence embedded where the work actually happens.", items: "Custom GPTs · AI agents · WhatsApp agents · Inbound & outbound voice · Workflow automation · AI operations" },
  { n: "04", title: "Growth & Media", lead: "Turn a distinctive brand into measurable demand.", items: "ChatGPT Ads · Meta Ads · Instagram Ads · Campaign systems · Content engines · Conversion design" },
  { n: "05", title: "Business Operations", lead: "Build the machine behind the beautiful front end.", items: "Automated accounting · SOP systems · Reporting · Internal tooling · Connected workflows · Process design" },
]

const phases = [
  ["01", "Diagnose", "Find the highest-leverage problem, not the easiest deliverable."],
  ["02", "Architect", "Turn brand, experience, intelligence, and operations into one system."],
  ["03", "Execute", "Senior thinkers stay close to the work from first sketch to production."],
  ["04", "Compound", "Measure what matters, improve continuously, and make the advantage harder to copy."],
]

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Lyfix Technologies home"><Image src="/lyfix-logo.png" alt="Lyfix Technologies" fill priority sizes="180px" /></a>
}

export default function Experience() {
  const root = useRef<HTMLElement>(null)
  const [menu, setMenu] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cleanup = () => {}
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.gsap
      const ScrollTrigger = triggerModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const ctx = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => setLoaded(true) })
        intro.to(".loader-count", { textContent: 100, duration: reduced ? 0.01 : 1.2, snap: { textContent: 1 } })
          .to(".loader-line i", { scaleX: 1, duration: reduced ? 0.01 : 1.1 }, 0)
          .to(".loader", { yPercent: -100, duration: reduced ? 0.01 : 0.9, ease: "power4.inOut" })
          .from(".hero-line > span", { yPercent: 120, duration: reduced ? 0.01 : 1.05, stagger: 0.11 }, "-=.25")
          .from(".hero-meta, .hero-scroll, .site-nav", { opacity: 0, y: 18, duration: 0.65, stagger: 0.08 }, "-=.6")
        if (!reduced) {
          gsap.to(".hero-visual", { yPercent: 18, scale: 0.92, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
          gsap.to(".hero-wordmark", { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => gsap.from(element, { y: 70, opacity: 0, duration: 1.15, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 87%" } }))
          gsap.matchMedia().add("(min-width: 900px)", () => gsap.to(".chapter-track", { xPercent: -66.666, ease: "none", scrollTrigger: { trigger: ".chapter", start: "top top", end: "+=280%", scrub: 0.7, pin: true } }))
        } else setLoaded(true)
      }, root)
      cleanup = () => ctx.revert()
    })
    return () => cleanup()
  }, [])

  return (
    <main ref={root} id="top" className={loaded ? "is-loaded" : ""}>
      <div className="loader" aria-hidden="true"><div className="loader-inner"><span>LYFIX / SIGNATURE SYSTEM</span><strong className="loader-count">0</strong><div className="loader-line"><i /></div><p>Strategy · Design · Technology · Intelligence</p></div></div>
      <header className="site-nav"><Logo light /><nav className={menu ? "menu-open" : ""} aria-label="Primary navigation"><a href="#capabilities" onClick={() => setMenu(false)}>Capabilities</a><a href="#method" onClick={() => setMenu(false)}>Method</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a><a className="nav-project" href="mailto:hello@lyfix.tech?subject=Enterprise%20project%20with%20Lyfix">Start a project <ArrowUpRight size={16} /></a></nav><button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button></header>
      <section className="hero"><div className="hero-grid" aria-hidden="true" /><div className="hero-wordmark"><h1><span className="hero-line"><span>We build</span></span><span className="hero-line"><span>businesses</span></span><span className="hero-line accent-line"><span>worth noticing.</span></span></h1><div className="hero-meta"><span>Independent enterprise studio</span><p>One senior team across brand, digital products, artificial intelligence, growth, and the operating systems behind them.</p></div></div><div className="hero-visual"><MetalScene /><div className="visual-ring"><span>LYFIX</span><span>TECHNOLOGIES</span><span>EST. FOR WHAT’S NEXT</span></div></div><a className="hero-scroll" href="#premise"><span>Scroll to enter</span><ArrowDown size={17} /></a></section>
      <section className="premise" id="premise"><div className="eyebrow" data-reveal><span>01</span> The premise</div><h2 data-reveal>Your business does not experience <em>design</em>, <em>technology</em>, and <em>operations</em> separately.</h2><div className="premise-foot" data-reveal><p>Neither should your agency.</p><p>Lyfix connects every visible moment and every invisible system into one coherent commercial advantage.</p></div></section>
      <section className="chapter" aria-label="The Lyfix system"><div className="chapter-track"><article className="chapter-panel chapter-dark"><span className="panel-count">01 / 03</span><div><p>FROM FIRST GLANCE</p><h2>Be <i>remembered.</i></h2></div><p className="panel-copy">A brand with a point of view. Stories with tension. Experiences with enough character to live in someone’s head after the tab is closed.</p></article><article className="chapter-panel chapter-bronze"><span className="panel-count">02 / 03</span><div><p>TO FIRST ACTION</p><h2>Move <i>people.</i></h2></div><p className="panel-copy">Websites that converse. Campaigns that understand intent. Products that make the next step feel obvious and valuable.</p></article><article className="chapter-panel chapter-light"><span className="panel-count">03 / 03</span><div><p>TO EVERY OPERATION</p><h2>Run <i>smarter.</i></h2></div><p className="panel-copy">Agents, automations, workflows, and internal systems that remove friction while keeping judgment exactly where it belongs.</p></article></div></section>
      <section className="capabilities" id="capabilities"><div className="cap-intro" data-reveal><div className="eyebrow"><span>02</span> Capabilities</div><h2>One partner.<br /><i>The whole machine.</i></h2><p>Engage Lyfix for a defining intervention or an end-to-end transformation. The disciplines meet where the business problem demands.</p></div><div className="cap-list">{capabilities.map((cap) => <article key={cap.n} data-reveal><span>{cap.n}</span><div><h3>{cap.title}</h3><p>{cap.lead}</p><small>{cap.items}</small></div><ArrowUpRight /></article>)}</div></section>
      <section className="signal-band"><div>{[0, 1].map((set) => <div className="signal-set" key={set}><span>CONVERSATIONAL WEBSITES</span><Asterisk /><span>CHATGPT ADS</span><Asterisk /><span>AI AGENTS</span><Asterisk /><span>BRAND SYSTEMS</span><Asterisk /><span>BUSINESS AUTOMATION</span><Asterisk /></div>)}</div></section>
      <section className="intelligence"><div className="intelligence-head" data-reveal><div className="eyebrow"><span>03</span> Applied intelligence</div><h2>AI, without<br />the theatre.</h2><p>We design intelligence around a job to be done, a human to help, and a result the business can measure.</p></div><div className="agent-stage" data-reveal><div className="agent-orbit orbit-a"><span>VOICE</span><span>WEB</span><span>WHATSAPP</span></div><div className="agent-core"><span>LYFIX</span><strong>AGENT<br />SYSTEM</strong><small>LISTENING / LEARNING / ACTING</small></div><div className="agent-orbit orbit-b"><span>CRM</span><span>OPS</span><span>DATA</span></div><p>From a website mascot that can guide a buyer, to voice agents handling inbound and outbound calls, to custom GPTs embedded in daily operations.</p></div></section>
      <section className="method" id="method"><div className="method-title" data-reveal><div className="eyebrow"><span>04</span> How we work</div><h2>Senior attention.<br /><i>Start to finish.</i></h2></div><div className="method-list">{phases.map(([n, title, copy]) => <article key={n} data-reveal><span>{n}</span><h3>{title}</h3><p>{copy}</p><MoveRight /></article>)}</div></section>
      <section className="finale" id="contact"><div className="finale-light" /><p data-reveal>THE NEXT CATEGORY-DEFINING BUSINESS</p><h2 data-reveal>should be yours.</h2><a data-reveal href="mailto:hello@lyfix.tech?subject=Build%20something%20defining%20with%20Lyfix"><span>Build something defining</span><ArrowUpRight /></a></section>
      <footer><Logo light /><p>Creative · Technology · Intelligence · Operations</p><div><a href="mailto:hello@lyfix.tech">hello@lyfix.tech</a><span>© {new Date().getFullYear()} LYFIX TECHNOLOGIES</span></div></footer>
    </main>
  )
}
