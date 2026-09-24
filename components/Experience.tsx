"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Menu, Plus, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const capabilities = [
  {
    id: "01", key: "IDENTITY", title: "Make the business unmistakable.",
    body: "Strategy, identity, campaign worlds, packaging, product graphics, publications, UGC and film. One visual language with enough range to grow without becoming generic.",
    tags: ["Brand systems", "Packaging", "Graphic design", "UGC + AI UGC", "Film & storytelling"],
  },
  {
    id: "02", key: "EXPERIENCE", title: "Turn attention into movement.",
    body: "Websites, stores and products that feel specific to the brand and make complex decisions easier. Including conversational interfaces that guide, qualify and convert.",
    tags: ["Web design", "Web development", "Conversational web", "Shopify", "WordPress + CMS"],
  },
  {
    id: "03", key: "INTELLIGENCE", title: "Put AI inside the actual workflow.",
    body: "Useful agents, not demos. Custom GPTs, WhatsApp agents, voice systems and automations connected to the tools, guardrails and hand-offs your team already uses.",
    tags: ["Custom GPTs", "WhatsApp agents", "Inbound voice", "Outbound voice", "AI automation"],
  },
  {
    id: "04", key: "DEMAND", title: "Build a repeatable path to revenue.",
    body: "Campaign strategy, media and conversion systems operating from the same brand logic. Creative and performance stop fighting each other.",
    tags: ["ChatGPT Ads", "Meta Ads", "Instagram Ads", "Content engines", "Conversion systems"],
  },
  {
    id: "05", key: "OPERATIONS", title: "Fix what customers never see.",
    body: "Internal tools, connected workflows, automated accounting and operating systems that reduce delay, repetitive work and avoidable human error.",
    tags: ["Internal systems", "Accounting automation", "SOP design", "Reporting", "Workflow engineering"],
  },
]

const engagements = [
  { number: "A", title: "Launch a new proposition", copy: "Positioning → identity → website → content → launch campaign → lead operations" },
  { number: "B", title: "Modernise a growing company", copy: "Experience audit → digital platform → CRM workflows → AI layer → performance system" },
  { number: "C", title: "Automate a painful operation", copy: "Process map → custom agents → internal tools → approvals → reporting and oversight" },
]

function Brand() {
  return <a className="brand" href="#top" aria-label="Lyfix Technologies home"><Image src="/lyfix-logo.png" alt="Lyfix Technologies" fill priority sizes="160px" /></a>
}

function RouteMap() {
  return (
    <svg className="route-map" viewBox="0 0 100 640" preserveAspectRatio="none" aria-hidden="true">
      <path className="route-ghost" d="M50 0V72L18 104V184L78 244V330L31 377V470L70 509V575L50 595V640" />
      <path className="route-live" d="M50 0V72L18 104V184L78 244V330L31 377V470L70 509V575L50 595V640" />
      <g className="route-nodes"><circle cx="18" cy="104" r="3"/><circle cx="78" cy="244" r="3"/><circle cx="31" cy="377" r="3"/><circle cx="70" cy="509" r="3"/></g>
    </svg>
  )
}

export default function Experience() {
  const root = useRef<HTMLElement>(null)
  const hero = useRef<HTMLElement>(null)
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState(0)
  const [openMobile, setOpenMobile] = useState(0)

  useEffect(() => {
    let destroy = () => {}
    let cancelled = false
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, s]) => {
      if (cancelled) return
      const gsap = g.gsap
      const ScrollTrigger = s.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
      const ctx = gsap.context(() => {
        gsap.set(".intro-word span", { yPercent: 115 })
        const load = gsap.timeline({ defaults: { ease: "power4.out" } })
        load.to(".boot-line", { scaleX: 1, duration: reduce ? 0 : .75 })
          .to(".boot", { clipPath: "inset(0 0 100% 0)", duration: reduce ? 0 : .72, ease: "power4.inOut" })
          .to(".intro-word span", { yPercent: 0, duration: reduce ? 0 : 1, stagger: .08 }, "-=.2")
          .from(".hero-copy, .hero-index, .site-nav", { opacity: 0, y: 18, duration: reduce ? 0 : .6, stagger: .08 }, "-=.55")

        if (!reduce) {
          gsap.to(".route-live", { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: .45 } })
          gsap.to(".hero-cut", { xPercent: -6, rotate: -2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
          gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) => gsap.from(el, { y: 55, opacity: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }))
          gsap.utils.toArray<HTMLElement>(".cap-step").forEach((el, index) => ScrollTrigger.create({ trigger: el, start: "top 52%", end: "bottom 52%", onEnter: () => setActive(index), onEnterBack: () => setActive(index) }))
          gsap.fromTo(".output-ticket", { xPercent: -18, rotate: -6 }, { xPercent: 4, rotate: 2, ease: "none", scrollTrigger: { trigger: ".conversion", start: "top bottom", end: "bottom top", scrub: true } })
        }
      }, root)
      destroy = () => ctx.revert()
    })
    return () => { cancelled = true; destroy() }
  }, [])

  useEffect(() => {
    const el = hero.current
    if (!el || matchMedia("(pointer: coarse)").matches) return
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`)
    }
    el.addEventListener("pointermove", move, { passive: true })
    return () => el.removeEventListener("pointermove", move)
  }, [])

  return (
    <main id="top" ref={root}>
      <div className="boot" aria-hidden="true"><span>LYFIX / CONNECTING THE BUSINESS</span><div><i className="boot-line" /></div><b>CREATIVE · TECHNOLOGY · INTELLIGENCE · OPERATIONS</b></div>
      <RouteMap />
      <header className="site-nav"><Brand /><nav className={menu ? "open" : ""}><a href="#system" onClick={() => setMenu(false)}>System</a><a href="#capabilities" onClick={() => setMenu(false)}>Capabilities</a><a href="#engagements" onClick={() => setMenu(false)}>Engagements</a><a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Brief us <ArrowUpRight /></a></nav><button onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button></header>

      <section className="hero" ref={hero}>
        <div className="hero-signal" aria-hidden="true"><span>BRAND</span><span>PRODUCT</span><span>AI</span><span>GROWTH</span><span>OPS</span></div>
        <div className="hero-title"><h1><span className="intro-word"><span>WE DESIGN</span></span><span className="intro-word outline"><span>WHAT PEOPLE SEE.</span></span><span className="intro-word shift"><span>WE ENGINEER</span></span><span className="intro-word copper"><span>WHAT BUSINESS RUNS ON.</span></span></h1></div>
        <div className="hero-cut" aria-hidden="true"><b>LY</b><i /><b>FIX</b><small>ONE CONNECTED COMPANY</small></div>
        <div className="hero-copy"><span>INDEPENDENT ENTERPRISE PARTNER / INDIA + WORLDWIDE</span><p>Lyfix connects brand, digital products, growth, AI and operations, so companies stop managing five disconnected vendors and start moving as one.</p></div>
        <div className="hero-index"><span>SCROLL</span><ArrowDown /></div>
      </section>

      <section className="thesis" id="system">
        <div className="section-tag" data-rise><span>01</span> THE DISCONNECT</div>
        <div className="thesis-grid"><p data-rise>Most companies are not short on vendors.</p><h2 data-rise>They are short on <strong>connection.</strong></h2><div className="broken-stack" data-rise><span>BRAND <i>↗</i></span><span>WEBSITE <i>↙</i></span><span>MARKETING <i>→</i></span><span>AI <i>↖</i></span><span>OPERATIONS <i>↓</i></span></div><p className="thesis-note" data-rise>Every hand-off dilutes the idea, slows the work, and creates another place for accountability to disappear.</p></div>
      </section>

      <section className="splice" aria-label="The Lyfix difference"><div className="splice-left"><span>WITHOUT LYFIX</span><h2>Five agencies.<br/>Seven tools.<br/>No owner.</h2></div><div className="splice-mark" aria-hidden="true"><span>L</span><i/><span>X</span></div><div className="splice-right"><span>WITH LYFIX</span><h2>One logic.<br/>One system.<br/>One outcome.</h2></div></section>

      <section className="capabilities" id="capabilities">
        <div className="cap-sticky"><div className="section-tag"><span>02</span> THE CONNECTION LAYER</div><div className="cap-counter">{capabilities[active].id}<small>/05</small></div><h2>{capabilities[active].key}</h2><div className="cap-pulse" aria-hidden="true"><i/><i/><i/><b>{capabilities[active].id}</b></div></div>
        <div className="cap-steps">
          {capabilities.map((cap, index) => <article className={`cap-step ${active === index ? "active" : ""}`} key={cap.id} onClick={() => setOpenMobile(openMobile === index ? -1 : index)}><header><span>{cap.id}</span><h3>{cap.key}</h3><button aria-label={`${openMobile === index ? "Close" : "Open"} ${cap.key}`}><Plus /></button></header><div className={openMobile === index ? "mobile-open" : ""}><h4>{cap.title}</h4><p>{cap.body}</p><ul>{cap.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="conversion">
        <div className="section-tag" data-rise><span>03</span> WHAT CONNECTED LOOKS LIKE</div>
        <div className="conversion-head"><h2 data-rise>One business problem goes in.</h2><h2 data-rise>A working system comes out.</h2></div>
        <div className="input-ticket" data-rise><span>INPUT / 001</span><strong>“Our growth has outpaced the way we look, sell and operate.”</strong><small>AMBITION · FRICTION · COMPLEXITY</small></div>
        <div className="processor" aria-hidden="true"><span>DIAGNOSE</span><i/><span>DESIGN</span><i/><span>BUILD</span><i/><span>OPERATE</span></div>
        <div className="output-ticket"><span>LYFIX OUTPUT / LIVE</span><strong>A brand customers remember.<br/>A platform that converts.<br/>An operation that scales.</strong><small>ONE ACCOUNTABLE SYSTEM</small></div>
      </section>

      <section className="engagements" id="engagements">
        <div className="engagement-title"><div className="section-tag" data-rise><span>04</span> WAYS TO USE LYFIX</div><h2 data-rise>Bring us the part.<br/><span>Or bring us the mess.</span></h2></div>
        <div className="engagement-list">{engagements.map(item => <article key={item.number} data-rise><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowUpRight /></article>)}</div>
      </section>

      <section className="proof-principle"><p>THE PRINCIPLE</p><h2 data-rise>Beautiful is not the outcome.<br/><span>Business movement is.</span></h2><div><span>NO DECORATION WITHOUT A JOB.</span><span>NO AUTOMATION WITHOUT OVERSIGHT.</span><span>NO CAMPAIGN WITHOUT A SYSTEM.</span></div></section>

      <section className="contact" id="contact"><div className="contact-code">LF/X<br/>05</div><p>Have a serious business problem?</p><h2>Let&apos;s fix<br/><span>the whole thing.</span></h2><a href="mailto:hello@lyfix.tech?subject=Enterprise%20brief%20for%20Lyfix"><span>hello@lyfix.tech</span><ArrowUpRight /></a></section>
      <footer><Brand/><span>JAIPUR / INDIA / WORLDWIDE</span><span>© {new Date().getFullYear()} LYFIX TECHNOLOGIES</span></footer>
    </main>
  )
}
