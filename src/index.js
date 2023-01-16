import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, RouterProvider} from "react-router-dom"
import Route from './Routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import {store,persistor} from "./Redux/Store"
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={Route}></RouterProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);


