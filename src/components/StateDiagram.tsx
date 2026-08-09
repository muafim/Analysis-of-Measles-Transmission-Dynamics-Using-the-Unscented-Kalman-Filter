import { stateVector } from "../data/researchData";

export function StateDiagram() {
  return (
    <div className="state-diagram" aria-label="State vector with level, trend, b1, and b2 components">
      <div className="state-expression"><span>x</span> = [level, trend, b1, b2]</div>
      <div className="state-grid">
        {stateVector.map((state) => (
          <article key={state.key}>
            <span>{state.key}</span>
            <h4>{state.label}</h4>
            <p>{state.description}</p>
          </article>
        ))}
      </div>
      <p className="observation-note"><strong>Directly observed:</strong> only the latent incidence level receives the reported case measurement. Trend and vaccine effects are estimated indirectly.</p>
    </div>
  );
}
