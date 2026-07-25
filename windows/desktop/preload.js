const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("spatialPlexomeraDesktop", {
  platform: process.platform,
  versions: Object.freeze({ ...process.versions }),
});
