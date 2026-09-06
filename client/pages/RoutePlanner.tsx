import { Route } from "lucide-react";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function RoutePlanner() {
  return (
    <PlaceholderPage
      icon={Route}
      title="Route Planner"
      description="The AI route planner with source/destination inputs and route A/B/C comparison will be generated here."
    />
  );
}
