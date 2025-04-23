import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../app/feature/userSlice";
import { toast } from "sonner";
import { FormInput } from "../../componets";
import { auth } from "../../firebase/config";
import style from "./login.module.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(res.user));
      toast.success(`Welcome back ${res.user.displayName || "User"}!`);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login_left}>
          <img src="../images/logo-large.svg" alt="Logo" width={121} />
          <h3>Keep track of your money and save for your future</h3>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.login_right}>
          <div>
            <h1 className={style.login__title}>Login</h1>
            <form className={style.login_form} onSubmit={handleSubmit}>
              <FormInput type="email" label="Email" name="email" />
              <FormInput type="password" label="Password" name="password" />
              {!isPending && (
                <button className={`${style.login_btn} btn`}>Login</button>
              )}
              {isPending && (
                <button className={`${style.login_btn} btn`} disabled>
                  Loading...
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
