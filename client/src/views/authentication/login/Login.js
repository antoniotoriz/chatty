import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

import { loginHTTPRequest } from '../../../services/api-service';
import { setItemInLS } from '../../../services/storage-service';

const Login = ({ displayPageLoader, history }) => {
  // const { displayPageLoader, history } = props;
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    displayPageLoader(true);
    const userDetails = await loginHTTPRequest(username, password);
    displayPageLoader(false);

    if (userDetails.code === 200) {
      setItemInLS('userDetails', userDetails.response);
      history.push('/home');
    } else {
      setLoginErrorMessage(userDetails.message);
    }
  };

  return (
    <div className='app__login-container'>
      <div className='app__form-row'>
        <label>Username:</label>
        <input type='email' className='email' onChange={handleUsernameChange} />
      </div>
      <div className='app__form-row'>
        <label>Password:</label>
        <input
          type='password'
          className='password'
          onChange={handlePasswordChange}
        />
      </div>
      <div className='app__form-row'>
        <span className='error-message'>
          {loginErrorMessage ? loginErrorMessage : ''}
        </span>
      </div>
      <div className='app__form-row'>
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
};

export default withRouter(Login);
