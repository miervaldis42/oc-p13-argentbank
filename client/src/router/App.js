// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomePage from "../pages/HomePage/index";

// Component - Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
