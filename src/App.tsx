import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Mentorship from "./pages/Mentorship";
import EcoMarketplace from "./pages/EcoMarketplace";
import InventoryManagement from "./pages/InventoryManagement";
import Profile from "./pages/Profile";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/government-schemes" element={
              <ProtectedRoute>
                <GovernmentSchemes />
              </ProtectedRoute>
            } />
            <Route path="/mentorship" element={
              <ProtectedRoute>
                <Mentorship />
              </ProtectedRoute>
            } />
            <Route path="/eco-marketplace" element={
              <ProtectedRoute>
                <EcoMarketplace />
              </ProtectedRoute>
            } />
            <Route path="/inventory-management" element={
              <ProtectedRoute>
                <InventoryManagement />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
