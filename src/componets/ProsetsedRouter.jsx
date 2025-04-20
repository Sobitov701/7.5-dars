import { Navigate } from "react-router-dom";

function ProsetsedRouter({ children, user }) {
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default ProsetsedRouter;
