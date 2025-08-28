import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ add this
import Index from "./pages/Index";
import Akshara from "./pages/Akshara";
import Convergence from "./pages/Events/Convergence/Convergence";
import Sintillations from "./pages/Events/Sintillashunz/Sintillashunz";
import Workshops from "./pages/Events/Workshops/Workshops";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ ensures scroll resets on route change */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/akshara" element={<Akshara />} />
          <Route path="/events/convergence" element={<Convergence />} />
          <Route path="/events/Sintillashunz" element={<Sintillations />} />
          <Route path="/events/workshops" element={<Workshops />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
