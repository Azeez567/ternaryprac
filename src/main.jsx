import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import App1 from "./App1";
import App2 from "./App2";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import ServicesPage from "./ServicesPage";
import App3 from "./App3";
import App4 from "./App4";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>

    <PersistGate
      loading={null}
      persistor={persistor}
    >

      <QueryClientProvider client={queryClient}>

        <App4/>

      </QueryClientProvider>

    </PersistGate>

  </Provider>

);