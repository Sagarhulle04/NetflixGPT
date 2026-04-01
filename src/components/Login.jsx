import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import app from "../utils/firebase";
import toast from "react-hot-toast";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleSubmitForm(e) {
    e.preventDefault();

    const message = checkValidation(
      email.current.value,
      password.current.value,
    );
    if (message) return setErrors(message);

    if (isSignUp) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value,
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              toast.success("Account Created Successfully");
              navigate("/");
            })
            .catch((error) => {
              toast.success(error.message);
            });

          name.current.value = "";
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors(errorCode + " - " + errorMessage);
        });
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            }),
          );
          toast.success("Logged In Successfull");
          navigate("/browse");
        })
        .catch((error) => {
          toast.error("Invalid Credentials");
        });
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>

      <div className="relative z-20 border border-b-gray-800">
        <Header />
      </div>

      <form
        onSubmit={handleSubmitForm}
        className="relative z-10 flex justify-center items-center h-full"
      >
        <div className="bg-black/80 p-10 rounded-md text-white w-100">
          <h1 className="text-3xl font-bold mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>

          {isSignUp && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="w-full mb-4 p-3 bg-gray-800 rounded"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full mb-6 p-3 bg-gray-800 rounded"
          />

          <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700 cursor-pointer">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <p className="text-red-600 relative top-2">
            {" "}
            {errors.length > 0 && errors}{" "}
          </p>

          <p className="relative top-3">
            New Register ?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
