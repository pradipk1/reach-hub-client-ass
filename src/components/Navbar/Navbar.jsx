import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import { Link } from 'react-router-dom'
import myContext from '../context/context';

const Navbar = () => {
    const {user, setUser} = useContext(myContext);

    const handleLogout = () => {
        setUser({
            isLoggedIn: false,
            username: ''
        });
        localStorage.setItem('isLoggedIn', false);
    }

    useEffect(() => {
        let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        
        if(isLoggedIn === true) {
            let userData = JSON.parse(localStorage.getItem('registeredUser'));
            setUser({
                isLoggedIn: true,
                username: userData.username
            });
        }
    }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'>App</Link>
      </div>
      {
        user.isLoggedIn ? <div>
            <span style={{marginRight: '10px'}}>{user.username}</span>
            <button className='submitBtn' onClick={handleLogout}>Logout</button>
        </div> : <div className='loginCont'>
            <Link to='/login'>Login</Link>
        </div>
      }
    </nav>
  );
};

export default Navbar;
