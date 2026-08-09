import { ProcessFlow } from "../components/ProcessFlow";
import { SectionHeader } from "../components/SectionHeader";
import { StateDiagram } from "../components/StateDiagram";
import { preprocessingDetails, preprocessingSteps, ukfConfig, ukfFlow } from "../data/researchData";

export function Methodology() {
  return (
    <section id="method" className="section method-section">
      <div className="shell">
        <SectionHeader
          eyebrow="04 · UKF method"
          title="From annual observations to a filtered latent state"
          description="The pipeline cleans and transforms the surveillance variables before a four-dimensional UKF recursively predicts and updates the latent system."
        />
        <div className="method-grid">
          <div><h3>Preprocessing pipeline</h3><ProcessFlow steps={preprocessingSteps} compact /></div>
          <div className="preprocessing-details">
            {preprocessingDetails.map((detail) => <article key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong><p>{detail.description}</p></article>)}
          </div>
        </div>

        <div className="state-section">
          <div className="subsection-heading"><p className="eyebrow light">State-space model</p><h3>Four latent components</h3></div>
          <StateDiagram />
        </div>

        <div className="ukf-concept">
          <div>
            <p className="eyebrow">Why Unscented Kalman Filter?</p>
            <h3>Non-linear estimation without explicit Jacobians</h3>
            <p>UKF propagates deterministic sigma points through the nonlinear state transition instead of explicitly linearizing the model using Jacobian matrices.</p>
          </div>
          <ProcessFlow steps={ukfFlow} compact />
        </div>

        <details className="technical-details">
          <summary>Technical initialization details</summary>
          <div className="technical-table-wrap">
            <dl>
              <div><dt>State dimension</dt><dd>{ukfConfig.stateDimension}</dd></div>
              <div><dt>Initial covariance</dt><dd>{ukfConfig.initialCovariance}</dd></div>
              <div><dt>Process noise</dt><dd>{ukfConfig.processNoise}</dd></div>
              <div><dt>Measurement noise</dt><dd>R = {ukfConfig.measurementNoise}</dd></div>
              <div><dt>Alpha</dt><dd>{ukfConfig.alpha}</dd></div>
              <div><dt>Beta</dt><dd>{ukfConfig.beta}</dd></div>
              <div><dt>Kappa</dt><dd>{ukfConfig.kappa}</dd></div>
            </dl>
          </div>
        </details>
      </div>
    </section>
  );
}
