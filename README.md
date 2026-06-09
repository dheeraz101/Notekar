# NoteKar

> **A minimal, elegant timestamp logger for capturing moments in time.** Zero friction. One tap. Offline-first.

![version](https://img.shields.io/badge/version-3.2.7-blue) ![license](https://img.shields.io/badge/license-MIT-green) ![pwa](https://img.shields.io/badge/PWA-ready-brightgreen)

---

## ☕ Support

If NoteKar helps you, you can support the project here:

[![Buy Me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/dheeraz)

Your support helps keep NoteKar free, offline-first, and actively maintained.

---

## 🎯 Overview

**NoteKar** is a Progressive Web App (PWA) designed for instant moment capture. Whether you're tracking work sessions, logging study time, or simply recording when things happen, NoteKar provides a frictionless experience: tap to log, long-press to add context, and access rich history views.

Built as part of the [YABP](https://yabp.netlify.app/) initiative, this app demonstrates modern web standards while maintaining a lightweight footprint—everything runs locally in your browser with IndexedDB persistence.

**Current version:** 3.2.7 (stable)

---

## ✨ Key Features

- **Instant Tap Logging** — One tap = one timestamp recorded instantly
- **Dual Operating Modes** — Two-way (IN/OUT sessions) or Single (one-shot) logging
- **Rich History View** — Filter by timeframe (Today, This Week) or entry type (IN, OUT, Single, Notes)
- **Optional Notes** — Long-press any entry to add contextual notes
- **Configurable Delays** — Set minimum tap intervals (0s–1 minute) to prevent accidental double-taps
- **Offline-First** — All data stored locally via IndexedDB; works completely offline
- **PWA Support** — Install as a native-like app on mobile or desktop; service worker for offline functionality
- **Responsive Design** — Beautiful, minimalist UI inspired by macOS/iOS design philosophy
- **Zero Backend** — No server, no sync, no privacy concerns—just your device

---

## 📦 Project Structure

```
.
├── index.html              # Single-file app (HTML, CSS, JS integrated)
├── sw.js                   # Service Worker (offline support)
├── manifest.json           # PWA manifest (app metadata & icons)
├── health.json             # Version and release channel tracking
├── releases/
│   ├── stable.js           # Production release module
│   └── beta.js             # Beta release module
├── README.md               # This file
└── [icons & assets]        # App icons (192px, 512px, maskable variants)
```

---

## 🚀 Getting Started

### Option 1: Use the Hosted App
Visit the deployed version on GitHub Pages (if configured).

### Option 2: Run Locally

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/notekar.git
   cd notekar
   ```

2. **Start a local web server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # OR Node.js (with `http-server`)
   npx http-server
   
   # OR using PHP
   php -S localhost:8000
   ```

3. **Open in your browser**
   ```
   http://localhost:8000
   ```

### Option 3: Install as PWA
1. Visit the app URL (local or hosted)
2. Open browser menu → **Install app** (or **Add to Home Screen** on iOS)
3. Launch from your home screen like any native app

---

## 💡 Usage Guide

### Basic Workflow
1. **Tap the main area** to log a timestamp
   - The timestamp is immediately saved to your local database
   - Haptic feedback confirms the action

2. **Long-press to add a note**
   - A note input dialog appears
   - Add context (e.g., "Meeting started", "Break time") and confirm
   - Note is linked to the nearest timestamp

3. **Access History** (tap history icon in toolbar)
   - View all logged entries
   - Apply filters: All, Today, This Week, IN, OUT, Single, Notes
   - Tap any entry to view or edit details
   - Swipe to delete entries (with confirmation)

4. **Configure Settings** (tap gear icon in toolbar)
   - **Mode Toggle** — Switch between Two-way and Single mode
   - **Tap Delay** — Set minimum interval between taps (prevents accidental rapid logging)
   - **Clear Data** — Reset all entries (with warning)

### Two-Way Mode vs. Single Mode
- **Two-Way**: Track session pairs (IN/OUT). Useful for work shifts, study sessions, or time tracking.
- **Single**: Log individual moments without pairing. Useful for episodic events or annotations.

---

## 🛠️ Development

### Technology Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Storage**: IndexedDB via [Dexie](https://dexie.org/) (lightweight wrapper)
- **PWA**: Service Worker (sw.js), Web App Manifest
- **Icons**: PNG (192px, 512px variants, maskable support)

### Data Architecture

#### IndexedDB Schema
```javascript
// Table: entries
{
  id: number (auto-increment),
  timestamp: ISO 8601 string,
  type: "IN" | "OUT" | "SINGLE",
  date: YYYY-MM-DD string,
  note: string (optional),
  createdAt: ISO 8601 string
}
```

#### LocalStorage Keys
- `m-delay` — User-selected tap delay in milliseconds

### Key Code Sections

**Data Persistence** (in `index.html`):
- Dexie initialization and schema definition
- Add/update/delete entry operations
- Query methods for filtering (date range, type, etc.)

**UI State Management**:
- Mode toggle (Two-way ↔ Single)
- Filter application in history view
- Settings persistence

**Service Worker** (`sw.js`):
- Cache-first strategy for assets
- Network fallback to cached app shell
- Offline functionality

### Development Tips

1. **Inspect IndexedDB**: Chrome DevTools → Storage → IndexedDB → NoteKar
2. **Test Service Worker**: Chrome DevTools → Application → Service Workers
3. **Simulate Offline**: Chrome DevTools → Network → Offline checkbox
4. **Debug Logs**: Check browser console for Dexie and app lifecycle messages

---

## 📢 Deployment to GitHub Pages

### Step-by-Step Setup

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NoteKar v3.2.7"
   git remote add origin https://github.com/yourusername/notekar.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment", select:
     - **Source**: Deploy from a branch
     - **Branch**: main (root directory)
   - Click Save

3. **Access your app**
   ```
   https://yourusername.github.io/notekar/
   ```

4. **(Optional) Configure a custom domain**
   - Add a `CNAME` file with your domain name
   - Update DNS records at your domain registrar

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### Reporting Issues
- Use GitHub Issues to report bugs or request features
- Include screenshots, browser/OS info, and steps to reproduce

### Submitting Changes
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Keep the single-file nature of the app where possible
   - Test thoroughly (desktop & mobile)
   - Include screenshots for UI changes
4. **Commit with clear messages**
   ```bash
   git commit -m "Add [feature]: brief description"
   ```
5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style
- Use modern ES6+ syntax
- Keep functions small and focused
- Comment complex logic
- Test in multiple browsers (Chrome, Firefox, Safari)
- Verify PWA functionality offline

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software for any purpose, provided you include the original license and copyright notice.

---

## 🙏 Attribution & Credits

- **Made with ❤ in India**
- Part of the [YABP (Yet Another Boring Project)](https://yabp.netlify.app/) initiative
- Built with [Dexie.js](https://dexie.org/) for IndexedDB management
- Typography: [Inter](https://rsms.me/inter/) font family
- Inspired by macOS and iOS design principles

---

## 📝 Changelog

### v3.2.7 (Latest)
- Stable release

### v3.2.0-beta.5
- Beta release channel

See `health.json` for version tracking across release channels.

---

## 🔗 Resources

- [Dexie.js Documentation](https://dexie.org/)
- [Web App Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)

---

## ❓ FAQ

**Q: Will my data sync across devices?**  
A: No. NoteKar stores data locally on each device. For multi-device sync, consider exporting your data and importing on another device (feature planned for future versions).

**Q: Can I export my data?**  
A: Yes, through the browser's IndexedDB export features or by using the browser DevTools to export entries.

**Q: Does NoteKar collect any personal data?**  
A: No. All data stays on your device. No analytics, no tracking, no servers.

**Q: What browsers are supported?**  
A: Chrome/Edge (90+), Firefox (88+), Safari (14+). PWA support varies by browser.

---

**Last updated:** June 2026  
**Maintained by:** YABP Initiative

