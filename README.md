# First React Project

A dynamic, modern React application built with Vite and styled with Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🌟 Features

- **Dynamic Components:** Includes interactive elements like `DynamicDiv` with custom hooks for mouse tracking (`useMousePosition`) and responsive canvas sizing (`useCanvasSize`).
- **SPA Routing Ready:** Pre-configured `vercel.json` ensures seamless Single Page Application (SPA) routing without 404 errors on reload.
- **Modern Tooling:** Uses ESLint for code quality and Vite for lightning-fast HMR.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v20+ recommended)

### Installation

1. Clone the repository and navigate into the project folder:
   ```bash
   cd first-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🌍 Deployment

This project is optimized for deployment on **Vercel**. 
The included `vercel.json` file handles all necessary route rewrites out of the box to support React Router. Simply import the repository into your Vercel dashboard and deploy!