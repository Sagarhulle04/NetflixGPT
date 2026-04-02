import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const logoTo = user ? "/browse" : "/";

  return (
    <div className=" px-10 z-10 bg-linear-to-b from-black">
      <Link to={logoTo}>
        <img
          src="https://i.postimg.cc/85X6Zn9S/streamora.png"
          alt="netflix-logo"
          className="h-20 w-60"
        />
      </Link>
    </div>
  );
};

export default Header;
