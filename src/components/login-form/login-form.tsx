import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./login-form.module.css";
import { useDispatch } from "../../services/types/hooks";
import { loginRequest } from "../../services/actions/loginForm";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };
  const navigate = useNavigate();
  const handleLoginClick = (): void => {
    dispatch(loginRequest(emailValue, passwordValue, navigate));
  };

  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleLoginClick();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLoginFormSubmit}>
      <p className="text text_type_main-medium pb-10">Вход</p>
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
        Войти
      </Button>
      <div className={`${styles.newUser} mb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link className={styles.link} to="/register">
          <Button
            style={{ padding: "0px 0px 0px 8px" }}
            cellSpacing={0}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={styles.passwordRecovery}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link className={styles.link} to="/forgot-password">
          <Button
            style={{ padding: "0px 0px 0px 8px" }}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Восстановить
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
