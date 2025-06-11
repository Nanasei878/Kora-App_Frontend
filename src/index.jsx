import React from "react";
import ReactDOMClient from "react-dom/client";
import store from './reducers/store';
import { Provider } from 'react-redux'
import { App } from "./App";



const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );
