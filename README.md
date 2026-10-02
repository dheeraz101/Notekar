# NoteKar

> **Sovereign Timestamp Logger: Your time. Your truth. Your device.** Zero friction. One tap. 100% Offline-first.

![version](https://img.shields.io/badge/version-3.2.7%20PWA-blue) ![android](https://img.shields.io/badge/Android%20Releases-v7.5.6%2B-green) ![license](https://img.shields.io/badge/license-MIT-green) ![privacy](https://img.shields.io/badge/privacy-100%25%20Offline-brightgreen)

---

> [!IMPORTANT]
> **NoteKar has evolved.** The Android application is the primary development focus, with full native features including Life Audit, Sobriety Companion, Executive Intelligence Hub, and more.
>
> 👉 **[NoteKar Android Repository](https://github.com/dheeraz101/Notekar-Android)**: Latest releases, APK downloads, and source code.

---

## 🌐 What is This Repo?

This repository contains the **NoteKar Companion Web App**, a Progressive Web App (PWA) that mirrors the core timestamp logging experience in your browser. It also hosts the **product website**, privacy policy, and terms of use.

| Resource | Link |
|:---------|:-----|
| **Live Web App** | [notekarapp.vercel.app](https://notekarapp.vercel.app/) |
| **Landing Page** | [notekarapp.vercel.app/landing.html](https://notekarapp.vercel.app/landing.html) |
| **Privacy Policy** | [notekarapp.vercel.app/privacy.html](https://notekarapp.vercel.app/privacy.html) |
| **Terms of Use** | [notekarapp.vercel.app/terms.html](https://notekarapp.vercel.app/terms.html) |
| **Android App** | [github.com/dheeraz101/Notekar-Android](https://github.com/dheeraz101/Notekar-Android) |

---

## ✨ Key Features (Web PWA)

- **Instant Tap Logging**: One tap = one timestamp recorded instantly.
- **Dual Modes**: Two-way (IN/OUT session pairs) or Single (one-shot) logging.
- **Rich History**: Filter by timeframe or entry type with full search.
- **Optional Notes**: Long-press any entry to add context.
- **Configurable Tap Delay**: Prevent accidental double-taps (0s-1 minute).
- **Offline-First Storage**: All data stored locally via IndexedDB. Zero cloud.
- **Data Export**: CSV and JSON export. Your data, your format.
- **Zero Tracking**: No analytics, no ads, no accounts, no telemetry.

---

## 🔒 Privacy & Legal

NoteKar is built with a **strict privacy-by-default philosophy**. Your data never leaves your device.

- 🛡️ **[Privacy Policy](https://notekarapp.vercel.app/privacy.html)**: How NoteKar keeps your data 100% offline.
- 📜 **[Terms of Use](https://notekarapp.vercel.app/terms.html)**: MIT License and usage terms.

---

## 📦 Project Structure

```
.
├── landing.html            # Product landing page
├── index.html              # Web PWA application (single-page app)
├── privacy.html            # Privacy Policy page
├── terms.html              # Terms of Use page
├── sw.js                   # Service Worker (offline PWA caching)
├── manifest.json           # PWA Web App Manifest
├── health.json             # Version and release channel tracking
├── changelog.html          # Version changelog viewer
├── releases/
│   ├── stable.js           # Production release metadata
│   └── beta.js             # Beta release metadata
├── app_icons/              # Branded app icon assets
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Community Code of Conduct
├── SECURITY.md             # Security policy
└── LICENSE                 # MIT License
```

---

## 🚀 Getting Started

### Option 1: Use the Live App
Visit **[notekarapp.vercel.app](https://notekarapp.vercel.app/)**: works instantly, installs as a PWA.

### Option 2: Run Locally
```bash
git clone https://github.com/dheeraz101/Notekar.git
cd Notekar

# Python 3
python -m http.server 8000

# OR Node.js
npx http-server
```
Open `http://localhost:8000` in your browser.

---

## 📱 Android Application

The full-featured **NoteKar Android** app is developed in a separate repository with advanced features including Life Audit, Sobriety Companion, Executive Intelligence Hub, AES-256 encryption, and more.

👉 **[NoteKar Android Repository](https://github.com/dheeraz101/Notekar-Android)**
📥 **[Download Latest APK](https://github.com/dheeraz101/Notekar-Android/releases/latest)**

---

## ☕ Support

If NoteKar brings value to your daily workflow, consider supporting its open-source journey:

<p align="center">
  <a href="https://www.buymeacoffee.com/dheeraz">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="190" alt="Buy Me a Coffee" />
  </a>
  &nbsp;&nbsp;
  <a href="https://buymeachai.ezee.li/dheeraz">
    <img src="https://buymeachai.ezee.li/assets/images/buymeachai-button.png" width="190" alt="Buy Me A Chai" />
  </a>
</p>

---

## 🤝 Contributing

Contributions are welcome! Please review **[CONTRIBUTING.md](CONTRIBUTING.md)** and **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** before submitting pull requests.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## ⚖️ Legal Disclaimer & Trademark Notice

> [!IMPORTANT]
> **Independent Open-Source Instrument**: NoteKar is an independent sovereign utility created under the **[YABP (Yet Another Boring Project)](https://yabp.netlify.app/?verify=https://notekarapp.vercel.app/)** initiative. NoteKar is not affiliated with, authorized, maintained, sponsored, or endorsed by Google LLC, Apple Inc., or any of their affiliates or subsidiaries.
> 
> "Android", "Google Play", and "Google Drive" are registered trademarks of Google LLC. "Apple", "iOS", and "iPhone" are registered trademarks of Apple Inc. All other trademarks belong to their respective owners.
> 
> **Design Philosophy & Attribution**: NoteKar's spatial chronometer typography, dynamic tactile feedback, fluid transitions, and glassmorphic bottom sheets are inspired by the design principles of Apple Human Interface Guidelines (HIG) and iOS modern interfaces. NoteKar is an independent sovereign craft built natively for Android and modern web browsers. It does not use, include, copy, or redistribute proprietary Apple or Google code, assets, or services.
> 
> **Data Sovereignty Guarantee**: All timestamp captures, session durations, and user notes are processed and stored 100% locally on your device (via browser IndexedDB on the web, and AES-256 encrypted Hive storage on Android). NoteKar does not maintain cloud database relays, telemetry collectors, tracking SDKs, or background sync servers.

---

## 🙏 Credits

- **Made with ❤ in India**
- Part of the **[YABP Initiative](https://yabp.netlify.app/?verify=https://notekarapp.vercel.app/)**
- Maintained by [Dheeraz](https://github.com/dheeraz101)
