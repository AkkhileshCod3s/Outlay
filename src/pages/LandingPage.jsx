import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function LandingPage() {
  const features = [
    {
      title: 'Smart Categorization',
      desc: 'Seamlessly label expenses into Food, Transport, Shopping, Bills, and Custom tags with distinctive visual icons.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      title: 'Real-Time Ceilings',
      desc: 'Instant calculation of today, this week, and monthly budget limits with remaining allowances.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'Adaptive Dual Theme',
      desc: 'High contrast light mode with vivid orange accent and sleek dark mode with emerald green accents.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )
    },
    {
      title: 'Local Privacy First',
      desc: 'All your sensitive expense records are encrypted in your local browser storage. No external servers.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ]

  const faqs = [
    {
      q: 'How does Outlay store my expense records?',
      a: 'Outlay persists your data directly within HTML5 localStorage in your web browser. There are no tracking scripts or external databases.'
    },
    {
      q: 'Can I switch between multiple currencies?',
      a: 'Yes, Outlay supports ₹ INR, $ USD, and € EUR, allowing flexible global expense logging.'
    },
    {
      q: 'Does switching themes persist when I refresh the page?',
      a: 'Yes! Your theme preference is preserved in localStorage and applied instantly upon loading.'
    },
    {
      q: 'Is this project suitable for college viva evaluations?',
      a: 'Absolutely. It is cleanly engineered using pure React functional components, hooks (useState, useEffect), React Router, and plain CSS.'
    }
  ]


  return (
    <div className="landing-page page-background">
      <Navbar />
      <Hero />
      <HowItWorks />

      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-pill">KEY ADVANTAGES</span>
            <h2 className="section-heading">Designed for Maximum Daily Utility</h2>
            <p className="section-subheading">
              Everything you need to maintain budgeting clarity without clutter or cognitive overhead.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feat.icon}</div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="faq" className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-pill">QUESTIONS & ANSWERS</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Common questions about architecture, storage, and viva explanations.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
