import { Package } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Shipments() {
  return (
    <PlaceholderPage
      icon={Package}
      title="Shipments"
      description="The shipment table with search, filters, statuses and a create-shipment modal will be generated here."
    />
  );
}
