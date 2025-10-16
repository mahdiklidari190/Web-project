import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "@/contexts/PlayerContext";
import { AuthProvider } from "@/contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Albums from "./pages/Albums";
import AlbumDetail from "./pages/AlbumDetail";
import Songs from "./pages/Songs";
import Artists from "./pages/Artists";
import Profile from "./pages/Profile";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Subscribe from "./pages/Subscribe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <PlayerProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/search" element={<Search />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:id" element={<AlbumDetail />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/subscribe" element={<Subscribe />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PlayerProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
