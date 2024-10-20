import { lazy, Suspense } from "react";
import Spinner from "../Components/CommonComponents/Spinner";
import { MainLayout } from "../layouts/MainLayout";

// Lazy load components
const TechHomePage = lazy(() => import("../Pages/Technology/TechHomePage"));
const ClientsPage = lazy(() => import("../Pages/ClientsPage"));
const RecServicesPage = lazy(() => import("../Pages/Recruitment/RecServicesPage"));
// const RecClientsPage = lazy(() => import("../Pages/Recruitment/RecClientsPage"));
const ContactUsPage = lazy(() => import("../Pages/ContactUsPage"));
const RecHomePage = lazy(() => import("../Pages/Recruitment/RecHomePage"));
const AboutUsPage = lazy(() => import("../Pages/AboutUsPage"));
const TechServicesPage = lazy(() => import("../Pages/Technology/TechServicesPage"));
const LandingPage = lazy(() => import("../Pages/LandingPage"));
const Blogs = lazy(() => import("../Pages/Blogs"));
const CareerPage = lazy(() => import("../Pages/CareerPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage")); 
const FullBlog = lazy(() => import("../Components/Blogs/FullBlog")); 
const AdminDashboard = lazy(() => import("../Pages/Admin/AdminDashboard")); 
const AdminLogin = lazy(() => import("../Pages/Admin/AdminLogin")); 

// Define routes
const AppRoutes = [
  {
    path: "/",
    element: <MainLayout />,  // Main layout wraps all child routes
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/technology", element: <TechHomePage /> },
      { path: "/technology-services", element: <TechServicesPage /> },
      { path: "/clients", element: <ClientsPage /> },
      // { path: "/recruitment", element: <RecHomePage /> },
      { path: "/recruitment-services", element: <RecServicesPage /> },
      { path: "/contact", element: <ContactUsPage /> },
      { path: "/aboutB3", element: <AboutUsPage /> },
      { path: "/careers", element: <CareerPage /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/adminlogin", element: <AdminLogin /> },
      { path: "/dashboard", element: <AdminDashboard /> },
      { path: "/blog/:id", element:<FullBlog />},
      { path: "*", element: <NotFoundPage /> }, // Handle 404 Not Found route
    ],
  },
  {
    path: "/recruitment", // This route is outside the MainLayout
    element: <RecHomePage />,
  },
];

export default AppRoutes;
