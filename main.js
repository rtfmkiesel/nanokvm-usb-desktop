const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
	const win = new BrowserWindow({
		icon: path.join(__dirname, "images", "icon.png"),
		width: 1280,
		height: 800,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
		},
		autoHideMenuBar: true,
	});

	win.loadFile(path.join(__dirname, "NanoKVM-USB", "index.html"));

	// For WebSerial and video capture
	win.webContents.session.setPermissionCheckHandler(
		(webContents, permission, requestingOrigin, details) => {
			return true;
		}
	);
	win.webContents.session.setDevicePermissionHandler((details) => {
		return true;
	});
	win.webContents.session.on(
		"select-serial-port",
		(event, portList, webContents, callback) => {
			event.preventDefault();
			const selectedPort = portList.find((device) => {
				return device.vendorId === "6790";
			});
			if (!selectedPort) {
				callback("");
			} else {
				callback(selectedPort.portId);
			}
		}
	);
};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
