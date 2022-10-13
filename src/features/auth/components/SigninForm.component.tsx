import React,{FC,FormEvent} from 'react'
import {Link} from 'react-router-dom'

const SigninFormComponent:FC = () => {


  const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("clicked login")
  }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <h2>Login</h2>
            <input name="email" type="text" placeholder='email'/>
            <input name="password" type="password" placeholder='password'/>

            <button type="submit">Login</button>

        </form>

        <Link to="/register">Register page</Link>
    </div>
  )
}

export default SigninFormComponent