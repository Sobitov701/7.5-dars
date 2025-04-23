import style from "../login/login.module.scss";
import { FormInput } from "../../componets";
import useRegister from "../../hooks/useRegister";

function Register() {
  const { data, isPending, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    register(name, email, password);
    e.target.reset();
  };

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
            <h1 className={style.login__title}>Register</h1>
            <form onSubmit={handleSubmit} className={style.login_form}>
              <FormInput type="name" label="Name" name="name" />
              <FormInput type="email" label="Email" name="email" />
              <FormInput type="password" label="Password" name="password" />
              {!isPending && (
                <button className={`${style.login_btn} btn`}>sign up</button>
              )}
              {isPending && (
                <button disabled className={`${style.login_btn} btn`}>
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

export default Register;
