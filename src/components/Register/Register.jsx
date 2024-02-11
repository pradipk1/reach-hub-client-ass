import React, { useState } from 'react';
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Register</h2>
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
        <p style={{textAlign: 'center'}}>Already have an account? <Link to='/login' style={{color: 'blue'}}>Login</Link></p>
        <button className='submitBtn' type="submit" style={{marginTop: '10px'}}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
