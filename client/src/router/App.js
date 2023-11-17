// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import routesList from "./routesList";

// Components
import HomePage from "../pages/HomePage/index";
import LoginPage from "../pages/LoginPage/index";
import Error404Page from "../pages/404/Error404Page";

// Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routesList.home} element={<HomePage />} />
        <Route path={routesList.login} element={<LoginPage />} />

        {/* Fallback page if nothing matches */}
        <Route path={routesList.routeCatcher} element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
