import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import RegisterPage from './pages/Register.page';
import SigninPage from './pages/Signin.page';


function App() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                   <Route path='/' element={<HomePage/>}/>
                   <Route path='/signin' element={<SigninPage/>}/>
                   <Route path='/register' element={<RegisterPage/>}/>
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
