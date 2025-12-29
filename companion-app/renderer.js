// This file contains the JavaScript code for the renderer process
const electronAPI = window.electronAPI;

// Event listeners for buttons
document.getElementById('ipa-btn').addEventListener('click', () => {
  console.log('IPA Management clicked');
  electronAPI.send('ipa-action', { type: 'open_manager' });
});

document.getElementById('dylib-btn').addEventListener('click', () => {
  console.log('Dylib Injection clicked');
  electronAPI.send('dylib-action', { type: 'open_config' });
});

document.getElementById('shortcuts-btn').addEventListener('click', () => {
  console.log('iOS Shortcuts clicked');
  electronAPI.send('shortcut-action', { type: 'open_creator' });
});

// Sidebar navigation simulation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

console.log('SideStore Altered Pro Companion App Loaded');
