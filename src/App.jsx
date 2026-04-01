import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { Toaster } from "react-hot-toast";
import Browser from "./components/Browser";
import ProtectedRoute from "./components/ProtectedRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      } else {
        dispatch(removeUser());
      }
      setAuthReady(true);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/browse"
          element={
            <ProtectedRoute authReady={authReady}>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Browser />} />
        </Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
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
