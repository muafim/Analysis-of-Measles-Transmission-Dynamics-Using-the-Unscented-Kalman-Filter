export interface Metric {
  label: string;
  display: string;
  unit?: string;
}

export interface StatisticGroup {
  variable: string;
  unit: string;
  values: { label: string; value: number }[];
}

export interface StateComponent {
  key: "level" | "trend" | "b1" | "b2";
  label: string;
  value: number;
  display: string;
  description: string;
}

export interface UncertaintyPoint {
  label: string;
  value: number;
}
