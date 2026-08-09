import { SectionHeader } from "../components/SectionHeader";
import { b1Cautions, finalState } from "../data/researchData";

export function ParameterAnalysis() {
  return (
    <section className="section parameter-section" aria-labelledby="parameter-title">
      <div className="shell">
        <SectionHeader
          eyebrow="07 · Latent parameter analysis"
          title="Final estimated state"
          description="The final filtered state summarizes the latent log-incidence level, recent trend, and time-evolving vaccine coverage associations."
        />
        <div id="parameter-title" className="state-values">
          {finalState.map((state) => (
            <article key={state.key} className={state.key === "b1" ? "caution" : ""}>
              <span>{state.label}</span>
              <strong>{state.display}</strong>
              <p>{state.description}</p>
            </article>
          ))}
        </div>
        <div className="parameter-interpretation">
          <article>
            <p className="eyebrow">MCV2 interpretation</p>
            <h3>Protective association in the fitted model</h3>
            <p>The negative final b2 estimate is consistent with a protective association between higher second-dose coverage and measles incidence within this model.</p>
          </article>
          <article className="caution-panel">
            <p className="eyebrow">MCV1 interpretation caution</p>
            <h3>A positive coefficient is not a causal claim</h3>
            <p>The positive b1 value is not evidence that first-dose vaccination increases measles incidence. The report notes several plausible limitations:</p>
            <ul>{b1Cautions.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}
