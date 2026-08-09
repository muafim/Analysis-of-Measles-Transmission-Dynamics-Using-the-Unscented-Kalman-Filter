import { Bar, BarChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { uncertainty } from "../data/researchData";

const rangeData = [{ label: "Variance range", base: uncertainty.min, range: uncertainty.max - uncertainty.min }];

export function UncertaintyChart() {
  return (
    <div className="uncertainty-chart" role="img" aria-label="Latent incidence variance range from 0.366 to 0.399, with a mean of 0.381">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rangeData} layout="vertical" margin={{ top: 24, right: 28, bottom: 24, left: 28 }}>
          <XAxis
            type="number"
            domain={[0.35, 0.41]}
            ticks={[uncertainty.min, uncertainty.mean, uncertainty.max]}
            tickFormatter={(value: number) => value.toFixed(3)}
            axisLine={{ stroke: "#c7d8d2" }}
            tickLine={false}
            interval={0}
            minTickGap={0}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            formatter={(_, name) => name === "range" ? [`${uncertainty.min.toFixed(3)} - ${uncertainty.max.toFixed(3)}`, "Variance range"] : [null, null]}
            contentStyle={{ borderRadius: 10, border: "1px solid #d5e2de" }}
          />
          <ReferenceLine x={uncertainty.mean} stroke="#db7759" strokeWidth={3} label={{ value: `Mean ${uncertainty.mean.toFixed(3)}`, position: "top", fill: "#173532", fontSize: 12 }} />
          <Bar dataKey="base" stackId="variance" fill="transparent" barSize={22} isAnimationActive={false} />
          <Bar dataKey="range" stackId="variance" fill="#176b67" radius={[0, 10, 10, 0]} barSize={22} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
