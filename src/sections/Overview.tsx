import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";
import { headlineMetrics, performance } from "../data/researchData";

export function Overview() {
  return (
    <section id="overview" className="section white-section">
      <div className="shell">
        <SectionHeader
          eyebrow="01 · Research overview"
          title="Estimating the signal beneath noisy surveillance data"
          description="The study models reported cases as noisy observations of a latent measles incidence process, with vaccination coverage included as exogenous information."
        />
        <div className="metric-grid">
          {headlineMetrics.map((metric) => <MetricCard key={metric.label} label={metric.label} value={metric.display} unit={metric.unit} />)}
        </div>
        <div className="overview-highlight">
          <div className="performance-pair">
            <p className="eyebrow">Performance highlight</p>
            <div>
              <span><strong>{performance.rmse.toFixed(2)}</strong> cases RMSE</span>
              <span><strong>{performance.nrmse.toFixed(4)}</strong> NRMSE</span>
            </div>
            <small>Approximately {(performance.nrmse * 100).toFixed(2)}% of the observed range</small>
          </div>
          <p>The UKF closely followed observed measles incidence while producing a smoother latent trajectory, achieving a MAPE of {performance.mape.toFixed(2)}%.</p>
        </div>
      </div>
    </section>
  );
}
