import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import reportWebVitals from "./reportWebVitals.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// const domain = "dev-4hjyir23x5jta1gu.us.auth0.com";
// const clientId = "64ba3dfe7872259dabb5c283";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    > */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

//reportWebVitals();
