import MetricsStrip from "@/src/components/landing/metrics-strip";
import { metrics } from "./data";

/** The key-figures strip that sits directly under the services hero. */
export default function Metrics() {
  return <MetricsStrip items={metrics} />;
}
