import React,{FC,FormEvent} from 'react'
import {Link} from 'react-router-dom'

const RegistrationFormComponent:FC = () => {


  const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("clicked")
  }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <h2>Create Account</h2>
            <input name="name" type="text" placeholder='name'/>
            <input name="email" type="text" placeholder='email'/>
            <input name="password" type="password" placeholder='password'/>
            <input name="birthday_date" type="date" />

            <button type="submit">Register</button>

        </form>

        <Link to="/signin">Login page</Link>
    </div>
  )
}

export default RegistrationFormComponent