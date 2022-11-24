import React from 'react';
import { Link } from 'react-router-dom';
import DateInfo from '../../features/auth/components/Date/DateInfo.component';
import SigninFormComponent from '../../features/auth/components/SigninForm.component';


import './Auth.css';

const SigninPage = () => {
  return (
    <div className="auth-wrapper">
      <DateInfo/>
      <SigninFormComponent/>
      <p className='auth-wrapper__link'>You don't have an account ? <Link to="/register">Register</Link></p>
      </div>
  )
}

export default SigninPage