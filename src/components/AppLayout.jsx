import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import store from "../utils/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import app from "../utils/firebase";

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
        console.log(uid, email, displayName);
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
