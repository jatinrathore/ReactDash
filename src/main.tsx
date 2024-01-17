import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      rtl={false}
      theme="colored"
      toastStyle={{ backgroundColor: "#9ADE7B" }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
