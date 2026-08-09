import type { Metric, StateComponent, StatisticGroup, UncertaintyPoint } from "../types/research";

export const researchOverview = {
  title: "Measles Transmission Dynamics",
  subtitle: "Analysis Using the Unscented Kalman Filter",
  description:
    "A state-space modeling study of measles incidence and vaccination coverage in Indonesia using annual WHO surveillance data from 2004 to 2024.",
  country: "Indonesia",
  startYear: 2004,
  endYear: 2024,
  period: "2004-2024",
  frequency: "Annual",
  observations: 21,
  method: "Unscented Kalman Filter",
  variables: "Measles Cases, MCV1, MCV2",
  source: "World Health Organization (WHO)",
};

export const performance = {
  rmse: 763.79,
  nrmse: 0.0265,
  mape: 5.41,
};

export const headlineMetrics: Metric[] = [
  { label: "Observations", display: String(researchOverview.observations), unit: "years" },
  { label: "Period", display: researchOverview.period },
  { label: "Method", display: "UKF", unit: researchOverview.method },
  { label: "MAPE", display: performance.mape.toFixed(2), unit: "%" },
];

export const datasetVariables = [
  { name: "Year", description: "Annual observation index from 2004 to 2024." },
  { name: "Reported Measles Cases", description: "Annual reported measles incidence used as the observation." },
  { name: "MCV1 Coverage", description: "Measles-containing vaccine first-dose coverage." },
  { name: "MCV2 Coverage", description: "Measles-containing vaccine second-dose coverage." },
];

export const descriptiveStatistics: StatisticGroup[] = [
  {
    variable: "Reported Measles Cases",
    unit: "cases",
    values: [
      { label: "Count", value: 21 },
      { label: "Mean", value: 12860.76 },
      { label: "Std. deviation", value: 7822.57 },
      { label: "Minimum", value: 394 },
      { label: "25th percentile", value: 6962 },
      { label: "Median", value: 15099 },
      { label: "75th percentile", value: 18869 },
      { label: "Maximum", value: 29171 },
    ],
  },
  {
    variable: "MCV1 Coverage",
    unit: "%",
    values: [
      { label: "Count", value: 21 },
      { label: "Mean", value: 81.9 },
      { label: "Std. deviation", value: 6.01 },
      { label: "Minimum", value: 72 },
      { label: "25th percentile", value: 76 },
      { label: "Median", value: 82 },
      { label: "75th percentile", value: 87 },
      { label: "Maximum", value: 92 },
    ],
  },
  {
    variable: "MCV2 Coverage",
    unit: "%",
    values: [
      { label: "Count", value: 21 },
      { label: "Mean", value: 60.1 },
      { label: "Std. deviation", value: 18.06 },
      { label: "Minimum", value: 23 },
      { label: "25th percentile", value: 53 },
      { label: "Median", value: 67 },
      { label: "75th percentile", value: 73 },
      { label: "Maximum", value: 82 },
    ],
  },
];

export const recentVerifiedObservations = [
  { year: 2020, cases: 524 },
  { year: 2021, cases: 394 },
  { year: 2022, cases: 7704 },
  { year: 2023, cases: 18063 },
  { year: 2024, cases: 6328 },
];

export const historicalInsights = [
  "Measles incidence shows substantial year-to-year variability.",
  "Several high-incidence periods occurred during the early and middle study period.",
  "Reported cases declined substantially toward 2020-2021.",
  "A clear resurgence appeared during 2022-2023.",
  "These abrupt structural changes support the use of a dynamic state-space approach.",
];

export const vaccineInsights = [
  "MCV1 remained relatively high and more stable.",
  "MCV2 showed substantially greater variability.",
  "Second-dose coverage declined notably during parts of the study period before recovering.",
  "The gap between MCV1 and MCV2 may indicate incomplete vaccination schedules, without establishing causality.",
];

export const preprocessingSteps = [
  "Annual WHO Data",
  "Chronological Sorting",
  "Numeric Cleaning",
  "Missing / Invalid Value Check",
  "Mean-Center Vaccine Coverage",
  "log1p(Measles Cases)",
  "UKF State-Space Model",
];

export const preprocessingDetails = [
  { label: "Case transformation", value: "log1p(cases)", description: "Stabilizes the highly skewed case-count scale." },
  { label: "Vaccine coverage", value: "mean-centered", description: "MCV1 and MCV2 are centered before modeling." },
  { label: "Time step", value: "dt = 1.0", description: "The filter advances at annual intervals." },
];

export const stateVector = [
  { key: "level", label: "Level", description: "Latent log-transformed measles incidence." },
  { key: "trend", label: "Trend", description: "Long-term change in latent incidence." },
  { key: "b1", label: "b1", description: "Estimated effect associated with MCV1 coverage." },
  { key: "b2", label: "b2", description: "Estimated effect associated with MCV2 coverage." },
];

export const ukfFlow = [
  "Current State",
  "Sigma Points",
  "Non-linear Prediction",
  "Predicted State",
  "Observed Measles Cases",
  "Measurement Update",
  "Filtered State",
];

export const ukfConfig = {
  stateDimension: 4,
  initialCovariance: "diag([1.0, 0.5, 0.05, 0.05])",
  processNoise: "diag([0.15, 0.10, 0.005, 0.005])",
  measurementNoise: 0.25,
  alpha: 0.001,
  beta: 2,
  kappa: 0,
};

export const filteringInsights = [
  "Filtered estimates closely follow major changes in the observed series.",
  "The UKF produces a smoother latent trajectory.",
  "Short-term irregular fluctuations are attenuated.",
  "The decline around 2020-2021 and subsequent resurgence remain visible.",
];

export const uncertainty = {
  mean: 0.38147664207410276,
  min: 0.36566525134908967,
  max: 0.3987943440794339,
};

export const uncertaintyPoints: UncertaintyPoint[] = [
  { label: "Minimum", value: uncertainty.min },
  { label: "Mean", value: uncertainty.mean },
  { label: "Maximum", value: uncertainty.max },
];

export const finalState: StateComponent[] = [
  { key: "level", label: "Latent Level", value: 8.88977491, display: "8.8898", description: "Final latent log-incidence level." },
  { key: "trend", label: "Trend", value: 0.42743102, display: "+0.4274", description: "Increasing latent tendency near the end of the observation period." },
  { key: "b1", label: "MCV1 Effect (b1)", value: 0.17525347, display: "+0.1753", description: "Requires cautious interpretation because the annual aggregate model has limited identifiability." },
  { key: "b2", label: "MCV2 Effect (b2)", value: -0.06535932, display: "-0.0654", description: "Consistent with a protective association for higher second-dose coverage in this model." },
];

export const b1Cautions = [
  "Confounding dynamics",
  "Changes in surveillance intensity",
  "Delayed outbreak responses",
  "Limitations of annual aggregate data",
  "Incomplete parameter identifiability",
];

export const forecastContext = {
  horizon: 3,
  years: "2025-2027",
  assumption: "Future vaccination inputs remain at their most recent centered values.",
  note: "The saved notebook contains the projection curve but not a numeric forecast table.",
};

export const keyFindings = [
  { title: "Reconstructed incidence dynamics", text: "The filtered trajectory follows the observed pattern while reducing irregular fluctuations." },
  { title: "Strong model fit", text: "RMSE 763.79 cases, NRMSE 0.0265, and MAPE 5.41%." },
  { title: "Positive recent latent trend", text: "The final trend estimate of 0.427 indicates an increasing latent tendency near the end of the period." },
  { title: "More consistent MCV2 relationship", text: "The final second-dose coefficient is negative in the fitted state-space model." },
  { title: "Relatively stable uncertainty", text: "Latent incidence variance ranges approximately from 0.366 to 0.399." },
];

export const limitations = [
  "Annual data cannot capture within-year seasonality.",
  "Reported cases may be affected by underreporting.",
  "Surveillance intensity may vary across years.",
  "Aggregate vaccine coverage does not represent immunity distribution between age cohorts.",
  "Vaccination effects may not be fully identifiable from only 21 annual observations.",
];

export const futureWork = [
  "Use higher-resolution surveillance data, such as monthly observations.",
  "Incorporate birth rates, population mobility, and supplementary immunization activities.",
  "Explicitly model time-varying vaccination effects.",
  "Explore hybrid epidemiological and state-space filtering approaches.",
];

export const assets = {
  cases: "measles-cases-2004-2024.png",
  vaccines: "mcv-coverage-2004-2024.png",
  ukfResults: "ukf-observed-filtered-forecast.png",
};

export const sourceNotes = {
  casesFigure: "Saved Figure 1 from the primary UKF notebook. The complete annual case array is not retained in the repository.",
  vaccineFigure: "Saved Figure 2 from the primary UKF notebook. The complete annual coverage arrays are not retained in the repository.",
  resultsFigure: "Saved UKF output from the primary notebook. Observed and filtered values use a logarithmic vertical scale.",
  forecast: "The green dashed segment is a model projection, not observed incidence. Exact values for 2025-2027 are omitted because no numeric forecast table was retained.",
};
