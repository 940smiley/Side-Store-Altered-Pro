# Side-Store-Altered-Pro  
  
An iOS application that allows users to download IPAs, copy installed applications' IPA files, recreate them, apply modifications/tweaks, re-bundle/sign them, and install them overwriting the original application. Includes companion apps for Windows, macOS, and Linux (Windows is priority).  
  
## Project Overview  
  
This project combines functionality from various sources:  
- iOS app installation and management capabilities inspired by [iloader](https://github.com/nab138/iloader)  
- iOS shortcut creation similar to [ShortcutsExample](https://github.com/mralexhay/ShortcutsExample)  
- Dynamic library injection capabilities using tools like [yololib](https://github.com/KJCracks/yololib) and [opainject](https://github.com/opa334/opainject)  
  
## Features  
  
### iOS App  
- Download and install IPA files  
- Copy installed applications' IPA files  
- Apply modifications/tweaks to applications  
- Re-bundle and sign applications  
- Install modified applications overwriting originals  
  
### Companion Apps (Windows, macOS, Linux)  
- Copy apps from iOS devices  
- Inject dylibs into IPA files  
- Re-bundle and sign IPAs  
- Install IPAs to iOS devices  
  
### iOS Shortcuts  
- Drag and drop features for Windows applications  
- Natural language shortcut creation using LLM  
- Example: "describe a shortcut"  AI generates iOS shortcut code and saves to shortcuts folder 
  
## Architecture  
  
\`\`\`  
Side-Store-Altered-Pro/  
ÃÄÄ ios-app/                 # iOS application source code  
ÃÄÄ companion-app/           # Cross-platform companion app  
³   ÃÄÄ windows/             # Windows-specific code  
³   ÃÄÄ macos/               # macOS-specific code  
³   ÀÄÄ linux/               # Linux-specific code  
ÃÄÄ docs/                    # Documentation  
ÃÄÄ assets/                  # Project assets  
ÃÄÄ README.md  
ÀÄÄ LICENSE  
\`\`\`  
  
## Getting Started  
  
### Prerequisites  
- iOS development environment (Xcode)  
- For companion apps: Node.js, Electron, or similar cross-platform framework  
  
### Installation  
1. Clone the repository  
2. Install dependencies for each platform  
3. Configure signing certificates for iOS  
  
## Contributing  
  
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.  
  
## License  
  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
  
## Acknowledgments  
  
- [iloader](https://github.com/nab138/iloader) - iOS application installation  
- [ShortcutsExample](https://github.com/mralexhay/ShortcutsExample) - iOS shortcuts  
- [yololib](https://github.com/KJCracks/yololib) - Dynamic library injection  
- [opainject](https://github.com/opa334/opainject) - iOS process injection 
