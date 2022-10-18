import React, { FC, FormEvent,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { validateEmail } from "../../../utils/emailValidator";
import {
  validateBirthdayLength,
  validateNameLength,
  validatePasswordLength,
} from "../../../utils/lengthValidator";
import Button from "../../reusables/Button/Button.component";
import Input from "../../reusables/Input/Input.components";
import { register,reset } from "../auth-slice";
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

  const dispatch = useAppDispatch();

  const {isLoading, isSuccess} = useAppSelector((state) => state.auth);

  const navigate = useNavigate();


  useEffect(()=>{
    if(isSuccess) {
      dispatch(reset());
      clearForm();
      navigate('/signin')
    }
  },[isSuccess,dispatch])


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

    dispatch(register(newUser))
  };

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Input
          name="name"
          value={name}
          change={nameChangeHandler}
          blur={nameBlurHandler}
          type="text"
          placeholder="name"
          id="Name"
          label="Name"
        />
        <Input
          value={email}
          change={emailChangeHandler}
          blur={emailBlurHandler}
          name="email"
          label="Email"
          placeholder="email"
          id="Email"
          type="text"
        />
        <Input
          value={password}
          change={passwordChangeHandler}
          blur={passwordBlurHandler}
          name="password"
          type="password"
          placeholder="password"
          id="Password"
          label="Password"
        />
        <Input
          value={birthday_date}
          name="birthday_date"
          change={birthdayChangeHandler}
          blur={birthdayBlurHandler}
          type="date"
          placeholder="Birthday Date"
          id="Birthday"
          label="Birthday"
        />

        <Button isPrimary type="submit" text="Register"/>
      </form>


    </div>
  );
};

export default RegistrationFormComponent;
