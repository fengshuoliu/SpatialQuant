const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("spatialQuantDesktop", {
  platform: process.platform,
  versions: Object.freeze({ ...process.versions }),
});
