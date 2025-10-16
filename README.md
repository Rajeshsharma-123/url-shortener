🚀 URL Shortener

URL Shortener is a modern app built with Next.js that allows you to shorten URLs, create custom short links, and view analytics. It’s fast, simple, and comes with light/dark mode support.

Live Demo

✨ Features

Simple URL shortening – Quickly shorten any URL.

Custom short URLs – Create personalized slugs for easy sharing.

Analytics & statistics – Track link clicks and performance.

Light / Dark / System mode – Seamless UI themes.

Authentication – Secure login with Clerk.

Database – Powered by PostgreSQL with Neon and Prisma.

State management – Using Zustand.

Hosting – Deployed on Vercel.

🛠️ Tech Stack
Frontend	Backend	Database	State	Styling	Hosting
Next.js 13	Clerk	PostgreSQL	Zustand	Tailwind CSS	Vercel
Shadcn/ui	Prisma	Neon	-	TypeScript	-
⚡ Getting Started

Clone the repo

git clone <repo-url>
cd url-shortener


Setup environment variables
Copy .env.example to .env and fill in your Database URL & Clerk Auth configurations.

Install dependencies

npm install


Setup database

npx prisma db push
npx prisma generate


Run the development server

npm run dev


Your app should now be running at http://localhost:3000.

🌐 Demo

Check out the live demo: https:

🖌️ UI / Design

Fully responsive, works on mobile and desktop

Light / Dark / System theme toggle

Simple and clean design using Shadcn/ui

📦 Deployment

The app is hosted on Vercel, making it easy to deploy updates instantly.
