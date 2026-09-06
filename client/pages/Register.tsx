import { UserPlus } from "lucide-react";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Register() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <PlaceholderPage
            icon={UserPlus}
            title="Create an Account"
            description="The registration flow for logistics managers, drivers and government officers will be generated here."
          />
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
