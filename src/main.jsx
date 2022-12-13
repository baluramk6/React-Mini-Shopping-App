import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AppContextProvider>
    <BrowserRouter>
      {/* <ChakraProvider> */}
      <App />
      {/* </ChakraProvider> */}
    </BrowserRouter>
  </AppContextProvider>

  // </React.StrictMode>
);
