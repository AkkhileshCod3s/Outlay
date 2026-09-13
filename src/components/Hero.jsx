import { useNavigate } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            FINANCIAL CLARITY x MODERN INNOVATION
          </div>

          <h1 className="hero-heading">
            <span className="hero-heading-main">MASTER EXPENSES WITH</span>
            <span className="hero-heading-accent">confidence.</span>
          </h1>

          <p className="hero-description">
            Streamline your daily spending, track monthly budgets in real time, and take control of your financial freedom with purposeful simplicity.
          </p>

          <div className="hero-actions">
            <button 
              type="button" 
              onClick={() => navigate('/auth?mode=signup')} 
              className="hero-btn-primary"
            >
              <span>GET STARTED FREE</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button 
              type="button" 
              onClick={() => navigate('/auth?mode=signin')} 
              className="hero-btn-secondary"
            >
              Sign In to Workspace
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual-wrapper">
            <svg className="hero-bg-ring" viewBox="0 0 500 500" fill="none" aria-hidden="true">
              <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.25" />
              <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
            </svg>

            <div className="floating-badge-topleft">
              <span className="badge-dot-success"></span>
              +₹4,850 BUDGET SAVED
            </div>

            <div className="floating-card-vault">
              <div className="vault-header">
                <span className="vault-title">EXPENSE VAULT</span>
                <span className="vault-date">09/29</span>
              </div>
              <div className="vault-number">•••• •••• •••• 8492</div>
            </div>

            <div className="live-console-card">
              <div className="console-header">
                <div className="console-brand">
                  <div className="console-logo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="console-title">OUTLAY / EXPENSE TRACKER</div>
                    <div className="console-subtitle">LIVE FINANCE CONSOLE</div>
                  </div>
                </div>
                <div className="console-status-badge">
                  Under Budget (38.5%)
                </div>
              </div>

              <div className="console-target">
                Target Budget: <span className="target-highlight">₹40,000 / month</span>
              </div>

              <div className="console-stats-grid">
                <div className="console-stat-box">
                  <span className="stat-label">SPENT TODAY</span>
                  <span className="stat-value">₹320</span>
                </div>
                <div className="console-stat-box">
                  <span className="stat-label">THIS WEEK</span>
                  <span className="stat-value">₹4,250</span>
                </div>
                <div className="console-stat-box">
                  <span className="stat-label">THIS MONTH</span>
                  <span className="stat-value">₹15,400</span>
                </div>
                <div className="console-stat-box stat-box-remaining">
                  <span className="stat-label">REMAINING</span>
                  <span className="stat-value">₹24,600</span>
                </div>
              </div>

              <div className="console-transactions">
                <div className="transaction-row">
                  <div className="tx-icon tx-icon-food">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <div className="tx-info">
                    <span className="tx-name">Artisan Coffee & Bistro</span>
                    <span className="tx-meta">Food & Dining • Card Payment</span>
                  </div>
                  <div className="tx-amount tx-minus">-₹320.00</div>
                </div>

                <div className="transaction-row">
                  <div className="tx-icon tx-icon-transport">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div className="tx-info">
                    <span className="tx-name">Metro Transit Pass</span>
                    <span className="tx-meta">Transport • Auto Debit</span>
                  </div>
                  <div className="tx-amount tx-minus">-₹650.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
