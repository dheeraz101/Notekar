# Security Policy: NoteKar

NoteKar takes software security and user privacy seriously. Because NoteKar is an **offline-first application**, user timestamps, notes, and local configurations reside strictly on client devices (using browser IndexedDB / `localStorage` for the Web PWA, and Isar / `SharedPreferences` for the Android app).

---

## Supported Versions

Security patches and maintenance are provided for active channels:

| Version Channel | Supported |
| :--- | :--- |
| Latest Active Release (v7.x Android / v3.x PWA) | :white_check_mark: |
| Active Beta Releases | :white_check_mark: |
| Older Legacy Versions | :x: |

---

## Reporting a Vulnerability

If you discover a security vulnerability or potential privacy issue in NoteKar, please **do not open a public GitHub issue**. Instead, report it privately to the maintainer:

- 📧 **Email:** [yabp.support@gmail.com](mailto:yabp.support@gmail.com)

### Please Include:
- A clear description of the vulnerability and its potential impact.
- Steps to reproduce or proof-of-concept payload/code.
- Browser/OS or Android device details where the issue was observed.
- ⚠️ **Redaction Warning:** Do not attach unredacted personal logs, private notes, tokens, or identifiers.

Reports are reviewed on a best-effort basis, with critical fixes prioritized for subsequent releases.

---

## Security Best Practices for Users
- Always access NoteKar over secure HTTPS protocols ([https://notekarapp.vercel.app/](https://notekarapp.vercel.app/)).
- Keep your web browser and operating system updated.
