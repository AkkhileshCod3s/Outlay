import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm({ onAddExpense, currency, onCurrencyChange }) {
  const getTodayDateString = () => {
    const d = new Date()
    const y = String(d.getFullYear())
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const dt = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${dt}`
  }

  const todayDateStr = getTodayDateString()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [date, setDate] = useState(todayDateStr)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const currentToday = getTodayDateString()
    if (date > currentToday) {
      alert("You cannot add an expense for a future date.")
      return
    }

    const parsedAmount = parseFloat(amount)
    if (!title.trim()) {
      setError('Please enter an expense title.')
      return
    }

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.')
      return
    }

    if (!date) {
      setError('Please select a date.')
      return
    }

    const newExpense = {
      id: Date.now().toString(),
      title: title.trim(),
      amount: parsedAmount,
      category,
      date,
      createdAt: new Date().toISOString()
    }

    onAddExpense(newExpense)
    setTitle('')
    setAmount('')
    setCategory('Food')
    setDate(getTodayDateString())
  }

  return (
    <div className="expense-form-card">
      <div className="form-card-header">
        <h3 className="form-card-title">Add New Expense</h3>
        <p className="form-card-subtitle">Log an expense to update your live budget in real time.</p>
      </div>

      {error && <div className="expense-form-error">{error}</div>}

      <form onSubmit={handleSubmit} className="expense-actual-form">
        <div className="form-row form-row-top">
          <div className="form-field-currency">
            <label htmlFor="currencySelect" className="field-label">Currency</label>
            <select
              id="currencySelect"
              className="field-select"
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
            >
              <option value="₹">₹ INR</option>
              <option value="$">$ USD</option>
              <option value="€">€ EUR</option>
            </select>
          </div>

          <div className="form-field-amount">
            <label htmlFor="expenseAmount" className="field-label">Amount</label>
            <div className="amount-input-wrapper">
              <span className="amount-prefix">{currency}</span>
              <input
                id="expenseAmount"
                type="number"
                step="0.01"
                min="0.01"
                className="field-input amount-input"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="expenseTitle" className="field-label">Expense Title / Description</label>
          <input
            id="expenseTitle"
            type="text"
            className="field-input"
            placeholder="e.g. Grocery store run, Train ticket"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="expenseCategory" className="field-label">Category</label>
            <select
              id="expenseCategory"
              className="field-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="expenseDate" className="field-label">Date</label>
            <input
              id="expenseDate"
              type="date"
              className="field-input"
              max={todayDateStr}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="add-expense-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Add Expense</span>
        </button>
      </form>
    </div>
  )
}
