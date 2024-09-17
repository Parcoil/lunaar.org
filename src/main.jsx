import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TabcloakProvider } from "./lib/TabcloakContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer theme="colored" position="bottom-right" />
    <TabcloakProvider>
      <App />
    </TabcloakProvider>
  </StrictMode>
);
