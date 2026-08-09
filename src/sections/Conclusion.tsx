import { SectionHeader } from "../components/SectionHeader";
import { futureWork, keyFindings, limitations } from "../data/researchData";

export function Conclusion() {
  return (
    <section id="conclusion" className="section conclusion-section">
      <div className="shell">
        <SectionHeader
          eyebrow="08 · Research conclusion"
          title="Key findings, limitations, and next steps"
          description="The UKF provides a useful reconstruction of long-term measles dynamics, but the annual aggregate dataset limits causal and fine-grained epidemiological interpretation."
        />
        <div className="finding-list">
          {keyFindings.map((finding, index) => <article key={finding.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{finding.title}</h3><p>{finding.text}</p></div></article>)}
        </div>
        <div className="closing-grid">
          <article><p className="eyebrow">Limitations</p><h3>What the model cannot resolve</h3><ul>{limitations.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><p className="eyebrow">Future work</p><h3>How the research could advance</h3><ul>{futureWork.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}
