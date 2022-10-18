import React, { FC, FormEvent,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { validateEmail } from "../../../utils/emailValidator";
import { validatePasswordLength } from "../../../utils/lengthValidator";
import { login, reset } from "../auth-slice";
import { LoginUser } from "../models/LoginUser.interface";

const SigninFormComponent: FC = () => {
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

  const dispatch = useAppDispatch();

  const {isLoading, isSuccess,isAuthenticated} = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(()=>{
    if(isSuccess) {
      dispatch(reset());
      clearForm();
    }
  },[isSuccess,dispatch])

  useEffect(()=>{
    if(!isAuthenticated) return;
    navigate('/')
  },[isAuthenticated])

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;
    if (email.length === 0 || password.length === 0) return;

    const loginUser:LoginUser = {email, password}

    dispatch(login(loginUser))

  };

  if(isLoading) return <p>Loading....</p>

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h2>Login</h2>
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

        <button type="submit">Login</button>
      </form>

      <Link to="/register">Register page</Link>
    </div>
  );
};

export default SigninFormComponent;
