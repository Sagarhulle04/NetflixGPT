import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../utils/store";

const AppLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};

export default AppLayout;
