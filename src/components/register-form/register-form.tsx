import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "../../services/types/hooks";
import styles from "./register-form.module.css";
import { registerUser } from "../../services/actions/registerForm";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const dispatch = useDispatch();
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNameValue(e.target.value);
  };

  const handleRegisterClick = (): void => {
    dispatch(registerUser(emailValue, passwordValue, nameValue));
  };
  const handleRegisterFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
    e.preventDefault();
    handleRegisterClick();
  };

  return (
    <form className={styles.registerForm} onSubmit={handleRegisterFormSubmit}>
      <p className="text text_type_main-medium pb-10">Регистрация</p>
      <Input
        value={nameValue}
        onChange={onNameChange}
        placeholder="Имя"
        extraClass="mb-6"
      />
      <EmailInput
        value={emailValue}
        onChange={onEmailChange}
        isIcon={false}
        extraClass="mb-6"
      />
      <PasswordInput
        value={passwordValue}
        onChange={onPasswordChange}
        extraClass="mb-6"
      />
      <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
        Зарегистрироваться
      </Button>
      <div className={`${styles.signIn} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link className={styles.link} to="/login">
          <Button
            style={{ padding: "0px 0px 0px 8px" }}
            cellSpacing={0}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Войти
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
