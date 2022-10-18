import React from "react";
import { Link } from "react-router-dom";
import DateInfo from "../../features/auth/components/Date/DateInfo.component";
import RegistrationFormComponent from "../../features/auth/components/RegistrationForm.component";
import "./Auth.css";

const RegisterPage = () => {
  return (
    <div className="auth-wrapper">
      <DateInfo />
      <RegistrationFormComponent />
      <p className="auth-wrapper__link">
        You already have an account ? <Link to="/signin">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
