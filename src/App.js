import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import Navbar from "./Pages/Navbar";
import { TechHomePage } from "./Pages/Technology/TechHomePage";
import { TechClientsPage } from "./Pages/Technology/TechClientsPage";
import { RecServicesPage } from "./Pages/Recruitment/RecServicesPage";
import { RecClientsPage } from "./Pages/Recruitment/RecClientsPage";
import { ContactUsPage } from "./Pages/ContactUsPage";
import { CareerPage } from "./Pages/CareerPage";
import RecHomePage from "./Pages/Recruitment/RecHomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import { TechServicesPage } from "./Pages/Technology/TechServicesPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<LandingPage />} />
          

          <Route path="/technology" element={<TechHomePage />} />
          <Route path="/technology-services" element={<TechServicesPage />} />
          <Route path="/technology-clients" element={<TechClientsPage />} />

          <Route path="/recruitment" element={<RecHomePage />} />
          <Route path="/recruitment-services" element={<RecServicesPage />} />
          <Route path="/recruitment-clients" element={<RecClientsPage />} /> 
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/career" element={<CareerPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
