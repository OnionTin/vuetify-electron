'use strict'

/**
 *  Intro : Main Progress
 *  Author : OnionTin
 *  Edit Date : 2020/09/14
 *  Reference Api : https://www.electronjs.org/docs/api/browser-window
 */
import { app, protocol, BrowserWindow, Menu, Tray } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    height: 900, // 高
    width: 400, // 宽
    show: false, // 创建后是否显示
    frame: false, // 是否创建frameless窗口
    fullscreenable: false, // 是否允许全屏
    center: true, // 是否出现在屏幕居中的位置
    titleBarStyle: 'xxx', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    resizable: false, // 是否允许拉伸大小
    transparent: true, // 是否是透明窗口（仅macOS）
    vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    backgroundColor: '#2e2c29', // 背景色，用于transparent和frameless窗口
    darkTheme: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      backgroundThrottling: false // 当页面被置于非激活窗口的时候是否停止动画和计时器
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.setFocusable(true);

}

const contextMenu = Menu.buildFromTemplate([
  {
    label: '关于',
    click () {
      dialog.showMessageBox({
        title: 'PicGo',
        message: 'PicGo',
        detail: `Version: ${pkg.version}\nAuthor: Molunerfinn\nGithub: https://github.com/Molunerfinn/PicGo`
      })
    }
  },
  {
    label: '打开详细窗口',
    click () {
      if (settingWindow === null) {
        createSettingWindow()
        settingWindow.show()
      } else {
        settingWindow.show()
        settingWindow.focus()
      }
    }
  },
  // {
  //   label: '选择默认图床',
  //   type: 'submenu',
  //   submenu: [
  //     {
  //       label: '微博图床',
  //       type: 'radio',
  //       checked: db.read().get('picBed.current').value() === 'weibo',
  //       click () {
  //         db.read().set('picBed.current', 'weibo')
  //             .write()
  //       }
  //     },
  //     {
  //       label: '七牛图床',
  //       type: 'radio',
  //       checked: db.read().get('picBed.current').value() === 'qiniu',
  //       click () {
  //         db.read().set('picBed.current', 'qiniu')
  //             .write()
  //       }
  //     },
  //     {
  //       label: '腾讯云COS',
  //       type: 'radio',
  //       checked: db.read().get('picBed.current').value() === 'tcyun',
  //       click () {
  //         db.read().set('picBed.current', 'tcyun')
  //             .write()
  //       }
  //     },
  //     {
  //       label: '又拍云图床',
  //       type: 'radio',
  //       checked: db.read().get('picBed.current').value() === 'upyun',
  //       click () {
  //         db.read().set('picBed.current', 'upyun')
  //             .write()
  //       }
  //     }
  //   ]
  // },
  // {
  //   label: '打开更新助手',
  //   type: 'checkbox',
  //   checked: db.get('picBed.showUpdateTip').value(),
  //   click () {
  //     const value = db.read().get('picBed.showUpdateTip').value()
  //     db.read().set('picBed.showUpdateTip', !value).write()
  //   }
  // },
  {
    role: 'quit',
    label: '退出'
  }
])

function createTray(){
  const menubarPic = process.platform === 'darwin' ? `${__static}/menubar.jpg` : `${__static}/menubar-nodarwin.jpg`
  const tray = new Tray(menubarPic)
  tray.on('click', () => { // 左键点击
    if (process.platform === 'darwin') { // 如果是macOS
      toggleWindow() // 打开或关闭小窗口
    } else { // 如果是windows
      window.hide() // 隐藏小窗口
      if (settingWindow === null) { // 如果主窗口不存在就创建一个
        createSettingWindow()
        settingWindow.show()
      } else { // 如果主窗口在，就显示并激活
        settingWindow.show()
        settingWindow.focus()
      }
    }
  })
  tray.on('right-click', () => { // 右键点击
    window.hide() // 隐藏小窗口
    tray.popUpContextMenu(contextMenu) // 打开菜单
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
    createTray()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
  createTray()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
