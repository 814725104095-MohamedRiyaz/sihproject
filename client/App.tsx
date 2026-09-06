import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LiveMap from "./pages/LiveMap";
import Shipments from "./pages/Shipments";
import Vehicles from "./pages/Vehicles";
import RoutePlanner from "./pages/RoutePlanner";
import Warehouses from "./pages/Warehouses";
import AccessibilityPage from "./pages/Accessibility";
import RiskIntelligence from "./pages/RiskIntelligence";
import Regions from "./pages/Regions";
import Analytics from "./pages/Analytics";
import AiAssistant from "./pages/AiAssistant";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/map" element={<LiveMap />} />
              <Route path="/shipments" element={<Shipments />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/routes" element={<RoutePlanner />} />
              <Route path="/warehouses" element={<Warehouses />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/risk" element={<RiskIntelligence />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/assistant" element={<AiAssistant />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
