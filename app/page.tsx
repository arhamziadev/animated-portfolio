'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, ExternalLink, Menu, X } from 'lucide-react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-06%20at%2010.02.04%20PM-QB0i7mXehlaTNcKrOSgyKMQ9ShGOXW.jpeg'
const illustration = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TumFq9uV4XSa3Ujfq3nrBTDLwCfk4n.png'
const idCard = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dq9AxMAkQFiVbWshrPChW93tcphEP6.png'
const cvUrl = 'https://blobs.vusercontent.net/blob/Arham_Zia_Minimal_CV-Ye8WG5t8I5e5vPF8nNVvUlzUEFSPrF.pdf'

const socials = [
  { label: 'Instagram', short: 'ig', href: 'https://instagram.com/syedarhamzia96' },
  { label: 'LinkedIn', short: 'in', href: 'https://linkedin.com/in/arham-zia-831b9630a' },
  { label: 'Facebook', short: 'f', href: 'https://facebook.com/arham.zia.37' },
  { label: 'GitHub', short: 'gh', href: 'https://github.com/arhamziadev' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cardFlipped, setCardFlipped] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      setMouse({ x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 })
    }
    window.addEventListener('pointermove', handlePointer)
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">AZ<span>.</span></button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <a className="header-cta" href={cvUrl} download="Arham-Zia-CV.pdf">Download CV <Download size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1>Building digital<br /><em>experiences</em> with<br />curiosity.</h1>
          <p className="hero-intro">I&apos;m <strong>Arham Zia</strong> — a front-end developer and civil engineering student turning ideas into clean, thoughtful interfaces.</p>
          <div className="hero-actions">
            <a className="glow-button" href={cvUrl} download="Arham-Zia-CV.pdf"><span>Download CV</span><Download size={17} /></a>
            <button className="text-link" onClick={() => scrollTo('work')}>See my work <ArrowDown size={17} /></button>
          </div>
          <div className="hero-meta"><span>20 years old</span><span>Karachi, Pakistan</span><span>Est. 2024</span></div>
        </div>
        <div className="hero-art" style={{ '--mx': `${mouse.x * 9}px`, '--my': `${mouse.y * 7}px` } as React.CSSProperties}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-label">FRONT-END<br />DEVELOPER <span>↗</span></div>
          <img src={illustration} alt="Illustrated portrait of Arham Zia in a suit" />
          <div className="hero-stamp">SCROLL<br /><ArrowDown size={17} /></div>
        </div>
      </section>

      <section id="about" className="about section-wrap reveal">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-content"><p className="section-kicker">A little about me</p><h2>Designing with a<br /><em>builder&apos;s mindset.</em></h2><p className="body-copy">I&apos;m a curious developer who enjoys the space where visual design meets code. Alongside building responsive dashboards and websites, I&apos;m pursuing my DAE in Civil Engineering — learning to think in systems, structure, and detail.</p><a className="inline-link" href="https://arhamziadev.github.io/zynkra-project-dashboard/#/projects" target="_blank" rel="noreferrer">Explore my dashboard <ExternalLink size={16} /></a></div>
        <div className="portrait-column"><div className="portrait-frame"><div className="portrait-outline" /><img src={portrait} alt="Arham Zia wearing a traditional olive outfit" /><span>ARHAM<br />ZIA / 01</span></div><div className="social-logo-row" aria-label="Social links">{socials.map(({ label, short, href }) => <a className={`social-logo social-${short}`} key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Open Arham Zia on ${label}`}><span>{short}</span></a>)}</div></div>
      </section>

      <section id="work" className="work section-wrap reveal"><div className="section-index">02 / SELECTED WORK</div><div className="work-heading"><h2>Things I&apos;ve<br /><em>been building.</em></h2><span>01 — 01</span></div><a href="https://arhamziadev.github.io/zynkra-project-dashboard/#/projects" target="_blank" rel="noreferrer" className="project-card"><div className="project-number">01</div><div><p className="section-kicker">Featured project</p><h3>Zynkra Project<br /><em>Dashboard</em></h3><p className="project-desc">A focused dashboard experience designed to make project planning feel simple, clear, and actionable.</p><div className="tag-row"><span>Frontend</span><span>Dashboard</span><span>UI / UX</span></div></div><ArrowUpRight className="project-arrow" size={28} /></a></section>

      <section className="education section-wrap reveal"><div className="section-index">03 / JOURNEY</div><div className="timeline"><div><span>2024 — 2027</span><h3>DAE Civil Engineering</h3><p>Currently enrolled · Sindh Board of Technical Education</p></div><div><span>2024</span><h3>Matriculation — Science</h3><p>Computer Science · Board of Secondary Education, Karachi</p></div><div><span>NOW</span><h3>Front-end Developer</h3><p>Building interfaces, dashboards, and digital experiences</p></div></div><div className="skills"><p className="section-kicker">What I work with</p><div className="skill-list"><span>HTML / CSS</span><span>JavaScript</span><span>Responsive UI</span><span>AI-assisted development</span><span>MS Office</span></div></div></section>

      <section className="card-section section-wrap reveal"><div className="section-index">04 / IDENTITY</div><div className="card-intro"><p className="section-kicker">A card with a small surprise</p><h2>Meet me<br /><em>in person.</em></h2><p>Click the card to turn it over.</p></div><button className={cardFlipped ? 'id-card flipped' : 'id-card'} onClick={() => setCardFlipped(!cardFlipped)} aria-label="Flip identity card"><span className="card-hint">CLICK TO FLIP</span><div className="id-card-inner"><div className="id-face"><img src={idCard} alt="Animated identity card for Arham Zia" /></div><div className="id-back"><span>THANK YOU</span><strong>for visiting.</strong><small>— Arham Zia</small></div></div></button></section>

      <footer id="contact" className="site-footer section-wrap"><div><p className="section-kicker">Let&apos;s connect</p><h2>Have a project<br /><em>in mind?</em></h2><a className="email-link" href="mailto:arham12500@gmail.com">arham12500@gmail.com <ArrowUpRight size={19} /></a></div><p className="footer-credit">© 2026 Arham Zia</p></footer>
    </main>
  )
}
