import { Bell } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Alerts() {
  return (
    <PlaceholderPage
      icon={Bell}
      title="Alert Center"
      description="Categorized alerts with mark-as-read, resolve and filtering will be generated here."
    />
  );
}
