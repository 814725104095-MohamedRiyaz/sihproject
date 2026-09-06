import { Truck } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Vehicles() {
  return (
    <PlaceholderPage
      icon={Truck}
      title="Vehicle Management"
      description="Fleet cards and tables with location, fuel, driver and status detail will be generated here."
    />
  );
}
