import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import SummaryCards from '../components/SummaryCards'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('outlay_user')
    return saved ? JSON.parse(saved) : { name: 'Student Workspace', email: '' }
  })

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('outlay_currency') || '₹'
  })

  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    const saved = localStorage.getItem('outlay_target_budget')
    return saved !== null && saved !== '' ? Number(saved) : 0
  })

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('outlay_expenses')
    return saved ? JSON.parse(saved) : []
  })

  const [analyticsView, setAnalyticsView] = useState('weekly')

  useEffect(() => {
    localStorage.setItem('outlay_expenses', JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem('outlay_currency', currency)
  }, [currency])

  useEffect(() => {
    localStorage.setItem('outlay_target_budget', monthlyBudget.toString())
  }, [monthlyBudget])

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev])
  }

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id))
  }

  const handleLogout = () => {
    localStorage.removeItem('outlay_user')
    navigate('/')
  }

  const getDayName = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString(undefined, { weekday: 'short' })
  }

  const getWeekDayStats = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const now = new Date()
    const dayOfWeek = now.getDay()
    const budgetValue = Number(monthlyBudget) || 0

    return days.map((day, i) => {
      const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek + i)
      const y = String(targetDate.getFullYear())
      const m = String(targetDate.getMonth() + 1).padStart(2, '0')
      const dt = String(targetDate.getDate()).padStart(2, '0')
      const dateStr = `${y}-${m}-${dt}`

      const dayTotal = expenses
        .filter((item) => item.date === dateStr)
        .reduce((sum, item) => sum + (Number(item.amount) || 0), 0)

      const percentage = budgetValue > 0
        ? Math.min(100, Math.max(0, (dayTotal / budgetValue) * 100))
        : 0

      return {
        label: day,
        amount: dayTotal,
        percentage
      }
    })
  }

  const getMonthStats = () => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentYear = String(new Date().getFullYear())
    const budgetValue = Number(monthlyBudget) || 0

    return monthNames.map((m, idx) => {
      const monthPrefix = `${currentYear}-${String(idx + 1).padStart(2, '0')}`

      const monthTotal = expenses
        .filter((item) => item.date && item.date.startsWith(monthPrefix))
        .reduce((sum, item) => sum + (Number(item.amount) || 0), 0)

      const percentage = budgetValue > 0
        ? Math.min(100, Math.max(0, (monthTotal / budgetValue) * 100))
        : 0

      return {
        label: m,
        amount: monthTotal,
        percentage
      }
    })
  }

  const weekDayStats = getWeekDayStats()
  const monthStats = getMonthStats()

  return (
    <div className="dashboard-container page-background">
      <header className="dashboard-navbar">
        <div className="dashboard-nav-inner">
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

          <div className="dashboard-nav-right">
            <div className="user-pill">
              <span className="user-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </span>
              <span className="user-name">{user.name || 'Workspace'}</span>
            </div>

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
              onClick={handleLogout} 
              className="dashboard-logout-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-banner">
          <div className="banner-text">
            <h1 className="banner-title">Financial Dashboard</h1>
            <p className="banner-subtitle">
              Welcome back, {user.name}. Here is your live spending analysis and budget allocation.
            </p>
          </div>

          <div className="banner-budget-ctrl">
            <label htmlFor="targetBudgetInput" className="ctrl-label">Monthly Budget ({currency})</label>
            <input
              id="targetBudgetInput"
              type="number"
              min="0"
              className="budget-input"
              value={monthlyBudget}
              onChange={(e) => {
                const val = e.target.value
                setMonthlyBudget(val === '' ? '' : Math.max(0, Number(val)))
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setMonthlyBudget(0)
                }
              }}
            />
          </div>
        </section>

        <SummaryCards 
          expenses={expenses} 
          currency={currency} 
          monthlyBudget={Number(monthlyBudget) || 0} 
        />

        <div className="dashboard-grid">
          <div className="grid-column">
            <ExpenseForm 
              onAddExpense={handleAddExpense} 
              currency={currency} 
              onCurrencyChange={setCurrency} 
            />
          </div>

          <div className="grid-column">
            <div className="analytics-card">
              <div className="analytics-header">
                <div>
                  <h3 className="analytics-title">Spending Analytics</h3>
                  <p className="analytics-subtitle">View your analytics below.</p>
                </div>

                <div className="analytics-toggle">
                  <button
                    type="button"
                    className={analyticsView === 'weekly' ? 'toggle-btn active' : 'toggle-btn'}
                    onClick={() => setAnalyticsView('weekly')}
                  >
                    Week
                  </button>
                  <button
                    type="button"
                    className={analyticsView === 'monthly' ? 'toggle-btn active' : 'toggle-btn'}
                    onClick={() => setAnalyticsView('monthly')}
                  >
                    Year
                  </button>
                </div>
              </div>

              <div className="analytics-bars">
                {analyticsView === 'weekly' ? (
                  <div className="bars-list">
                    {weekDayStats.map((item) => (
                      <div key={item.label} className="bar-row">
                        <span className="bar-label">{item.label}</span>
                        <div className="bar-track">
                          <div 
                            className="bar-fill" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="bar-value">
                          {currency}{item.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bars-list">
                    {monthStats.map((item) => (
                      <div key={item.label} className="bar-row">
                        <span className="bar-label">{item.label}</span>
                        <div className="bar-track">
                          <div 
                            className="bar-fill" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="bar-value">
                          {currency}{item.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="dashboard-list-section">
          <ExpenseList 
            expenses={expenses} 
            currency={currency} 
            onDeleteExpense={handleDeleteExpense} 
          />
        </section>
      </main>
    </div>
  )
}