# Royal Wedding Invitation — React + Tailwind CSS (Production Grade)

A pixel-perfect, high-performance, accessible clone of the royal Indian wedding invitation at [anjaliwedsritesh.pages.dev](https://anjaliwedsritesh.pages.dev), re-architected into modular, production-ready React.js and Tailwind CSS code.

---

## 🌟 Key Architecture & Features

### 1. Centralized Data Architecture (`src/data/weddingData.js`)
All content, couple details, itinerary, venue coordinates, phone numbers, and music mappings are separated cleanly into a single structured configuration store. Modifying names, dates, or ceremonies takes under 2 minutes without touching UI components.

### 2. State & Audio Engine (`src/context/WeddingContext.jsx` & `src/utils/audio.js`)
* **3D Wax Seal Opening:** Custom SVG envelope with authentic gold wax seal button, synthesized Web Audio pop sound, and smooth DOM dismissal.
* **Dynamic Audio Zone Tracking:** Automatically tracks user scroll position with `requestAnimationFrame` debouncing and transitions between 3 audio tracks:
  * **Zone 1 (Blessings):** *Vakratunda Mahakaya*
  * **Zone 2 (Hero, Save the Date, Ceremonies, Venues):** *Tainu Leke*
  * **Zone 3 (Countdown, Thank You):** *Dil Shagna Da*
* **Playback Memory:** Preserves timestamp across zone switches so tracks resume where left off.
* **Autoplay Compliance:** Honors modern browser user-gesture requirements seamlessly.

### 3. Physics & Particle Canvas Engines
* **Falling Rose Petals (`PetalCanvas.jsx`):** 3D rotation, fluttering, sinusoidal drift, and dual petal varieties (rose and gold leaf).
* **Interactive Gold Foil Scratch Card (`SaveTheDateSection.jsx`):** HTML5 Canvas with `destination-out` composite operation, sound synthesis on stroke, and automatic threshold reveal.
* **Celebration Cracker Fireworks Engine (`FireworksCanvas.jsx`):** Multi-stage physics particle explosion with rings, stars, sparks, gravity, and drag.

### 4. Accessibility & Polish
* Semantic HTML5 (`<main>`, `<header>`, `<article>`, `<time>`, `<footer>`).
* ARIA roles (`role="dialog"`, `aria-live`, `aria-label`).
* Full keyboard navigability (`Enter` and `Space` triggers for envelope seal and scratch card).
* Staggered scroll entrance reveals using native `IntersectionObserver` with threshold caching.
* Top-level `ErrorBoundary` for graceful crash handling.

---

## 📁 Project Structure

```
e:\Wedding
├── public/
│   └── assets/
│       ├── images/               # All authentic photography, banners, seals & icons
│       └── music/                # All 3 zone-based MP3 tracks
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorBoundary.jsx # React error boundary fallback UI
│   │   │   └── ScrollReveal.jsx  # Staggered entrance animation wrapper
│   │   ├── BlessingsSection.jsx  # Ganesh emblem, Devanagari typewriter, couple names
│   │   ├── CountdownSection.jsx  # Live countdown timer with drift compensation
│   │   ├── EnvelopeScreen.jsx    # SVG envelope with 3D wax seal button
│   │   ├── EventsSection.jsx     # 3-Day ceremony cards & timeline pills
│   │   ├── FireworksCanvas.jsx   # Particle physics fireworks engine
│   │   ├── HeroSection.jsx       # Royal arch gateway couple portrait
│   │   ├── MusicController.jsx   # Floating gold button with animated equalizer
│   │   ├── PetalCanvas.jsx       # Floating rose petals & gold leaves canvas
│   │   ├── SaveTheDateSection.jsx# Interactive gold foil scratch card
│   │   ├── ThankYouSection.jsx   # Gratitude section & one-touch phone dialers
│   │   └── VenueSection.jsx      # Luxury banquet hall & residences with Google Maps
│   ├── context/
│   │   └── WeddingContext.jsx    # Unified state management for audio and UI
│   ├── data/
│   │   └── weddingData.js        # Single source of truth configuration
│   ├── hooks/
│   │   ├── useCountdown.js       # Production countdown hook
│   │   └── useIntersectionObserver.js # Performant viewport intersection hook
│   ├── utils/
│   │   └── audio.js              # Web Audio API sound synthesizers
│   ├── App.jsx                   # Master layout with scroll observer
│   ├── index.css                 # Custom keyframes, typography & Tailwind layers
│   └── main.jsx
├── index.html                    # SEO meta tags & Google Fonts preload
├── tailwind.config.js            # Royal wedding palette & typography tokens
└── vite.config.js
```

---

## 🚀 Development & Build

### Start Local Development Server:
```bash
npm run dev
```
Runs at [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

### Build for Production:
```bash
npm run build
```
Generates a minified, tree-shaken, compressed bundle in `./dist`.

### Preview Production Build:
```bash
npm run preview
```
