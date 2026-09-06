import { LandPlot } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Regions() {
  return (
    <PlaceholderPage
      icon={LandPlot}
      title="Regional Intelligence"
      description="Detailed cards for all 8 NER states with shipments, vehicles, risk and accessibility will be generated here."
    />
  );
}
