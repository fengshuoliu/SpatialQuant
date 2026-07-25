# Install SpatialPlexomera

SpatialPlexomera is distributed directly through [GitHub Releases](https://github.com/fengshuoliu/SpatialPlexomera/releases). It does not require an App Store or Microsoft Store account. macOS and Windows release independently, so use the platform-specific download links below.

## Moving from a pre-1.4.0 installation

Version 1.4.0 establishes the SpatialPlexomera application identity and update channels. If you installed an earlier build under the previous product identity, download and install SpatialPlexomera 1.4.0 manually once. Confirm that SpatialPlexomera opens and can access your existing input and output folders, then remove the earlier application. Subsequent SpatialPlexomera releases can update through the in-app updater.

## Windows 10 and 11

### Requirements

- 64-bit Windows 10 or Windows 11
- Write access to the selected output folder
- About 2 GB of free disk space for the application and temporary analysis files

### Install

1. [Download the latest SpatialPlexomera for Windows](https://fengshuoliu.github.io/SpatialPlexomera/download/windows/).
2. Verify `SpatialPlexomera-Windows-x64-Setup.exe` against `SHA256SUMS-Windows.txt` from the same Windows release.
3. Run `SpatialPlexomera-Windows-x64-Setup.exe` and follow the installation prompts.
4. Launch SpatialPlexomera from the Start menu or desktop shortcut.
5. If Microsoft Defender SmartScreen appears, select **More info**, confirm that the app name is SpatialPlexomera, and select **Run anyway**.

The installer keeps the application and its private analysis engine together. Do not move `SpatialPlexomera.exe` out of its installation folder. SpatialPlexomera is not signed with a commercial code-signing certificate. A SmartScreen prompt is expected for an independently distributed build and does not require disabling Windows Security. Organization-managed computers may require administrator approval.

### Windows updates

SpatialPlexomera 1.4.0 and later automatically check the stable Windows release channel once every 24 hours. You can also select **Check for updates** in the bottom-left sidebar at any time. When a newer version is available, choose **Yes** to download it. SpatialPlexomera verifies the GitHub asset digest, declared size, and `SHA256SUMS-Windows.txt`, then closes cleanly, installs the update, and reopens automatically. An update never removes analysis files from output folders you selected separately.

Automatic installation is enabled only for the copy registered by the Windows setup program. If an app copy was moved or launched from a source/build folder, it remains open and directs you to the stable Windows download page instead of attempting an unsafe in-place replacement.

Builds published before SpatialPlexomera 1.4.0 cannot move to the new update channel automatically. Download and run the latest setup program once from the Windows link above; future Windows releases can then update from inside the app.

## macOS 13 or later

### Requirements

- Apple Silicon or Intel processor
- Write access to the selected output folder

### Install

1. [Download the latest SpatialPlexomera for macOS](https://fengshuoliu.github.io/SpatialPlexomera/download/macos/).
2. Open the disk image.
3. Drag `SpatialPlexomera.app` to the Applications shortcut.
4. Eject the SpatialPlexomera disk image.
5. Open SpatialPlexomera from Applications.

### First-launch approval

SpatialPlexomera is distributed independently and is not notarized by Apple. If macOS blocks the first launch:

1. Try to open SpatialPlexomera once, then dismiss the warning.
2. Open **System Settings > Privacy & Security**.
3. Scroll to Security and select **Open Anyway** for SpatialPlexomera.
4. Authenticate and select **Open**.

This creates an exception for SpatialPlexomera without disabling Gatekeeper globally. Organization-managed Macs may require administrator approval.

### macOS updates

SpatialPlexomera 1.4.0 and later use **SpatialPlexomera > Check for Updates...**. SpatialPlexomera verifies update archives with its embedded EdDSA public key before installation. Builds published before 1.4.0 require the one-time manual installation described above.

## Verify a download

The macOS and Windows platform releases include their corresponding SHA-256 checksum files. On macOS:

```bash
shasum -a 256 ~/Downloads/SpatialPlexomera-macOS-universal.dmg
```

On Windows PowerShell:

```powershell
Get-FileHash -Algorithm SHA256 "$HOME\Downloads\SpatialPlexomera-Windows-x64-Setup.exe"
```

Compare the result with `SHA256SUMS.txt` for macOS or `SHA256SUMS-Windows.txt` for Windows on the corresponding platform release.
