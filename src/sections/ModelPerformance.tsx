import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";
import { UncertaintyChart } from "../components/UncertaintyChart";
import { performance, uncertainty } from "../data/researchData";

export function ModelPerformance() {
  return (
    <section id="performance" className="section white-section">
      <div className="shell">
        <SectionHeader
          eyebrow="06 · Model performance"
          title="Close agreement with the observed series"
          description="Lower error values indicate closer agreement between UKF-filtered estimates and observed annual case counts."
        />
        <div className="performance-metrics">
          <MetricCard label="RMSE" value={performance.rmse.toFixed(2)} unit="cases" />
          <MetricCard label="NRMSE" value={performance.nrmse.toFixed(4)} unit={`${(performance.nrmse * 100).toFixed(2)}% of observed range`} />
          <MetricCard label="MAPE" value={performance.mape.toFixed(2)} unit="%" />
        </div>

        <div className="uncertainty-layout">
          <div>
            <p className="eyebrow">Uncertainty analysis</p>
            <h3>Relatively stable latent variance</h3>
            <p>The narrow variance range indicates that estimation uncertainty remained comparatively stable throughout the study period. It is not characterized as “very low” because no external benchmark was used.</p>
            <dl className="uncertainty-values">
              <div><dt>Minimum</dt><dd>{uncertainty.min.toFixed(3)}</dd></div>
              <div><dt>Mean</dt><dd>{uncertainty.mean.toFixed(3)}</dd></div>
              <div><dt>Maximum</dt><dd>{uncertainty.max.toFixed(3)}</dd></div>
            </dl>
          </div>
          <UncertaintyChart />
        </div>
      </div>
    </section>
  );
}
