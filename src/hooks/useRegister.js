import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

export const useRegist = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPendin] = useState(null);

  const register = (displayName, email, password) => {};

  return { data, isPending, register };
};
