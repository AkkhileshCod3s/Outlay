import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <span className="brand-title">OUTLAY</span>
              <span className="brand-dot"></span>
            </div>
            <span className="brand-subtitle">EXPENSE TRACKER</span>
          </div>
        </Link>

        <div className="navbar-links">
          <a href="/#features" className="nav-link">Features</a>
          <a href="/#how-it-works" className="nav-link">How It Works</a>
          <a href="/#faq" className="nav-link">FAQ</a>
        </div>

        <div className="navbar-actions">
          <button 
            type="button" 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/auth?mode=signin')} 
            className="nav-signin-btn"
          >
            Sign In
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/auth?mode=signup')} 
            className="nav-getstarted-btn"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
