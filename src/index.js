import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// sk_test_51MP068CBVzJFr09g2fotOywnmo4OuebRHfEazV4yBrYQeipxCnbmNX6Y9UI4hlHkUo9YrpGYlzszvkepwUCbIL5n00OsYfjyfl    to log results (for example: reportWebVitals(console.log))
// pk_test_51MP068CBVzJFr09gu8HzY5GxrllFEnKD7WX6QXvX4a0PMRYlXSg4LPMaBJnQho7Si3FiQ1OH2Odz07KSH37kxlaT001gRCFiLd    or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
