# LAN File Server Desktop

Electron desktop wrapper for [`howardsun-dev/lan-file-server`](https://github.com/howardsun-dev/lan-file-server).

It starts the existing local control server inside an Electron app window, then lets you pick a folder and expose it to devices on the same LAN.

## What it does

- Opens a native desktop app instead of a browser tab
- Lets you browse this machine's folders from the control UI
- Starts/stops the LAN file server from the app
- Shows local and LAN URLs for downloads
- Serves read-only files with path traversal protection
- Keeps the control UI bound to `127.0.0.1`
- Builds release installers for Windows, macOS, and Linux via GitHub Actions

## Security notes

This is a convenience LAN file server, not an internet-facing hardened gateway.

- It has no authentication.
- Anyone who can reach the file server host/port can read the shared files.
- The desktop control UI is local-only, but the file server binds to `0.0.0.0` by default so LAN devices can download.
- It does not allow writes, deletes, uploads, or directory traversal outside the shared root.
- Use trusted networks. Do not port-forward it to the public internet.

## Development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run check       # lint + tests + TypeScript build
npm run build       # compile TypeScript to dist/
npm start           # run Electron from compiled dist/
npm run dist        # package for current OS
npm run dist:linux  # Linux AppImage/deb/rpm
npm run dist:mac    # macOS dmg/zip
npm run dist:win    # Windows NSIS installer + portable exe
```

## Release pipeline

The release workflow builds all desktop targets and uploads them to the GitHub Release page.

Create a release by pushing a semver tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions then builds:

- Windows: NSIS installer + portable `.exe`
- macOS: `.dmg` + `.zip`
- Linux: `.AppImage`, `.deb`, `.rpm`

The workflow uses the built-in `GITHUB_TOKEN`; no extra GitHub secret is required for unsigned releases. macOS code signing/notarization is intentionally disabled until Apple Developer credentials are configured.

## Project structure

```text
electron/
  main.ts       Electron main process: starts control server and opens BrowserWindow
src/
  control.ts   Local control UI and start/stop API
  server.ts    Express app, file streaming, directory UI
  paths.ts     route normalization and traversal protection
  html.ts      HTML escaping and byte formatting helpers
  lan.ts       LAN address discovery
tests/
  unit/         pure helper/package wiring tests
  integration/  HTTP/control API behavior tests via supertest
  functional/   browser flow tests via Playwright
```

## Upstream source

This repo was derived from `howardsun-dev/lan-file-server` and keeps the server/control code in-tree so desktop releases are self-contained.

## License

MIT
