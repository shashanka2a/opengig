# OpenGig - Next.js 15 Production App

A production-ready Next.js 15 application with Tailwind CSS v3, SEO optimization, and Lucide icon favicon.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v3
- ✅ TypeScript
- ✅ SEO meta tags (Open Graph, Twitter Cards, etc.)
- ✅ Lucide React icons
- ✅ Responsive design
- ✅ Production-ready configuration

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
opengig/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind imports
├── public/
│   ├── icon.svg        # SVG favicon (Lucide Briefcase icon)
│   └── manifest.json   # PWA manifest
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## SEO Features

The app includes comprehensive SEO metadata:

- Meta title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Robots meta tags
- Structured data ready

## Favicon

The favicon uses a Lucide Briefcase icon, which aligns with the gig economy theme. The SVG icon is located at `/public/icon.svg`.

## Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS v3** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Lucide React** - Icon library

## License

© 2025 OpenGig Inc. // All Rights Reserved.

