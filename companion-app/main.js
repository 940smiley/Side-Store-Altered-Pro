// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarStyle: 'hiddenInset', // Modern title bar on macOS
    webPreferences: {
      nodeIntegration: false,    // Integrated security best practice
      contextIsolation: true,    // Protect the renderer from the main process
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// IPC Handlers
ipcMain.on('ipa-action', (event, arg) => {
  console.log('Main process received ipa-action:', arg)
  // TODO: Implement logic
})

ipcMain.on('dylib-action', (event, arg) => {
  console.log('Main process received dylib-action:', arg)
})

ipcMain.on('shortcut-action', (event, arg) => {
  console.log('Main process received shortcut-action:', arg)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
