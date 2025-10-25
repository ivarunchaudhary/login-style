# Next.js Login Page

A beautiful, modern login page built with Next.js 14, TypeScript, and Tailwind CSS. This project is a conversion of the original HTML login page with all design and interactive features preserved.

## Features

- ✨ **Beautiful UI**: Gradient background with a modern, clean design
- 👁️ **Animated Eye Icon**: 
  - Blinks naturally every 3-6 seconds
  - Eyeball moves as you type in the password field
  - Toggle between showing/hiding password
- 🎨 **Tailwind CSS**: Fully styled with utility-first CSS
- 📝 **TypeScript**: Type-safe code with full TypeScript support
- 🔤 **Custom Fonts**: Inter, IBM Plex Serif, and IBM Plex Mono from Google Fonts
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 📱 **Responsive**: Works seamlessly on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd next-login
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
next-login/
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout with font configuration
│       ├── page.tsx           # Login page component
│       └── globals.css        # Global styles with Tailwind directives
├── public/                    # Static assets
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
└── next.config.mjs            # Next.js configuration
```

## Key Features Explained

### Animated Eye Icon

The eye icon includes three interactive behaviors:

1. **Password Toggle**: Click the eye to show/hide password
2. **Eyeball Movement**: The pupil moves horizontally as you type (up to 12 characters)
3. **Blinking Animation**: The eye blinks naturally at random intervals (3-6 seconds)

### Custom Fonts

Three Google Fonts are configured:
- **Inter**: Primary sans-serif font
- **IBM Plex Serif**: Serif font option
- **IBM Plex Mono**: Monospace font option

Access them via Tailwind classes: `font-inter`, `font-serif`, `font-mono`

## Build for Production

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Customization

### Colors

The color scheme uses Tailwind's indigo palette. To change colors, modify the Tailwind classes in `src/app/page.tsx`:

- Primary color: `indigo-500`
- Hover color: `indigo-600`
- Background gradient: `from-blue-200 via-indigo-200 to-purple-200`

### Fonts

To change fonts, edit `src/app/layout.tsx` and update the Google Fonts imports.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management
- **Google Fonts** - Typography

## License

This project is open source and available for personal and commercial use.

## Original Design

This is a Next.js conversion of the original HTML login page, preserving all design elements and interactive features while adding the benefits of React and Next.js architecture.
