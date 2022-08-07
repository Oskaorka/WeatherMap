import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "./app/store/store";
import { persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";

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
