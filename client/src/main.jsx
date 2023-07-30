import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-btf5b41eu5m4dqh0.us.auth0.com"
    clientId="GDZFmZXmJC0dkZreP45Zwl9vzMclrIK0"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-btf5b41eu5m4dqh0.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
    >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
