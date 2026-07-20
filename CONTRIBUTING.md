# Contributing to NoteKar (Website & PWA)

Thank you for your interest in contributing to NoteKar! As part of the **YABP (Yet Another Boring Project)** initiative, NoteKar thrives on open-source community collaboration.

---

## 📜 Code of Conduct

Please review and adhere to our **[Code of Conduct](CODE_OF_CONDUCT.md)** in all interactions within this repository.

---

## 🛠️ Getting Started & Local Setup

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Notekar.git
   cd Notekar
   ```
3. **Start a local web server**:
   ```bash
   # Python 3
   python -m http.server 8000

   # OR Node.js
   npx http-server
   ```
4. **Open in your browser**: Navigate to `http://localhost:8000`.

---

## 🚀 How to Contribute

### Reporting Bugs
- Search existing [GitHub Issues](https://github.com/dheeraz101/Notekar/issues) before opening a new issue.
- Use our **Bug Report** template to provide detailed steps, browser version, and OS details.

### Requesting Features
- We love new ideas! Check open discussions or submit a **Feature Request** issue describing the goal and use case.

### Submitting Pull Requests
1. Create a descriptive topic branch:
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
2. Make your code changes adhering to our single-file PWA architecture where appropriate.
3. Test locally across Chrome, Firefox, and mobile viewports.
4. Ensure offline PWA functionality works smoothly via Service Worker (`sw.js`).
5. Commit with clear, concise messages:
   ```bash
   git commit -m "Add feature: concise description of change"
   ```
6. Push to your branch and open a Pull Request against the `main` branch.

---

## 🎨 Coding & Styling Guidelines

- **Vanilla Stack:** Pure JavaScript (ES6+), HTML5, and standard CSS with custom properties (`:root` tokens). Avoid adding heavy external CSS frameworks unless requested.
- **Offline-First:** All persistent data must store locally in IndexedDB / LocalStorage.
- **Typography & Aesthetics:** Maintain sleek dark mode aesthetics using Inter font and glassmorphic card elements.

---

## ☕ Questions & Support

Reach out via [Email](mailto:yabp.support@gmail.com) or join discussions on [GitHub](https://github.com/dheeraz101/Notekar).
