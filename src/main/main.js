const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
let win

function createWindow() {
  win = new BrowserWindow({
    title: 'File Manager',
    width: 800,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, '..', 'preload', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, '..', '..', 'dist', 'renderer', 'index.html'))
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.handle('openDir', async () => {
  const entries = ['src', 'index.html', 'index.js']

  return entries.map((entry) => {
    const lastDotIndex = entry.lastIndexOf('.')
    const isDir = !entry.includes('.')
    return {
      name: entry.slice(0, isDir ? entry.length + 1 : lastDotIndex),
      extension: !isDir ? entry.slice(lastDotIndex) : '',
      type: isDir ? 'directory' : 'file'
    }
  })
})

app.commandLine.appendSwitch('disable-site-isolation-trials')

app.whenReady().then(createWindow)

