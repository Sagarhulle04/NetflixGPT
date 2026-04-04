import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import app from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const [isLoading, setIsLoading] = useState(true);
  const [showBg, setShowBg] = useState(false);

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

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 px-10 z-50 w-full transition-all duration-300 ${
        showBg ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {isLoading && <Spinner loading={isLoading} />}
      <div className="flex justify-between items-center max-w-1xl mx-auto">
        <Link to="/">
          <img
            src="https://i.postimg.cc/85X6Zn9S/streamora.png"
            alt="streamora-logo"
            className="h-20 w-60"
          />
        </Link>
        {user && (
          <div className="flex gap-2 items-center">
            <p className="font-bold text-white">{user.displayName}</p>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              Sign Out
            </button>
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src="https://i.postimg.cc/13PRkrpq/download.jpg"
              alt="children-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
