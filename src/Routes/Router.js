import { lazy, Suspense } from "react";
import Spinner from "../Components/CommonComponents/Spinner";
import { MainLayout } from "../layouts/MainLayout";

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
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage")); 

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
      { path: "/recruitment", element: <RecHomePage /> },
      { path: "/recruitment-services", element: <RecServicesPage /> },
      { path: "/contactus", element: <ContactUsPage /> },
      { path: "/aboutB3", element: <AboutUsPage /> },
      { path: "/careers", element: <CareerPage /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "*", element: <NotFoundPage /> }, // Handle 404 Not Found route
    ],
  },
];

export default AppRoutes;





// const AppRoutes = () => {
//   return (
//     <Suspense fallback={<Spinner />}>
//       <Routes>
//         <Route path:"/" element:{<MainLayout />} >
//         <Route path:"/technology" element:{<TechHomePage />} />
//         <Route path:"/technology-services" element:{<TechServicesPage />} />
//         <Route path:"/clients" element:{<ClientsPage />} />
//         <Route path:"/recruitment" element:{<RecHomePage />} />
//         <Route path:"/recruitment-services" element:{<RecServicesPage />} />
//         <Route path:"/contactus" element:{<ContactUsPage />} />
//         <Route path:"/aboutB3" element:{<AboutUsPage />} />
//         <Route path:"/careers" element:{<CareerPage />} />
//         <Route path:"/blogs" element:{<Blogs />} />
//         <Route path:"*" element:{<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };