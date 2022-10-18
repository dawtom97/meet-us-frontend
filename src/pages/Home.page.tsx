import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks'

const HomePage = () => {

  const dispatch = useAppDispatch();
  const {isLoading,user} = useAppSelector(state=>state.auth);
  console.log(user)
  const navigate = useNavigate();

  const handleLogout = () => {
     dispatch(logout());
     navigate("/signin")
  }

  if(isLoading) return <p>Loading....</p>

  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleLogout}>Logout {user?.email}</button>
    </div>
  )
}

export default HomePage