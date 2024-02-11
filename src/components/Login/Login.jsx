import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
import myContext from '../context/context';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const {user, login} = useContext(myContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    login(formData.username, formData.password);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            required
            placeholder='Enter Username'
            onChange={(e) => setFormData({
                ...formData,
                username: e.target.value
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            placeholder='Enter Password'
            onChange={(e) => setFormData({
                ...formData,
                password: e.target.value
            })}
          />
        </div>
        <p style={{textAlign: 'center'}}>Don't have an account? <Link to='/register' style={{color: 'blue'}}>Register</Link></p>
        <button className='submitBtn' type="submit" style={{marginTop: '10px'}}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
