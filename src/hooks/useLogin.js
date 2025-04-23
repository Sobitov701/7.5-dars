import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/feature/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(res.user));
      toast.success(`Welcome back ${res.user.displayName || "user"}!`);
      navigate("/");
    } catch (err) {
      toast.error("Login failed: " + err.message);
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signIn, isPending, error };
};
