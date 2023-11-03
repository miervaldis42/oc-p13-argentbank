// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Components
import App from "./router/App";

// CSS
import "./index.css";

// Component - App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
