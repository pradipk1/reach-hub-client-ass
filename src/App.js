
import './App.css';
import LoginForm from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import RegisterForm from './components/Register/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import myContext from './components/context/context';
import { useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: ''
  });

  const navigate = useNavigate();

  function login(username, password) {
    let userData = JSON.parse(localStorage.getItem('registeredUser'));
    if(userData) {
      if(username !== userData.username || password !== userData.password) {
        alert('Wrong credentials entered');

      } else {
        setUser({
          isLoggedIn: true,
          username
        });
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('registeredUser', JSON.stringify({username, password}));
        alert("Login successful");
        navigate('/');
      }
      
    } else {
      alert('This user is not registered');
    }
    
  }

  // function logout() {
  //   setUser({
  //     isLoggedIn: false,
  //     username: ''
  //   });
  //   localStorage.setItem('isLoggedIn', false);
  // }

  return (
    <myContext.Provider value={{user, setUser, login}}>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/register' element={<RegisterForm />}/>
        </Routes>
      </div>
    </myContext.Provider>
    
  );
}

export default App;