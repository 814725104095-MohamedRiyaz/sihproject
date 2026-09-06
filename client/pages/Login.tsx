import { KeyRound } from "lucide-react";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import PlaceholderPage from "@/components/dashboard/PlaceholderPage";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicHeader />
      <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <PlaceholderPage
            icon={KeyRound}
            title="Sign In"
            description="The enterprise login screen (email, password, remember me, demo role selector) will be generated here."
          />
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
