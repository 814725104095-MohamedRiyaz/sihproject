import { Accessibility as AccessibilityIcon } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function AccessibilityPage() {
  return (
    <PlaceholderPage
      icon={AccessibilityIcon}
      title="Accessibility Intelligence"
      description="Route accessibility scoring, classification and factor breakdown charts will be generated here."
    />
  );
}
