import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Registration.css';

import { isUsernameAvailableHTTPRequest, registerHTTPRequest } from '../../../services/api-service';
import { setItemInLS } from '../../../services/storage-service';

const Registration = ({ displayPageLoader, history }) => {
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  let typingTimer;

  const handlePasswordChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDownChange = (e) => {
    clearTimeout(typingTimer);
  };

  const handleKeyUpChange = (e) => {
    const username = e.target.value;
    typingTimer = setTimeout(() => {
      checkIfUsernameAvailable(username);
    }, 1200);
  };

  const checkIfUsernameAvailable = async (username) => {
    displayPageLoader(true);
    const isUsernameAvailableResponse = await isUsernameAvailableHTTPRequest(
      username
    );
    displayPageLoader(false);
    if (!isUsernameAvailableResponse.response.isUsernameAvailable) {
      setRegistrationErrorMessage(isUsernameAvailableResponse.message);
    } else {
      setRegistrationErrorMessage(null);
    }
    setUsername(username);
  };

  const registerUser = async () => {
    displayPageLoader(true);
    const userDetails = await registerHTTPRequest(username, password);
    displayPageLoader(false);

    if (userDetails.code === 200) {
      setItemInLS('userDetails', userDetails.response);
      history.push(`/home`);
    } else {
      setRegistrationErrorMessage(userDetails.message);
    }
  };

  return (
    <div className='app__register-container'>
      <div className='app__form-row'>
        <label>Username:</label>
        <input
          type='email'
          className='email'
          onKeyDown={handleKeyDownChange}
          onKeyUp={handleKeyUpChange}
        />
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
          {registrationErrorMessage ? registrationErrorMessage : ''}
        </span>
      </div>
      <div className='app__form-row'>
        <button onClick={registerUser}>Registration</button>
      </div>
    </div>
  );
};

export default withRouter(Registration);
