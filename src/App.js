import { useRoutes } from "react-router-dom";
import AppRoutes from "./routes/Router"; // Import the Routes
import Spinner from "./Components/common/Spinner";
import { Suspense } from "react";
import ThemeProvider from "./Components/common/ThemeProvider";

function App() {
  const routing = useRoutes(AppRoutes);

  return (
    <ThemeProvider>
    <div  className="bg-blue-50 dark:bg-transparent">

       <Suspense fallback={<Spinner />}>
      {routing}
      </Suspense>
    </div>
    </ThemeProvider>
  );
}

export default App;



