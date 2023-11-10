//From 20-React/01-Activities/16-Stu_React-Forms/Solved/src/components/Form/Form.js
import React, { useState } from 'react';
import './form.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function RegisterForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
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
    } else if (inputType === 'username') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to register');
      }
    }
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !username) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password) || !password) {
      setErrorMessage(
        `Choose a more secure password`
      );
      return;
    };

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };
  
  return (
    <div>
      <form className="form" style={{display: "flex", flexDirection: "column", marginTop: "25%"}}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>Register</button>
      </form>
      {errorMessage && (
        <div style={{display: "flex", justifyContent: "center"}}>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
  );
}

export default RegisterForm;