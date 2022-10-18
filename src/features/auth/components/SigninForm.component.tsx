import { FC, FormEvent,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/input/use-input";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { validateEmail } from "../../../utils/emailValidator";
import { validatePasswordLength } from "../../../utils/lengthValidator";
import Button from "../../reusables/Button/Button.component";
import Input from "../../reusables/Input/Input.components";
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

        <Button isPrimary type="submit" text="Login"/>
      </form>
    
    </div>
  );
};

export default SigninFormComponent;
