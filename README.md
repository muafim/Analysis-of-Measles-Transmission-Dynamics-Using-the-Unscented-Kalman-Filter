# Analysis of Measles Transmission Dynamics Using the Unscented Kalman Filter

State-space analysis of measles incidence in Indonesia using annual WHO surveillance and vaccination coverage data from 2004 to 2024.

## Research Dashboard

[Live Dashboard](https://muafim.github.io/Analysis-of-Measles-Transmission-Dynamics-Using-the-Unscented-Kalman-Filter/)

The dashboard is a static visualization layer for the completed research. It does not refit the model, call an API, or require a backend.

## Overview

- Country: Indonesia
- Period: 2004-2024
- Observations: 21
- Method: Unscented Kalman Filter
- RMSE: 763.79 cases
- NRMSE: 0.0265
- MAPE: 5.41%

## Key Findings

- UKF closely tracked observed measles incidence while smoothing irregular fluctuations.
- The model captured the decline around 2020-2021 and subsequent resurgence.
- The final latent trend was positive.
- The second-dose vaccination coefficient showed a more consistent protective relationship.
- Estimation uncertainty remained relatively stable.

## Method

Reported case counts were transformed with `log1p`, vaccination coverage was mean-centered, and a four-dimensional state vector `[level, trend, b1, b2]` was estimated recursively with the UKF.

## Dashboard

The single-page dashboard presents dataset characteristics, saved research figures, preprocessing, state-space structure, UKF configuration, filtered results, model projection, performance, uncertainty, final latent parameters, limitations, and future work.

## Tech Stack

Research:

- Python
- Pandas
- NumPy
- SciPy
- scikit-learn
- Unscented Kalman Filter

Dashboard:

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys `dist/` with the official GitHub Pages Actions. Select **GitHub Actions** as the Pages source in repository settings if it is not already enabled.

## Research Files

- `KSSD_UAS.pdf` - final report and primary narrative source
- `Syntax_164221092_164221056_164221064_164221108.ipynb` - primary UKF notebook
- `test.ipynb` - separate EKF experiment, not used as the dashboard's primary result

The original research files are preserved and are not executed by the dashboard.
