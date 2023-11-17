// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesList from "./routesList";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/authSlice";

// Components
import HomePage from "../pages/HomePage/index";
import LoginPage from "../pages/LoginPage/index";
import Error404Page from "../pages/404/Error404Page";
import Profile from "../pages/ProfilePage";

// Router
function App() {
  const dispatch = useDispatch();

  // Set token from the persistant one if the page is reloaded
  const isAuth = useSelector((state) => state.auth.isValid);
  const token = localStorage.getItem("token");
  if (!isAuth && token !== null && token.length > 0) {
    dispatch(setToken(token));
  }

  return (
    <Router>
      <Routes>
        <Route path={routesList.home} element={<HomePage />} />

        {isAuth ? (
          <Route path={routesList.profile} element={<Profile />} />
        ) : (
          <Route path={routesList.login} element={<LoginPage />} />
        )}

        {/* Fallback page if nothing matches */}
        <Route path={routesList.routeCatcher} element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
