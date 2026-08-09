import { ArrowDownRight } from "lucide-react";
import { researchOverview } from "../data/researchData";

const metadata = [
  ["Country", researchOverview.country],
  ["Period", researchOverview.period],
  ["Frequency", researchOverview.frequency],
  ["Observations", String(researchOverview.observations)],
  ["Method", researchOverview.method],
  ["Variables", researchOverview.variables],
];

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-orbits" aria-hidden="true"><i /><i /><i /></div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="eyebrow light">Epidemiological state estimation · Indonesia</p>
          <h1>{researchOverview.title}</h1>
          <p className="hero-subtitle">{researchOverview.subtitle}</p>
          <p className="hero-description">{researchOverview.description}</p>
          <a className="primary-button" href="#overview">Explore Results <ArrowDownRight size={18} aria-hidden="true" /></a>
        </div>
        <aside className="hero-metadata" aria-label="Research metadata">
          {metadata.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </aside>
      </div>
    </header>
  );
}
