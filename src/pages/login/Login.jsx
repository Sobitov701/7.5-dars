import { FormInput } from "../../componets";
import style from "./login.module.scss";

function Login() {
  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login_left}>
          <img src="../images/logo-large.svg" alt="" width={121} />
          <h3>Keep track of your money and save for your future</h3>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.login_right}>
          <div>
            <h1 className={style.login__title}>Login</h1>
            <form className={style.login_form}>
              <FormInput type="email" label="Email" name="email" />
              <FormInput type="password" label="Password" name="password" />
              <button className={`${style.login_btn} btn`}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
