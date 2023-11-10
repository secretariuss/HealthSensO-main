//From 20-React/01-Activities/16-Stu_React-Forms/Solved/src/components/Form/Form.js
import React, { useState } from 'react';
import './form.css';
import { checkPassword, validateEmail } from '../../utils/helpers';

function LoginForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to log in');
      }
    }

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !password) {
      setErrorMessage('Email or password is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    if (!checkPassword(password) || !password) {
      setErrorMessage('Password is invalid');
      return;
    };

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form  style={{display: "flex", flexDirection: "column", marginTop: "38%"}} className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>Login</button>
        {/* also send to path="/home" if valid*/}
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
  );
}

export default LoginForm;