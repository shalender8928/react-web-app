import React, { useState } from 'react';
import { API_AUTH_URL } from '../../config';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const emailChangehandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const formSubmitHandler = async(e) => {
    console.log('Login form submitted');
    e.preventDefault();

    try {
      const response = await fetch(`${API_AUTH_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json' 
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.token);
        // Store user and token in session using cookies
        // setCookie('user', JSON.stringify(data.user));
        setCookie('token', data.token);
        
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }

  }
  
	return (
		<form action="#" className="contact-form" onSubmit={formSubmitHandler}>
      <div className="row flex">
        <div className="col-md-12">
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={emailChangehandler} required />
        </div>
        <div className="col-md-12">
          <input type="password" name="password" id="password" placeholder="password" value={password} onChange={passwordChangeHandler} required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="button text-center rounded-buttons">
            <button type="submit" className="btn primary-btn rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
	);
}

export default LoginForm;