interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  inverse?: boolean;
}

export function MetricCard({ label, value, unit, inverse = false }: MetricCardProps) {
  return (
    <article className={`metric-card ${inverse ? "inverse" : ""}`}>
      <p>{label}</p>
      <strong>{value}</strong>
      {unit ? <span>{unit}</span> : null}
    </article>
  );
}
