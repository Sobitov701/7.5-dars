import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/feature/userSlice";
import { toast } from "sonner";

export const useRegist = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const register = async (displayName, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      const user = req.user;

      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: `https://api.dicebear.com/9.x/dylan/svg?seed=${displayName}`,
      });

      toast.success(`Welcome ${displayName}!`);
      dispatch(login(user));
      setData(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Bu email allaqachon ro'yxatdan o'tgan.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Parol juda oddiy, iltimos kuchliroq parol kiriting.");
      } else {
        toast.error(error.message);
      }
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, register };
};

export default useRegist;
