# Side-Store-Altered-Pro - Technical Documentation  
  
## Project Overview  
  
Side-Store-Altered-Pro is an iOS application and companion toolset that enables users to:  
- Download and install IPA files  
- Copy installed applications' IPA files  
- Apply modifications/tweaks to applications  
- Re-bundle and sign applications  
- Install modified applications overwriting originals  
- Create and manage iOS shortcuts using drag-and-drop or natural language  
  
## Architecture  
  
### iOS Application  
The iOS app will handle:  
- IPA installation and management  
- Application copying and extraction  
- Integration with iOS shortcuts  
- Communication with the companion app 
  
### Companion Application  
The cross-platform companion app (Windows, macOS, Linux) will handle:  
- Connecting to iOS devices  
- Copying applications from iOS devices  
- Injecting dylibs into IPA files using tools like yololib and opainject  
- Re-bundling and re-signing IPA files  
- Installing IPAs to iOS devices  
- Managing iOS shortcuts creation  
  
## Key Features  
  
### IPA Management  
- Download IPA files from various sources  
- Extract IPAs from installed applications  
- Modify application bundles  
- Re-sign applications with user certificates  
  
### Dylib Injection  
- Integration with tools like yololib and opainject  
- Ability to inject custom dylibs into applications  
- Support for common tweak injection patterns  
  
### iOS Shortcuts  
- Drag and drop interface for Windows applications  
- Natural language processing for shortcut creation  
- AI-powered shortcut generation  
- Integration with iOS Shortcuts app  
  
## Implementation Plan  
  
### Phase 1: Basic IPA Management  
- iOS app for basic IPA installation  
- Companion app for IPA transfer  
- Basic signing capabilities  
  
### Phase 2: Dylib Injection  
- Integration with injection tools  
- UI for selecting and injecting dylibs  
- Testing and validation  
  
### Phase 3: iOS Shortcuts  
- Natural language processing  
- Drag and drop interface  
- Shortcut management  
  
### Phase 4: Advanced Features  
- AI-powered shortcut generation  
- Advanced tweak management  
- Enhanced UI/UX  
  
## Technologies Used  
  
### iOS  
- Swift/UIKit for the iOS application  
- iOS Shortcuts framework  
- Certificate management APIs  
  
### Companion App  
- Electron for cross-platform desktop app  
- React for UI components  
- Node.js for system-level operations  
- Integration with iOS tools  
  
### AI/ML  
- Natural language processing for shortcut creation  
- Potential integration with LLMs for intelligent shortcut generation  
  
## Dependencies  
  
- [iloader](https://github.com/nab138/iloader) - For iOS application installation concepts  
- [ShortcutsExample](https://github.com/mralexhay/ShortcutsExample) - For iOS shortcuts integration  
- [yololib](https://github.com/KJCracks/yololib) - For dynamic library injection  
- [opainject](https://github.com/opa334/opainject) - For process injection  
- [SideStore](https://apps.sidestore.io/) - For installation concepts 
