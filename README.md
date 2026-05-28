# LANShare Desktop

[![GitHub license](https://img.shields.io/github/license/howardsun-dev/LANShare-electron)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/howardsun-dev/LANShare-electron)](https://github.com/howardsun-dev/LANShare-electron/issues)
[![GitHub stars](https://img.shields.io/github/stars/howardsun-dev/LANShare-electron)](https://github.com/howardsun-dev/LANShare-electron/stars)
[![GitHub last commit](https://img.shields.io/github/last-commit/howardsun-dev/LANShare-electron)](https://github.com/howardsun-dev/LANShare-electron/commits/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/howardsun-dev/LANShare-electron/actions)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)](https://github.com/howardsun-dev/LANShare-electron/releases)

## Overview

**LANShare Desktop** is a cross-platform Electron wrapper for [LANShare](https://github.com/howardsun-dev/LANShare) that provides a native desktop experience for local network file sharing on Windows, macOS, and Linux.

## ✨ Key Features

- **Native Desktop App** - Runs as a standalone application instead of browser tab
- **Auto-detected Local IP** - Automatically shows your machine's LAN IP for easy sharing
- **Browser-Based Control UI** - Familiar interface wrapped in Electron container
- **Cross-Platform Release Builds** - GitHub Actions generates installers for:
  - Windows (.exe, .msi, .zip)
  - macOS (.dmg, .zip)
  - Linux (AppImage, .deb, .zip)
- **Path Traversal Protection** - Inherits security from LANShare core
- **Read-Only File Serving** - No uploads, deletes, or modifications allowed
- **Automatic Updates** - Ready for auto-update implementation via electron-updater

## 🔒 Security Notes

**Important**: LANShare is designed for **trusted networks only**:
- No authentication mechanism (intended for LAN use behind firewalls)
- Anyone on the same network who can reach the host/port can access shared files
- The control UI binds to `127.0.0.1` (localhost-only) for security
- The file server binds to `0.0.0.0` to allow LAN device access
- **Do NOT port-forward or expose to public internet**

## 🚀 Quick Start

### Development
```bash
# Clone and install
git clone https://github.com/howardsun-dev/LANShare-electron.git
cd LANShare-electron
npm install

# Start in development mode
npm start
```

### Production
Download latest release from [GitHub Releases](https://github.com/howardsun-dev/LANShare-electron/releases):
- Windows: Run the .exe installer
- macOS: Open the .dmg and drag to Applications
- Linux: Download the AppImage and make executable (`chmod +x`)

## 📦 What's Included

- `src/` - Main Electron application code
- `preload.js` - Secure context bridge between renderer and main processes
- GitHub Actions workflow for building release artifacts on all platforms
- Package configuration for electron-builder

## 💼 Perfect For

- Users who prefer native desktop apps over browser tabs
- Teams needing simple LAN file sharing without complex setup
- Demonstrating Electron + Node.js desktop application skills
- Learning cross-platform desktop development with Electron

**[View Source](https://github.com/howardsun-dev/LANShare-electron)** | **[Download Releases](https://github.com/howardsun-dev/LANShare-electron/releases)** | **[Report Issue](https://github.com/howardsun-dev/LANShare-electron/issues)**
