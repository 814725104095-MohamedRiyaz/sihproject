import { Settings as SettingsIcon } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Settings() {
  return (
    <PlaceholderPage
      icon={SettingsIcon}
      title="Settings"
      description="Profile, security, notifications, appearance, map and AI preference settings will be generated here."
    />
  );
}
