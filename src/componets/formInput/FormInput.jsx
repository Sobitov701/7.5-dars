import style from "./forimInput.module.scss";

function FormInput({ label, type = "text", name }) {
  return (
    <label className={style.form_input}>
      <span>{label}</span>
      <input
        className={style.form_input}
        lable={label}
        type={type}
        name={name}
      />
    </label>
  );
}

export default FormInput;
