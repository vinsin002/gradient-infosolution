import { motion } from 'framer-motion'
import { Layers, Globe, Rocket, Search, ShoppingCart, Wrench, ArrowRight, Mail, Phone } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Business Websites', text: 'Clean, fast and mobile-first sites that present your brand with confidence.' },
  { icon: ShoppingCart, title: 'E-commerce Stores', text: 'Online shops with smooth checkout, inventory and payment integrations.' },
  { icon: Rocket, title: 'Landing Pages', text: 'High-converting campaign pages built to turn clicks into customers.' },
  { icon: Search, title: 'SEO & Performance', text: 'Rank higher and load faster with technical SEO and Core Web Vitals tuning.' },
  { icon: Layers, title: 'Web Apps & Dashboards', text: 'Custom portals, booking systems and internal tools tailored to your workflow.' },
  { icon: Wrench, title: 'Care & Maintenance', text: 'Hosting, updates and ongoing support so your site is always up and secure.' },
]

const stats = [['150+', 'Websites launched'], ['98%', 'Client satisfaction'], ['2x', 'Average lead growth'], ['7 days', 'Typical first draft']]

const steps = [
  ['01', 'Discover', 'We learn your business, customers and goals.'],
  ['02', 'Design', 'Clear layouts and a look that feels unmistakably yours.'],
  ['03', 'Build', 'Fast, responsive development with clean code.'],
  ['04', 'Grow', 'Launch, measure and keep improving results.'],
]

const fade = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } }

export default function App() {
  return (
    <>
      <div className="glow" />
      <div className="wrap">
        <nav className="nav">
          <a href="#top" className="brand">
            <span className="logo"><Layers size={26} /></span>
            Gradient Infosolution
          </a>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact" className="btn">Get a website</a>
          </div>
        </nav>

        <header className="hero" id="top">
          <motion.div className="hero-inner" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="eyebrow">Websites for growing businesses</div>
            <h1>Your business, made visible.</h1>
            <p>Gradient Infosolution designs and builds fast, beautiful websites that are clear, useful, and unmistakably yours.</p>
            <div className="cta">
              <a href="#contact" className="btn">Start your project <ArrowRight size={18} /></a>
              <a href="#services" className="btn ghost">See what we do</a>
            </div>
          </motion.div>
          <div className="mouse"><i /></div>
        </header>

        <div className="stats">
          {stats.map(([n, l]) => (
            <motion.div key={l} {...fade}><b>{n}</b><span>{l}</span></motion.div>
          ))}
        </div>

        <section id="services">
          <div className="sec-head">
            <div className="eyebrow">What we do</div>
            <h2>Everything your business needs online.</h2>
            <p>From first impression to repeat customers, one team handles it all.</p>
          </div>
          <div className="grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title} className="card" {...fade} transition={{ duration: 0.6, delay: i * 0.07 }}>
                <div className="ico"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process">
          <div className="sec-head">
            <div className="eyebrow">How we work</div>
            <h2>Simple process. Visible progress.</h2>
          </div>
          <div className="steps">
            {steps.map(([n, t, d], i) => (
              <motion.div key={n} className="step" {...fade} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <em>{n}</em><h3>{t}</h3><p>{d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 0 }}>
          <motion.div className="contact" {...fade}>
            <h2>Ready to get your business online?</h2>
            <p>Tell us about your idea and we'll get back with a plan within one business day.</p>
            <div className="cta">
              <a href="mailto:hello@gradientinfosolution.com" className="btn"><Mail size={18} /> Email us</a>
              <a href="tel:+910000000000" className="btn ghost"><Phone size={18} /> Call us</a>
            </div>
          </motion.div>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} Gradient Infosolution. All rights reserved.</span>
          <span>Websites that work as hard as you do.</span>
        </footer>
      </div>
    </>
  )
}
