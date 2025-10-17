# 🔗 URL Shortener

A modern, full-stack URL shortener built with Next.js 13 that provides fast link shortening, custom slugs, and comprehensive analytics with a beautiful, responsive interface.

## ✨ Features

- **🔗 URL Shortening** - Quickly shorten any URL with auto-generated or custom slugs
- **📊 Analytics Dashboard** - Track click statistics, geographic data, and performance metrics
- **🎨 Theme Support** - Light, dark, and system theme modes with seamless transitions
- **🔐 Authentication** - Secure user authentication powered by Clerk
- **⚡ Custom Short URLs** - Create personalized, memorable short links
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🚀 High Performance** - Built with Next.js 13 for optimal speed and SEO

## 🛠️ Tech Stack

| Category       | Technologies                          |
|----------------|---------------------------------------|
| **Frontend**   | Next.js 13, TypeScript, Tailwind CSS |
| **UI Library** | Shadcn/ui                             |
| **Backend**    | Clerk Authentication                  |
| **Database**   | PostgreSQL with Prisma ORM            |
| **State**      | Zustand                               |
| **Hosting**    | Vercel (Frontend) + Neon (Database)   |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon recommended)
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd url-shortener
2. Install dependencies

bash
pnpm install
Environment Configuration

Copy .env.example to .env

Configure the following variables:

env
DATABASE_URL="your-postgresql-connection-string"
CLERK_SECRET_KEY="your-clerk-secret-key"
CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"
Database Setup

bash
npx prisma db push
npx prisma generate
Start Development Server

bash
pnpm dev
The application will be available at http://localhost:3000.

📁 Project Structure
text
url-shortener/
├── app/                 # Next.js 13 app directory
├── components/          # Reusable UI components
├── lib/                # Utility functions and configurations
├── prisma/             # Database schema and migrations
├── store/              # Zustand state management
└── public/             # Static assets
🌐 Live Demo
Experience the application live: https://urlii.vercel.app
