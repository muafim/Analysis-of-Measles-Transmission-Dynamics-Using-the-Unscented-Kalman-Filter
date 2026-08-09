import { ResearchFigure } from "../components/ResearchFigure";
import { SectionHeader } from "../components/SectionHeader";
import { assets, historicalInsights, sourceNotes, vaccineInsights } from "../data/researchData";

export function HistoricalTrend() {
  return (
    <section id="trends" className="section white-section">
      <div className="shell">
        <SectionHeader
          eyebrow="03 · Historical trends"
          title="Cases and vaccination coverage, 2004-2024"
          description="The saved notebook figures are presented directly because the complete annual arrays are not retained in the repository."
        />
        <div className="trend-block">
          <div className="trend-copy"><p className="figure-index">Figure 01</p><h3>Reported Measles Cases, 2004-2024</h3><ul>{historicalInsights.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <ResearchFigure src={assets.cases} alt="Annual reported measles cases in Indonesia from 2004 to 2024" caption={sourceNotes.casesFigure} prominent />
        </div>
        <div className="trend-block reversed">
          <ResearchFigure src={assets.vaccines} alt="Annual MCV1 and MCV2 vaccination coverage in Indonesia from 2004 to 2024" caption={sourceNotes.vaccineFigure} />
          <div className="trend-copy"><p className="figure-index">Figure 02</p><h3>MCV1 vs MCV2 Coverage</h3><ul>{vaccineInsights.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
