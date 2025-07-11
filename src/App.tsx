import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/layout/header";
import Dashboard from "./pages/Dashboard";
import PaymentsDashboard from "./pages/PaymentsDashboard";
import IncompleteInvoices from "./pages/IncompleteInvoices";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Invoices from "./pages/Invoices";
import AddInvoice from "./pages/AddInvoice";
import UploadPage from "./pages/Upload";
import BugReport from "./pages/BugReport";
import CurrentPlan from "./pages/CurrentPlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <main className="flex-1 flex flex-col">
              <Header />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/payments" element={<PaymentsDashboard />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/add-contact" element={<AddContact />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/add-invoice" element={<AddInvoice />} />
                  <Route path="/incomplete-invoices" element={<IncompleteInvoices />} />
                  <Route path="/upload" element={<UploadPage />} />
                  <Route path="/plan" element={<CurrentPlan />} />
                  <Route path="/bug-report" element={<BugReport />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
