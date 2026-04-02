import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import app from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const [isLoading, setIsLoading] = useState(true);

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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h1> Loading... </h1>;

  return (
    <div className="px-10 z-10 bg-linear-to-b from-black">
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
            <p className="font-bold">{user.displayName}</p>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-white p-1.5 rounded-md bg-black hover:underline cursor-pointer"
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
