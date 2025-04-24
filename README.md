# 📝 Note App

A full-featured note-taking web application with user authentication, email notifications, filtering, and an admin panel. Built with a modern React + Node.js stack.

## 🚀 Tech Stack

**Frontend:**
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [Context API](https://reactjs.org/docs/context.html)
- [React Router DOM](https://reactrouter.com/)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- REST API
- Email notifications (Nodemailer)

## 🔐 Authentication

- 🔑 User registration and login
- 📧 Send email after successful registration
- 🛡 Protected routes for authenticated users and admins

## ⚙️ Features

- ✍️ Create and delete personal notes
- 📄 View notes in a dashboard-style layout
- 🔍 Filter notes by **category** or **title**
- 📬 Email sent upon successful user registration
- 🔔 Toast notifications on:
  - Successful login
  - Successful registration
  - Note addition
  - Note deletion
- 🧑‍💼 Admin panel with:
  - 👥 View all users
  - 📓 Access and review all user notes

## 🧭 Routing

Uses `react-router-dom` for client-side routing:
- `/` – Notes page
- `/signup` – Register page
- `/signin` – Login page
- `/add-note - User can add note`
- `/user/:name - Route for user`


## 🛠️ Getting Started

### Prerequisites

Install `Node.js` and `npm` or `yarn`.

### Clone the repository

```bash
git clone https://github.com/snix422/notes-app-fullstack.git
cd note-app

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev

