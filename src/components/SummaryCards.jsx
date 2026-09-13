import './SummaryCards.css'

export default function SummaryCards({ expenses, currency, monthlyBudget = 0 }) {
  const todayStr = new Date().toISOString().split('T')[0]
  const now = new Date()

  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - now.getDay())
  startOfWeek.setHours(0, 0, 0, 0)

  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()

  let todaySpend = 0
  let weekSpend = 0
  let monthSpend = 0

  expenses.forEach((item) => {
    const itemAmount = Number(item.amount) || 0
    const itemDate = new Date(item.date)

    if (item.date === todayStr) {
      todaySpend += itemAmount
    }

    if (itemDate >= startOfWeek && itemDate <= now) {
      weekSpend += itemAmount
    }

    if (itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth) {
      monthSpend += itemAmount
    }
  })

  const remaining = Math.max(0, monthlyBudget - monthSpend)
  const isOverBudget = monthlyBudget > 0 && monthSpend > monthlyBudget

  const cards = [
    {
      title: "Today's Spend",
      amount: todaySpend,
      highlight: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'This Week',
      amount: weekSpend,
      highlight: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: 'This Month',
      amount: monthSpend,
      highlight: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: isOverBudget ? 'Over Budget' : 'Remaining Budget',
      amount: isOverBudget ? monthSpend - monthlyBudget : remaining,
      highlight: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      )
    }
  ]

  return (
    <div className="summary-cards-grid">
      {cards.map((card, idx) => (
        <div key={idx} className={card.highlight ? 'summary-card card-highlight' : 'summary-card'}>
          <div className="summary-card-header">
            <span className="summary-card-title">{card.title}</span>
            <div className="summary-card-icon">{card.icon}</div>
          </div>
          <div className="summary-card-amount">
            {currency}{card.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      ))}
    </div>
  )
}
