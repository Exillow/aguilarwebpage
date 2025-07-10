import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import AboutAMD from "./pages/AboutAMD";
import Index from "./pages/Index";
import Buy from "./pages/Buy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/about-amd"
            element={
              <>
                <Navbar />
                <AboutAMD />
              </>
            }
          />
          <Route
            path="/main"
            element={
              <>
                <Navbar />
                <Index />
              </>
            }
          />
          <Route
            path="/buy"
            element={
              <>
                <Navbar />
                <Buy />
              </>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
