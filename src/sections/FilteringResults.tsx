import { ResearchFigure } from "../components/ResearchFigure";
import { SectionHeader } from "../components/SectionHeader";
import { assets, filteringInsights, forecastContext, sourceNotes } from "../data/researchData";

export function FilteringResults() {
  return (
    <section id="results" className="section results-section">
      <div className="shell">
        <SectionHeader
          eyebrow="05 · Filtering results"
          title="Observed vs UKF-filtered measles incidence"
          description="The primary result compares the reported annual series with the smoother filtered trajectory and the saved three-year model projection."
        />
        <ResearchFigure
          src={assets.ukfResults}
          alt="Observed measles cases, UKF filtered estimates from 2004 to 2024, and model projection from 2025 to 2027 on a logarithmic scale"
          caption={`${sourceNotes.resultsFigure} ${sourceNotes.forecast}`}
          prominent
        />
        <div className="result-insights">
          {filteringInsights.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}
        </div>
        <aside className="forecast-note">
          <div><p className="eyebrow light">Model projection · {forecastContext.years}</p><h3>{forecastContext.horizon}-year UKF horizon</h3></div>
          <div><p>{forecastContext.assumption}</p><p>{sourceNotes.forecast}</p></div>
        </aside>
      </div>
    </section>
  );
}
