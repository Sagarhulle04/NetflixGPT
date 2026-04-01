import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const Browser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Signed Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Header />
        <div className="flex gap-2 items-center">
          <p className="font-bold"> {user.displayName} </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-white p-1.5 rounded-md bg-black hover:underline cursor-pointer"
          >
            Sign Out
          </button>
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src="https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/04/netflix.jpg?q=50&fit=crop&w=1600&h=900&dpr=1.5"
            alt="children-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Browser;
