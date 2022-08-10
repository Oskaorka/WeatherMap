import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, createStore } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./app/assets/locales/en/translation.json";
import ruJson from "./app/assets/locales/ru/translation.json";
import uaJson from "./app/assets/locales/ua/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ruJson },
    en: { translation: enJson },
    ua: { translation: uaJson },
  },
  lng: localStorage.getItem("lang") || "ru",
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const GatePersist: any = PersistGate;
const store = createStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GatePersist loading={null} persistor={persistor}>
        <App />
      </GatePersist>
    </Provider>
  </React.StrictMode>
);
