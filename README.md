# Outlay – Expense Tracker

A simple, no-backend personal expense tracking web app. Users can sign up, log daily expenses, set a monthly budget, and track their spending through dynamic summary cards and a weekly/monthly breakdown view — all built with plain React, no external UI frameworks.

Built as a front-end college project (Front End Engineering) covering React fundamentals: components, props, state, `useState`, `useEffect`, and React Router.

## Features

- **Landing Page** — Hero section with a live finance console preview, "How It Works" walkthrough, and a floating sticky navbar.
- **Authentication** — Combined Sign In / Sign Up page with tab toggling; user data is saved to `localStorage`.
- **Dashboard**
  - Summary cards: Today's Spend, This Week, This Month, Remaining Budget
  - User-editable monthly budget with a proportional progress bar
  - Add Expense form with currency, amount, category, and date (future dates are blocked)
  - Expense list, newest first, with category icons
  - Weekly and monthly spending breakdown (plain CSS bar view)
- **Light / Dark Theme** — Orange accent (`#FF5722`) in light mode, green accent (`#22C55E`) in dark mode, toggle persisted in `localStorage`.
- **Session Persistence** — Users stay logged in across pages until they explicitly log out from the Dashboard.
- All data (user info, expenses, budget, theme) is stored client-side in the browser's `localStorage` — no backend or database.

## Tech Stack

- [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- Plain CSS (no Tailwind, no Bootstrap, no UI component libraries)
- Plain JavaScript (no TypeScript)
- [React Router DOM](https://reactrouter.com/) — for page navigation
- Browser `localStorage` — for data persistence

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Footer.jsx / Footer.css
│   ├── Hero.jsx / Hero.css
│   ├── HowItWorks.jsx / HowItWorks.css
│   ├── ExpenseForm.jsx / ExpenseForm.css
│   ├── ExpenseList.jsx / ExpenseList.css
│   └── SummaryCards.jsx / SummaryCards.css
├── pages/
│   ├── LandingPage.jsx
│   ├── AuthPage.jsx / AuthPage.css
│   └── Dashboard.jsx / Dashboard.css
├── context/
│   └── ThemeContext.jsx
├── App.jsx / App.css
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/outlay-expense-tracker.git
cd outlay-expense-tracker
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for production

```bash
npm run build
```

## Routes

| Route         | Page          |
|---------------|---------------|
| `/`           | Landing Page  |
| `/auth`       | Sign In / Sign Up |
| `/dashboard`  | Dashboard     |

## Notes

- No backend or database is used — all expense data, user session, and theme preference are stored in the browser's `localStorage`.
- Clearing browser storage will reset the app to its initial state.

## License

This project was built for educational purposes as part of a college coursework submission.
