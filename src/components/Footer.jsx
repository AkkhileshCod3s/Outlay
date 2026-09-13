import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer({ hideContact = false }) {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <Link to="/" className="footer-brand">
              <div className="footer-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="brand-title-row">
                <span className="brand-title">OUTLAY</span>
                <span className="brand-dot"></span>
              </div>
            </Link>
            <p className="footer-tagline">
              Modern personal financial intelligence and expenditure tracking engineered for daily clarity.
            </p>
          </div>

          <div className="footer-middle">
            <a href="/#features" className="footer-link">Features</a>
            <a href="/#how-it-works" className="footer-link">How It Works</a>
            <a href="/#faq" className="footer-link">FAQ</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Outlay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
