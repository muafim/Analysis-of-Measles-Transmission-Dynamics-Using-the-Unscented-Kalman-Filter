import { SectionHeader } from "../components/SectionHeader";
import { datasetVariables, descriptiveStatistics, recentVerifiedObservations, researchOverview } from "../data/researchData";

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

export function DataOverview() {
  return (
    <section id="data" className="section tinted-section">
      <div className="shell">
        <SectionHeader
          eyebrow="02 · Dataset"
          title="Annual WHO surveillance and vaccination coverage"
          description={`The dataset contains ${researchOverview.observations} annual observations from ${researchOverview.source}. No runtime data fetching is used.`}
        />
        <div className="variable-grid">
          {datasetVariables.map((variable, index) => (
            <article key={variable.name}><span>0{index + 1}</span><h3>{variable.name}</h3><p>{variable.description}</p></article>
          ))}
        </div>

        <div className="stats-layout">
          <div>
            <p className="eyebrow">Descriptive statistics</p>
            <h3>Scale and variability</h3>
            <p>Reported incidence spans hundreds to tens of thousands of cases. MCV2 is substantially more variable than MCV1.</p>
            <div className="recent-observations">
              <span>Verified recent observations</span>
              {recentVerifiedObservations.map((item) => <small key={item.year}>{item.year}: {formatter.format(item.cases)}</small>)}
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Descriptive statistics for measles cases and vaccination coverage</caption>
              <thead><tr><th>Statistic</th>{descriptiveStatistics.map((group) => <th key={group.variable}>{group.variable}</th>)}</tr></thead>
              <tbody>
                {["Count", "Mean", "Std. deviation", "Minimum", "25th percentile", "Median", "75th percentile", "Maximum"].map((label) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {descriptiveStatistics.map((group) => {
                      const statistic = group.values.find((value) => value.label === label);
                      return <td key={group.variable}>{statistic ? `${formatter.format(statistic.value)}${group.unit === "%" ? "%" : ""}` : "—"}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
