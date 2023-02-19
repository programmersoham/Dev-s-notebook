// renderer

const { app, BrowserWindow, session } = require('electron');



console.log('renderer.js loaded');

function createWindow () {
  console.log('createWindow function called');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html');
  
  // Open dev tools
  // win.webContents.openDevTools();

  // Get the default session
  const defaultSession = session.defaultSession;

  // Clear cache
  defaultSession.clearCache(() => {
    console.log('Cache cleared!');
  });
}

app.whenReady().then(() => {
  createWindow();
});
