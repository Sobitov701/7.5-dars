import { Navigate } from "react-router-dom";

function ProsetsedRouter({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProsetsedRouter;
