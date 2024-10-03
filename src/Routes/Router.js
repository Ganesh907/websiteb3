import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../Components/CommonComponents/Spinner";

// Lazy load components
const Homepage = lazy(() => import("../Pages/Homepage"));
const TechHomePage = lazy(() => import("../Pages/Technology/TechHomePage"));
const ClientsPage = lazy(() => import("../Pages/ClientsPage"));
const RecServicesPage = lazy(() => import("../Pages/Recruitment/RecServicesPage"));
const RecClientsPage = lazy(() => import("../Pages/Recruitment/RecClientsPage"));
const ContactUsPage = lazy(() => import("../Pages/ContactUsPage"));
const RecHomePage = lazy(() => import("../Pages/Recruitment/RecHomePage"));
const AboutUsPage = lazy(() => import("../Pages/AboutUsPage"));
const TechServicesPage = lazy(() => import("../Pages/Technology/TechServicesPage"));
const LandingPage = lazy(() => import("../Pages/LandingPage"));
const Blogs = lazy(() => import("../Pages/Blogs"));
const CareerPage = lazy(() => import("../Pages/CareerPage"));
// Import the default page component
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage")); // Adjust the import path accordingly

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/technology" element={<TechHomePage />} />
        <Route path="/technology-services" element={<TechServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/recruitment" element={<RecHomePage />} />
        <Route path="/recruitment-services" element={<RecServicesPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/aboutB3" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
