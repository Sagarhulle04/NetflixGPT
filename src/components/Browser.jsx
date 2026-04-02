import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import toast from "react-hot-toast";
import Browse from "./Browse";

const Browser = () => {
  return (
    <div>
      <Header />
      <Browse />
    </div>
  );
};

export default Browser;
