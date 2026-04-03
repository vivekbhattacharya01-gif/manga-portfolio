# 🖤 Manga Portfolio — Vivek Bhattacharya

A unique developer portfolio built as an interactive **Black & White Manga experience**, inspired by the dark and dramatic aesthetics of **Death Note** and **Berserk**. Every section is a new chapter, every scroll triggers a page flip, and every interaction feels like reading a premium manga volume.

🔗 **Live Demo:** [manga-portfolio.netlify.app](https://manga-portfolio.netlify.app)

---

## 📖 Preview

> *"Not your typical portfolio — this one reads like a manga."*

The portfolio is structured as a manga book with:
- Dramatic **page flip animations** between sections
- Authentic **manga panel grid layouts**
- **Dark/Light theme** with ink-wash wipe transition
- **Chapter title pages** before each section
- Speech bubbles, speed lines, halftone dot patterns

---

## ✨ Features

- 📄 **Page Flip Transitions** — 3D book page turn between every section
- 🖤 **Dual Theme** — Paper Mode (light) and Night Reading Mode (dark)
- 🎨 **Manga Panel Layouts** — Irregular grid layouts like real manga pages
- ⚡ **Framer Motion Animations** — Scroll-triggered panel slam-ins, staggered reveals
- 💬 **Speech Bubble Bio** — Character speaks directly to the reader
- ⚔️ **Quest Board Projects** — Projects displayed as manga mission files
- 📜 **Arc-Based Timeline** — Experience shown as manga story arcs
- 📡 **Transmission Contact Form** — Formspree-powered contact section
- 🖱️ **Custom Cursor** — Manga-style cursor effect on desktop
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework |
| **React.js** | UI components |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Icons** | Icons |
| **Formspree** | Contact form |
| **Google Fonts** | Bangers, Kalam, DM Sans |

---

## 📁 Project Structure

```
manga-portfolio/
├── src/
│   ├── components/
│   │   ├── ChapterHero.tsx        # Hero / Prologue section
│   │   ├── ChapterAbout.tsx       # About / Origin Story
│   │   ├── ChapterProjects.tsx    # Projects / Missions
│   │   ├── ChapterExperience.tsx  # Experience / Timeline
│   │   ├── ChapterContact.tsx     # Contact / Final Boss
│   │   ├── Navbar.tsx             # Navigation
│   │   ├── Footer.tsx             # Footer / Epilogue
│   │   ├── InkSplashTransition.tsx # Theme toggle animation
│   │   └── SpineIndicator.tsx     # Volume spine indicator
│   ├── context/                   # Theme context
│   ├── hooks/                     # Custom hooks
│   ├── styles/                    # Global styles
│   └── App.tsx                    # Root component
├── public/                        # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vivekbhattacharya01-gif/manga-portfolio.git
cd manga-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

---

## 🌐 Deployment

### Deploy on Netlify (Recommended)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **"Add new site"** → **"Import from Git"**
4. Select your repository
5. Set build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `.next` or `out` |

6. Click **Deploy** ✅

### Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"** → select repo
3. Vercel auto-detects Next.js — just click **Deploy** ✅

---

## 🎨 Customization

### Change Personal Info
Edit the following files with your details:
- `ChapterHero.tsx` — Name, title, subtitle, social links
- `ChapterAbout.tsx` — Bio, skills, stats
- `ChapterProjects.tsx` — Project cards
- `ChapterExperience.tsx` — Timeline entries
- `ChapterContact.tsx` — Email, Formspree link

### Change Theme Colors
Edit `tailwind.config.js`:
```js
colors: {
  'manga-ink': '#0A0A0A',        // Dark mode text
  'manga-paper': '#F5F0E8',      // Light mode background
  'manga-blood': '#CC0000',      // Accent color
  'manga-offwhite': '#E8E8E8',   // Dark mode text
}
```

### Update Contact Form
Replace the Formspree endpoint in `ChapterContact.tsx`:
```jsx
action="https://formspree.io/f/YOUR_FORM_ID"
```

---

## 📜 Sections (Chapters)

| Chapter | Section | Description |
|---------|---------|-------------|
| Chapter 00 | Hero | Protagonist reveal with glitch animation |
| Chapter 01 | About | Character profile with skills & stats |
| Chapter 02 | Projects | Mission files on the quest board |
| Chapter 03 | Experience | Story arcs on the journey timeline |
| Chapter 04 | Contact | Final boss — send a transmission |
| Epilogue | Footer | End of Volume 01 |

---

## 👨‍💻 Author

**Vivek Bhattacharya**
- Portfolio: [manga-portfolio.netlify.app](https://manga-portfolio.netlify.app)
- GitHub: [@vivekbhattacharya01-gif](https://github.com/vivekbhattacharya01-gif)
- LinkedIn: [vivek-bhattacharya-9a661528a](https://www.linkedin.com/in/vivek-bhattacharya-9a661528a)
- Email: vivekbhattacharya01@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with React & ❤️ — TO BE CONTINUED...
</p>
