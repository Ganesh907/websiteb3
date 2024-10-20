import { useRoutes } from "react-router-dom";
import AppRoutes from "./routes/Router"; // Import the Routes
import Spinner from "./Components/commoncomponents/Spinner";
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



