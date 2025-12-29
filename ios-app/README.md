# SideStore Altered Pro | iOS App

This is the main iOS application for SideStore Altered Pro.

## Features
- IPA Download and Installation
- Installed App IPA Extraction
- On-device Tweak Injection (Coming Soon)
- AI-powered Shortcut Integration

## Development
- This project uses **XcodeGen** to manage the `.xcodeproj` file.
- To generate the project locally (on macOS):
  ```bash
  brew install xcodegen
  xcodegen generate
  ```
- The project is configured for **Fake Signing** using `ldid` on GitHub Actions.
- Supports iOS 15.0 and above.

## CI/CD
- A GitHub Action is configured in `.github/workflows/ios_build.yml`.
- It automatically builds and signs the app with self-signed entitlements using `ldid`.
- The resulting `.ipa` is available as a workflow artifact.
