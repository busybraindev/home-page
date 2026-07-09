import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Sp from "./components/context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Sp>
      <App />
    </Sp>
  </BrowserRouter>,
);
