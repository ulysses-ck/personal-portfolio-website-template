# Personal Portfolio Website Template

A modern and customizable portfolio website template built with Next.js 15, designed for developers and professionals who want to showcase their work with style.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Theme Switching:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities:** [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## Features

- 🌓 Dark/Light mode support
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Modern UI with Tailwind CSS
- 📝 Type-safe development with TypeScript
- 🎯 SEO optimized
- 🚀 Easy deployment

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
    ├── hero.tsx
    ├── experience.tsx
    ├── navbar.tsx
    └── ...
├── lib/             # Utility functions
└── data/            # Content data
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Customization

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family by Vercel.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the MIT License.
