import { Navbar } from "./components/Navbar";
import { Conclusion } from "./sections/Conclusion";
import { DataOverview } from "./sections/DataOverview";
import { FilteringResults } from "./sections/FilteringResults";
import { Hero } from "./sections/Hero";
import { HistoricalTrend } from "./sections/HistoricalTrend";
import { Methodology } from "./sections/Methodology";
import { ModelPerformance } from "./sections/ModelPerformance";
import { Overview } from "./sections/Overview";
import { ParameterAnalysis } from "./sections/ParameterAnalysis";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <DataOverview />
        <HistoricalTrend />
        <Methodology />
        <FilteringResults />
        <ModelPerformance />
        <ParameterAnalysis />
        <Conclusion />
      </main>
      <footer><div className="shell footer-inner"><p>Measles Transmission Dynamics · UKF Research Dashboard</p><p>Static research showcase · WHO annual data · Indonesia, 2004-2024</p></div></footer>
    </>
  );
}
