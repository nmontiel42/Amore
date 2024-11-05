import React from "react";
import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.KINDE_CLIENT_ID}
      domain={import.meta.env.KINDE_DOMAIN}
      logoutUri={import.meta.env.KINDE_LOGOUT_URL}
      redirectUri={import.meta.env.KINDE_REDIRECT_URL}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);
