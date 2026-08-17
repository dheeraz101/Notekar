# NoteKar

> **A minimal, elegant timestamp logger for capturing moments in time.** Zero friction. One tap. 100% Offline-first.

![version](https://img.shields.io/badge/version-3.2.7%20PWA-blue) ![android](https://img.shields.io/badge/Android%20Releases-v4.0.4%2B-green) ![license](https://img.shields.io/badge/license-MIT-green) ![privacy](https://img.shields.io/badge/privacy-100%25%20Offline-brightgreen)

---

> [!IMPORTANT]
> # 📢 **New Version Release Announcement**  
> NoteKar has officially upgraded to a **Native Android Application**!  
>
> **All new version releases, APK downloads, and active feature updates are now hosted on the [NoteKar Android Repository](https://github.com/dheeraz101/Notekar-Android).**  
>
> 👉 Please visit the **[NoteKar Android Repository](https://github.com/dheeraz101/Notekar-Android)** for the latest release downloads, release notes, and mobile application source code.

---

## 🔒 Privacy & Legal Policy

NoteKar is built with a **strict privacy-by-default and offline-first philosophy**. Your data never leaves your device unless you explicitly export it.

- 🛡️ **[Privacy Policy](privacy.html)**: Read our in-depth privacy policy (Web PWA & Android App).
- 📜 **[Terms of Use](terms.html)**: Review the terms of service and MIT license terms.

---

## ☕ Support

If NoteKar helps you, you can support the project here:

[![Buy Me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/dheeraz)
[![Buy Me A Chai](https://buymeachai.ezee.li/assets/images/buymeachai-button.png)](https://buymeachai.ezee.li/dheeraz)

Your support helps keep NoteKar free, offline-first, and actively maintained.

---

## 🎯 Overview

**NoteKar** is an instant timestamp logging application available as both a **Web Progressive Web App (PWA)** and a **Native Android Application**. Whether you're tracking work sessions, logging study time, or simply recording when things happen, NoteKar provides a frictionless experience: tap to log, long-press to add context, and access rich history views.

Built as part of the [YABP (Yet Another Boring Project)](https://yabp.netlify.app/?verify=https://notekarapp.vercel.app/) initiative, NoteKar operates entirely offline with zero cloud backend or user tracking.

- 🌐 **Hosted Web PWA & Site:** [https://dheeraz101.github.io/Notekar/](https://dheeraz101.github.io/Notekar/)
- 📱 **Native Android Releases & Source Code:** [https://github.com/dheeraz101/Notekar-Android](https://github.com/dheeraz101/Notekar-Android)

---

## ✨ Key Features

- **Instant Tap Logging**: One tap = one timestamp recorded instantly.
- **Dual Operating Modes**: Two-way (IN/OUT session pairs) or Single (one-shot) logging.
- **Rich History View**: Filter by timeframe (Today, This Week) or entry type (IN, OUT, Single, Notes).
- **Optional Notes**: Long-press any entry to add contextual notes.
- **Configurable Tap Delay**: Set minimum tap intervals (0s-1 minute) to prevent accidental double-taps.
- **Offline-First Storage**: All data stored locally via IndexedDB (Web) and Hive (Android Native).
- **Android System Backup Support**: Compatible with standard Android OS Auto Backup (Google Drive system backup).
- **Minimal Permissions**: Internet access strictly used for software update checks & bug notices; Notification permission for release alerts & reminders.
- **Data Export & Control**: Export entries anytime in CSV or JSON formats; clear or reset data with one tap.
- **Zero Backend & Zero Ads**: No cloud databases, no analytics trackers, no account registration.

---

## 📦 Project Structure (Website & Web PWA)

```
.
├── index.html              # Main Single-Page Web App (HTML, CSS, JS integrated)
├── privacy.html            # Dedicated Privacy Policy page (Web & Android)
├── terms.html              # Dedicated Terms of Use page (Web & Android)
├── sw.js                   # Service Worker (offline PWA caching)
├── manifest.json           # PWA Web App Manifest
├── health.json             # Version and release channel tracking
├── releases/
│   ├── stable.js           # Production release module
│   └── beta.js             # Beta release module
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Community Code of Conduct
├── SECURITY.md            # Security policy & vulnerability reporting
├── PRIVACY.md              # Privacy reference
├── TERMS.md                # Terms reference
├── README.md               # Website documentation
├── LICENSE                 # MIT License
└── .github/                # Funding & GitHub Issue/PR templates
```

---

## 🚀 Getting Started (Web PWA)

### Option 1: Use the Deployed App
Visit the live Web PWA: [https://dheeraz101.github.io/Notekar/](https://dheeraz101.github.io/Notekar/)

### Option 2: Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/dheeraz101/Notekar.git
   cd Notekar
   ```

2. **Start a local web server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # OR Node.js
   npx http-server
   ```

3. **Open in browser:** `http://localhost:8000`

---

## 📱 Android Releases

All native Android application builds, APK releases, and active feature development are published on the **[NoteKar Android Repository](https://github.com/dheeraz101/Notekar-Android)**.

- **Offline-First:** Hive local database.
- **Android Auto-Backup:** Supports standard Android system backup.
- **Permissions:** Internet permission (update checks & bug announcements), Notification permission.
- **Releases Page:** [https://github.com/dheeraz101/Notekar-Android/releases](https://github.com/dheeraz101/Notekar-Android/releases)

---

## 🤝 Contributing

Contributions are welcome! Please review our **[CONTRIBUTING.md](CONTRIBUTING.md)** and **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** before submitting pull requests.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **Made with ❤ in India**
- Part of the [YABP (Yet Another Boring Project)](https://yabp.netlify.app/?verify=https://notekarapp.vercel.app/) initiative
- Maintained by [Dheeraz](https://github.com/dheeraz101)
