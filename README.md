# SpatialQuant

SpatialQuant is a desktop application for spatial image analysis from aligned, per-marker numeric CSV matrices. It provides a guided workflow for composite visualization, nuclei segmentation, rule-based cell typing, neighborhood analysis, regions, cell distribution, distance analysis, and publication-ready exports on macOS and Windows.

> **Project history:** SpatialQuant substantially redesigns and extends the workflow first published in the [TME Spatial prototype](https://github.com/fengshuoliu/TME_spatial). The original repository and [legacy website](https://fengshuoliu.github.io/TME_spatial/) remain online so links in articles continue to work.

## Download

[Download the latest SpatialQuant for macOS](https://fengshuoliu.github.io/SpatialQuant/download/macos/)

[Download the latest SpatialQuant for Windows](https://fengshuoliu.github.io/SpatialQuant/download/windows/)

SpatialQuant for macOS supports macOS 13 or later on Apple Silicon and Intel Macs. SpatialQuant for Windows supports 64-bit Windows 10 and 11. These independently distributed builds are not notarized by Apple or signed with a commercial Windows certificate, so follow the one-time approval steps in the [installation guide](docs/INSTALLATION.md).

## Documentation

- [SpatialQuant User Manual](docs/SpatialQuant_User_Manual.md)
- [SpatialQuant and QuPath: Functional Comparison](docs/SpatialQuant_vs_QuPath.md)
- [Installation and update instructions](docs/INSTALLATION.md)
- [Project website](https://fengshuoliu.github.io/SpatialQuant/)

## Demonstration dataset

[Download the SpatialQuant demonstration dataset](https://github.com/fengshuoliu/SpatialQuant/releases/download/demo-dataset-v1.0/SpatialQuant-Demo-Dataset-v1.0.zip) to test the same aligned marker matrices and inspect a complete set of example outputs on macOS or Windows. Select the extracted `test_input_files` folder as the app input and use a new, empty folder for your own results.

The complete testing workflow, dataset contents, integrity checks, and interpretation notes are documented in the [`demo_dataset` guide](demo_dataset/README.md).

## Platform roadmap

| Platform | Status | Repository location |
| --- | --- | --- |
| macOS | Version 1.3.0 | Current Xcode project |
| Windows x64 | Version 1.3.0 | [`windows/`](windows/) |

Both platforms use the same `SpatialQuant` product identity, analysis definitions, and output contracts. Platform versions and release tags are tracked independently.

The language selector follows the operating system by default and can be set explicitly to English or Simplified Chinese from the sidebar. This changes UI text only; analysis methods, exported data, filenames, schemas, and the `SpatialQuant` product name remain unchanged.

## Build from source

macOS requirements:

- macOS 13 or later
- Xcode with the macOS SDK
- Python 3.9 only when rebuilding the bundled Cell Distribution helper

Build and run a development copy:

```bash
./script/build_and_run.sh
```

Build the self-contained universal release artifacts:

```bash
./script/package_release.sh
```

The package script creates ad-hoc-signed DMG and ZIP files under `build/release/`. It bundles architecture-specific Cell Distribution helpers so end users do not need Python, Conda, Streamlit, or the legacy repository.

Windows release builds are produced on a Windows x64 host:

```powershell
.\windows\build_native.ps1 -FullSmoke
```

The Windows build freezes the scientific analysis engine, runs deterministic Step 2 and complete nine-stage smoke tests, and creates `SpatialQuant-Windows-x64-Setup.exe` under `windows/native/dist/`. The setup program installs the self-contained native WPF application and its analysis engine. End users do not need Python, the .NET SDK, Node.js, Electron, Streamlit, or a browser.

## Updates

On macOS, SpatialQuant uses [Sparkle](https://sparkle-project.org/) with EdDSA-signed archives. On Windows, SpatialQuant automatically checks the stable Windows release channel once per day; after user confirmation, it downloads and verifies the setup program, installs it after a clean shutdown, and reopens the app. Release binaries are hosted by GitHub Releases.

## Acknowledgements

The demonstration input data and example output files were provided by Dr. Ling Wu from the [Zhang Lab](https://github.com/xzhanglab). The cross-platform [demonstration dataset](demo_dataset/README.md) is available for testing SpatialQuant on macOS and Windows.

## Citation

If SpatialQuant supports your work, please cite:

> Xu Z, Liu F, Ding Y, et al. Unbiased niche labeling maps immune-excluded niche in bone metastasis. *Cell*. 2026. [https://doi.org/10.1016/j.cell.2026.04.009](https://doi.org/10.1016/j.cell.2026.04.009)

Machine-readable citation metadata and the complete author list are provided in [`CITATION.cff`](CITATION.cff). The original TME Spatial repository remains the historical software artifact associated with earlier publications; cite the repository and article version that match the software used in your analysis.

## License

SpatialQuant is released under the [MIT License](LICENSE).
