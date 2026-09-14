<div align="center">

# 💰 Outlay — Expense Tracker

**A sleek, no-backend personal expense tracking web app built with React.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Plain_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![React Router](https://img.shields.io/badge/React_Router-DOM-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

![No Backend](https://img.shields.io/badge/Backend-None-lightgrey?style=flat-square)
![Storage](https://img.shields.io/badge/Storage-localStorage-orange?style=flat-square)
![License](https://img.shields.io/badge/License-Educational-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

</div>

---

Users can sign up, log daily expenses, set a monthly budget, and track their spending through dynamic summary cards and a weekly/monthly breakdown view — all with **zero backend**, **zero external UI libraries**, and data persisted entirely in the browser.

Built as a front-end college project (Front End Engineering) covering React fundamentals: components, props, state, `useState`, `useEffect`, and React Router.

---

## ✨ Features

| | |
|---|---|
| 🏠 **Landing Page** | Hero section with a live finance console preview, "How It Works" walkthrough, and a floating sticky navbar |
| 🔐 **Authentication** | Combined Sign In / Sign Up page with tab toggling; user data saved to `localStorage` |
| 📊 **Dashboard** | Summary cards (Today, This Week, This Month, Remaining Budget) |
| 💸 **Budget Tracking** | User-editable monthly budget with a proportional live progress bar |
| ➕ **Add Expenses** | Currency, amount, category & date fields — future dates are blocked |
| 📋 **Expense List** | Newest-first list with category icons |
| 📈 **Spending Breakdown** | Weekly & monthly view using a plain CSS bar chart |
| 🌗 **Light / Dark Theme** | Orange `#FF5722` accent (light) / Green `#22C55E` accent (dark), persisted across sessions |
| 🔒 **Session Persistence** | Stays logged in across pages until explicit logout from the Dashboard |

> All data — user info, expenses, budget, theme — lives entirely in the browser's `localStorage`. No backend, no database.

---

## 🛠️ Tech Stack

- ⚛️ **[React](https://react.dev/)** (via **[Vite](https://vitejs.dev/)**)
- 🎨 **Plain CSS** — no Tailwind, no Bootstrap, no UI component libraries
- 📜 **Plain JavaScript** — no TypeScript
- 🧭 **[React Router DOM](https://reactrouter.com/)** — page navigation
- 💾 **Browser `localStorage`** — data persistence

---

## 📁 Project Structure

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

---

## 🚀 Getting Started

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

---

## 🧭 Routes

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/auth` | Sign In / Sign Up |
| `/dashboard` | Dashboard |

---

## 📝 Notes

- No backend or database is used — all expense data, user session, and theme preference are stored in the browser's `localStorage`.
- Clearing browser storage will reset the app to its initial state.

---

## 📄 License

This project was built for educational purposes as part of a college coursework submission.

<div align="center">

Made with ⚛️ React and ☕ patience.

</div>
