const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");

const path = require("path");
const http = require("http");
const isDev = !app.isPackaged;

let mainWindow;
let serverProcess;

const checkServer = (url, retries = 10) => {
  return new Promise((resolve, reject) => {
    const tryConnect = (attempt) => {
      if (attempt > retries) return reject("Server not responding.");

      const req = http.get(url, () => resolve(true));
      req.on("error", () => {
        console.log(`⏳ Wait server... (try again ${attempt}/${retries})`);
        setTimeout(() => tryConnect(attempt + 1), 1000);
      });
      req.end();
    };

    tryConnect(1);
  });
};

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const serverPath = path.join(process.resourcesPath, "server.js");
  console.log("Server Path:", serverPath);
  if (isDev) {
    console.log("Development Mode: http://localhost:3000");
    mainWindow.loadURL("http://localhost:3000");
  } else {
    serverProcess = exec(`node ${serverPath}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error when running server: ${err}`);
        return;
      }
      console.log(stdout);
    });

    try {
      await checkServer("http://localhost:3000");
      console.log("Server is ready, loading Electron...");
      mainWindow.loadURL("http://localhost:3000");
    } catch (error) {
      console.error("Server not started:", error);
    }
  }
}

app.on("before-quit", () => {
  if (serverProcess) {
    serverProcess.kill();
  }
});

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})