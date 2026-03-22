import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ManagementPage from "./pages/ManagementPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ImportExportPage from "./pages/services/ImportExportPage.tsx";
import RentalLeasingPage from "./pages/services/RentalLeasingPage.tsx";
import HospitalityPage from "./pages/services/HospitalityPage.tsx";
import LogisticsPage from "./pages/services/LogisticsPage.tsx";
import RealEstatePage from "./pages/services/RealEstatePage.tsx";
import CatNJoyPage from "./pages/services/CatNJoyPage.tsx";
import DogNJoyPage from "./pages/services/DogNJoyPage.tsx";
import PerfectaPage from "./pages/services/PerfectaPage.tsx";
import MechanicalPage from "./pages/projects/MechanicalPage.tsx";
import CivilPage from "./pages/projects/CivilPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import RenewableSolarPage from "./pages/services/RenewableSolarPage.tsx";
import SolarPowerPlantDetailed from "./pages/services/SolarPowerPlantDetailed.tsx";
import SolarPumpsDetailed from "./pages/services/SolarPumpsDetailed.tsx";
import SolarStreetLightsDetailed from "./pages/services/SolarStreetLightsDetailed.tsx";
import SolarWaterHeatersDetailed from "./pages/services/SolarWaterHeatersDetailed.tsx";
import SolarBatteriesDetailed from "./pages/services/SolarBatteriesDetailed.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/renewable-solar-panel" element={<RenewableSolarPage />} />
            <Route path="/services/solar-power-plants" element={<SolarPowerPlantDetailed />} />
            <Route path="/services/solar-pumps" element={<SolarPumpsDetailed />} />
            <Route path="/services/solar-street-lights" element={<SolarStreetLightsDetailed />} />
            <Route path="/services/solar-water-heaters" element={<SolarWaterHeatersDetailed />} />
            <Route path="/services/solar-batteries" element={<SolarBatteriesDetailed />} />
            <Route path="/services/import-and-export" element={<ImportExportPage />} />
            <Route path="/services/rental-leasing-transportation" element={<RentalLeasingPage />} />
            <Route path="/services/hospitality-services" element={<HospitalityPage />} />
            <Route path="/services/logistics-warehouse-management" element={<LogisticsPage />} />
            <Route path="/services/real-estate" element={<RealEstatePage />} />
            <Route path="/projects/mechanical" element={<MechanicalPage />} />
            <Route path="/projects/civil" element={<CivilPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
