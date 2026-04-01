import React from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const Browser = () => {
  // const user = useSelector((store) => store.user);
  // console.log(user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signed Out Successfully");
        dispatch(removeUser());
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
        <button
          type="button"
          onClick={handleSignOut}
          className="text-white hover:underline cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browser;
