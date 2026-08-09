import { ArrowDown } from "lucide-react";

interface ProcessFlowProps {
  steps: string[];
  compact?: boolean;
}

export function ProcessFlow({ steps, compact = false }: ProcessFlowProps) {
  return (
    <div className={`process-flow ${compact ? "compact" : ""}`}>
      {steps.map((step, index) => (
        <div className="flow-item" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {index < steps.length - 1 ? <ArrowDown size={17} aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}
