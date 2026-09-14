import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'
import './AuthPage.css'

export default function AuthPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const queryMode = searchParams.get('mode')
    if (queryMode === 'signup') {
      setMode('signup')
    } else {
      setMode('signin')
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (mode === 'signup' && !name.trim()) {
      setError('Please enter your full name.')
      return
    }

    const userData = {
      name: mode === 'signup' ? name.trim() : (email.split('@')[0] || 'User'),
      email: email.trim(),
      authTime: new Date().toISOString()
    }

    localStorage.setItem('outlay_user', JSON.stringify(userData))
    navigate('/dashboard')
  }

  return (
    <div className="auth-page page-background">
      <Navbar />

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-tabs">
            <button
              type="button"
              className={mode === 'signin' ? 'auth-tab active' : 'auth-tab'}
              onClick={() => {
                setMode('signin')
                setError('')
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={mode === 'signup' ? 'auth-tab active' : 'auth-tab'}
              onClick={() => {
                setMode('signup')
                setError('')
              }}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-body">
            <div className="auth-intro">
              <h2 className="auth-title">
                {mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
              </h2>
              <p className="auth-subtitle">
                {mode === 'signin'
                  ? 'Access your expense workspace and budget logs.'
                  : 'Start monitoring your spending with total financial clarity.'}
              </p>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              {mode === 'signup' && (
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="auth-submit-btn">
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>

          <div className="auth-footer">
            <Link to="/" className="auth-back-link">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>

      {/* <Footer hideContact={true} /> */}
    </div>
  )
}
