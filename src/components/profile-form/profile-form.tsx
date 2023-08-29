import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";
import styles from "./profile-form.module.css";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { updateUserProfile } from "../../services/actions/profileForm";

function ProfileForm() {
  const userName: string = useSelector(
    (store) => store.checkAuth.user?.name || "",
  );
  const userEmail: string = useSelector(
    (store) => store.checkAuth.user?.email || "",
  );
  const [nameValue, setNameValue] = useState(userName);
  const [emailValue, setEmailValue] = useState(userEmail);
  const [passwordValue, setPasswordValue] = useState("*******");
  const dispatch = useDispatch();
  const isModified: boolean =
    userName !== nameValue || userEmail !== emailValue;
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(e.target.value);
  };
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNameValue(e.target.value);
  };

  useEffect((): void => {
    setNameValue(userName);
    setEmailValue(userEmail);
  }, [userName, userEmail]);

  const handleSaveClick = (): void => {
    dispatch(updateUserProfile(nameValue, emailValue));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSaveClick();
  };

  const handleCancelClick = (): void => {
    setNameValue(userName);
    setEmailValue(userEmail);
  };

  return (
    <div className={styles.profileSection}>
      <form
        className={`${styles.profileForm} ml-15`}
        onSubmit={handleFormSubmit}
      >
        <Input
          type={"text"}
          icon={"EditIcon"}
          value={nameValue}
          onChange={onNameChange}
          placeholder="Имя"
        />
        <EmailInput isIcon={true} value={emailValue} onChange={onEmailChange} />
        <PasswordInput
          icon={"EditIcon"}
          value={passwordValue}
          onChange={onPasswordChange}
        />
        <div>
          <Button
            disabled={!isModified}
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
          >
            Сохранить
          </Button>
          <Button
            style={{ padding: "0px 0px 0px 24px" }}
            cellSpacing={0}
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={handleCancelClick}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
