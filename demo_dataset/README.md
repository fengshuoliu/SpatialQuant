# SpatialQuant Demonstration Dataset

This demonstration dataset contains aligned multiplex input matrices and example SpatialQuant outputs. The same files can be used to test SpatialQuant on macOS and Windows.

## Download

- [Download the complete demonstration dataset](https://github.com/fengshuoliu/SpatialQuant/releases/download/demo-dataset-v1.0/SpatialQuant-Demo-Dataset-v1.0.zip)
- [Download the SHA-256 checksum](https://github.com/fengshuoliu/SpatialQuant/releases/download/demo-dataset-v1.0/SHA256SUMS-demo-dataset.txt)

The complete dataset is distributed as a GitHub Release asset because the uncompressed folder is approximately 1 GB and contains generated output files that exceed GitHub's normal per-file repository limit.

## Contents

| Location | Purpose |
| --- | --- |
| `test_input_files/` | Sixteen aligned, headerless, 1000 x 1000 numeric CSV marker matrices used as SpatialQuant inputs. TIFF files are included as source/reference images; SpatialQuant scans the CSV files. |
| `test_output_files/` | Example outputs from a complete reference workflow, including configuration, figures, masks, tables, parameters, region analyses, distances, and cell-distribution results. |
| `MANIFEST.sha256` | SHA-256 checksums for the individual files inside the extracted dataset. |

The example output folder is for comparison and inspection. Do not select it as the output destination for a new test run.

## Test SpatialQuant

1. Download and extract `SpatialQuant-Demo-Dataset-v1.0.zip`.
2. Launch SpatialQuant on macOS or Windows.
3. Create a new, empty writable folder for your test results.
4. In **Inputs & Calibration**, select the new folder as the output folder.
5. Select the extracted `test_input_files` folder as the input folder. On Windows, click **Rescan CSV Files** if the channel list does not update immediately.
6. Confirm that SpatialQuant discovers 16 CSV channels.
7. For the reference calibration, enter `1000 um` and `1000 px` for both the X and Y axes. The resulting pixel size is 1 um per pixel.
8. Select `Ir191_nuclei` as the nucleus channel and continue through the workflow. The saved `test_output_files/00_config/pipeline_config.json` records the reference-run settings.
9. Compare your generated folders, tables, masks, and figures with `test_output_files`.

Exact timestamps, file inventories, parameter recommendations, floating-point values, and rendered figures can vary with SpatialQuant version, selected settings, operating system, and available computing resources. Use the example outputs as a structural and visual reference rather than a byte-for-byte test oracle.

## Verify the Download

On macOS:

```bash
shasum -a 256 SpatialQuant-Demo-Dataset-v1.0.zip
```

On Windows PowerShell:

```powershell
Get-FileHash -Algorithm SHA256 .\SpatialQuant-Demo-Dataset-v1.0.zip
```

Compare the result with `SHA256SUMS-demo-dataset.txt`. After extraction, `MANIFEST.sha256` can be used to verify individual files.

## Data Credit

The demonstration input data and example output files were provided by **Dr. Ling Wu** from the [Zhang Lab](https://github.com/xzhanglab). They are published here for SpatialQuant demonstration and software testing. Please retain this attribution when sharing results derived from the dataset.

The repository's MIT license applies to the SpatialQuant software and does not automatically relicense contributed image or experimental data. Contact the project maintainers before redistributing or reusing the demonstration data outside SpatialQuant testing.

## Citation

If SpatialQuant supports your research, please cite:

> Xu Z, Liu F, Ding Y, et al. Unbiased niche labeling maps immune-excluded niche in bone metastasis. *Cell*. 2026. [https://doi.org/10.1016/j.cell.2026.04.009](https://doi.org/10.1016/j.cell.2026.04.009)
