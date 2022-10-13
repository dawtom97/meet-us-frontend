import React, { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { validateEmail } from "../../../utils/emailValidator";
import {
  validateBirthdayLength,
  validateNameLength,
  validatePasswordLength,
} from "../../../utils/lengthValidator";
import { NewUser } from "../models/NewUser";

const RegistrationFormComponent: FC = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    blurChandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    blurChandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    blurChandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const {
    text: birthday_date,
    shouldDisplayError: birthdayHasError,
    textChangeHandler: birthdayChangeHandler,
    blurChandler: birthdayBlurHandler,
    clearHandler: birthdayClearHandler,
  } = useInput(validateBirthdayLength);


  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    birthdayClearHandler();
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameHasError || emailHasError || passwordHasError) return;
    if (name.length === 0 || email.length === 0 || email.length === 0 || birthday_date.length === 0) return;

    const newUser: NewUser = {
      name,
      email,
      password,
      birthday_date,
    };

    console.log(newUser);

    clearForm();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h2>Create Account</h2>
        <input
          name="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          value={birthday_date}
          name="birthday_date"
          onChange={birthdayChangeHandler}
          onBlur={birthdayBlurHandler}
          type="date"
        />

        <button type="submit">Register</button>
      </form>

      <Link to="/signin">Login page</Link>
    </div>
  );
};

export default RegistrationFormComponent;
