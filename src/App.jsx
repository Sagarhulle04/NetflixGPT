import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        containerStyle={{
          margin: "8px",
        }}
        gutter={12}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "var(--color-grey-0)",
          },
        }}
      />
    </BrowserRouter>
  );
};

export default App;
