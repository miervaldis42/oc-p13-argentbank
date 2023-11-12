// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomePage from "../pages/HomePage/index";
import Error404Page from "../pages/404/Error404Page";

// Component - Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Fallback page if nothing matches */}
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
