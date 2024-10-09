import { useRoutes } from "react-router-dom";
import AppRoutes from "./Routes/Router"; // Import the Routes
import Spinner from "./Components/CommonComponents/Spinner";
import { Suspense } from "react";

function App() {
  const routing = useRoutes(AppRoutes);

  return (
    <div>
       <Suspense fallback={<Spinner />}>
      {routing}
      </Suspense>
    </div>
  );
}

export default App;




// import { useEffect, useState } from "react";
// import Navbar from "./Components/CommonComponents/Navbar";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import Spinner from "./Components/CommonComponents/Spinner";
// import { ColorTheme } from "./Components/ColorTheme";
// const [isVisible, setIsVisible] = useState(false);

// const toggleVisibility = () => {
//   setIsVisible(window.scrollY > 100);
// };

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// useEffect(() => {
//   window.addEventListener("scroll", toggleVisibility);
//   return () => {
//     window.removeEventListener("scroll", toggleVisibility);
//   };
// }, []);

{/* <Router>
<div> */}
{/* <Navbar /> */ }
{/* <AppRoutes /> */ }
{/* <button
    onClick={scrollToTop}
    className={`fixed bottom-16 right-5  bg-yellow-400 text-black hover:text-white h-10 w-10 rounded-full flex justify-center items-end shadow-lg hover:bg-[#0060b5] transition-opacity ${
      isVisible ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <KeyboardDoubleArrowUpIcon
      className="animate-bounce"
      style={{ fontSize: "30px" }}
    />
  </button> */}
// </div>
{/* <ColorTheme /> */ }
// </Router>
