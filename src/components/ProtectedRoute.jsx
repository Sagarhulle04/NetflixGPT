import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, authReady }) => {
  const user = useSelector((store) => store.user);

  if (!authReady) return null;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
