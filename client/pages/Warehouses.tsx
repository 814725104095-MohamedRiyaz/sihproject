import { Warehouse } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Warehouses() {
  return (
    <PlaceholderPage
      icon={Warehouse}
      title="Warehouse Management"
      description="Warehouse cards with capacity, utilization, accessibility and risk will be generated here."
    />
  );
}
