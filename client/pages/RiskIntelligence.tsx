import { ShieldAlert } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function RiskIntelligence() {
  return (
    <PlaceholderPage
      icon={ShieldAlert}
      title="Risk Intelligence"
      description="The regional risk dashboard, risk map and high-risk region cards will be generated here."
    />
  );
}
