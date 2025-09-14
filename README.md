An example project showcasing skeleton loading states built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Tech Stack

- Framework: Next.js (App Router)
- UI: shadcn/ui
- Styling: Tailwind CSS
- Language: TypeScript

## 🛠 Installation

1. Clone the repository

```Bash
git clone https://github.com/rafaelpascoal/nextjs-skeleton-demo.git
cd nextjs-skeleton-demo
```

2. Install dependencies

```Bash
npm install
# or npm install / yarn install
```

3. Install shadcn/ui

```Bash
npx shadcn init
```

3.1 Confirm the creation of the components/ui folder and config files.

3.2 Add required components

```Powershell
npx shadcn@latest add button skeleton
```

4. Run the development server

```Bash
npm run dev
# or npm run dev / yarn dev
```

## ✨ Features

- ⏳ Skeleton loading component with reusable architecture
- 🖼 Example page simulating data fetching with loading state
- ⚡ Built with modern Next.js App Router and TypeScript
- 🎨 Styled with Tailwind CSS and shadcn/ui components

## 📦 Usage

1. Start the dev server and visit the home page:

```Powershell
npm run dev
# http://localhost:3000
```

2. You will see the UsersPage as the default homepage.

3. While fetching data from /api/users, skeleton cards are displayed.

4. After ~2s, the real user data replaces the skeletons.

## 📸 Preview

🔗 Live Demo: https://nextjs-skeleton-demo.vercel.app
 (após deploy)

## 🚀 Deployment

- This project is optimized for deployment on Vercel.
- Simply connect your GitHub repository and deploy with one click.

## 📋 Project Checklist
### Setup & Base

- ✅ Initialize Next.js project (App Router)
- ✅ Configure Git repository and GitHub remote
- ✅ Install Tailwind CSS
- ✅ Install shadcn/ui
- ✅ Add reusable SkeletonCard component
- ✅ Add mock API at /api/users
- ✅ Set UsersPage as homepage

### Features

- ✅ Display Skeletons while data is loading
- ✅ Fetch and render mock user data from API
- ✅ Reusable component structure

### Documentation

- ✅ Add README with installation steps
- ✅ Add usage examples
- ✅ Add preview & deployment info

### Deployment

- ✅ Deploy to Vercel with live demo link

## 📂 Project Structure

```Bash
src/
 ├─ app/              # Next.js App Router structure
 │   ├─ api/users     # Mock API routes
 │   ├─ skeleton/     # Skeleton demo page
 │   └─ users/        # Users page with fetch + skeleton
 ├─ components/       # Reusable UI components
 │   ├─ ui/           # shadcn/ui components (skeleton, button, avatar)
 │   ├─ loading/      # SkeletonCard component
 │   └─ users/        # UserCard component
 └─ lib/              # Utils (e.g. cn)
 ```