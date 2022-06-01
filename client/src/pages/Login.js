import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
   <>
   <Header/>
    <div className="container my-1">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
  <div className="">
    <label htmlFor="email">Email address:</label>
    <input
      placeholder="youremail@test.com"
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
    />
  </div>
  <div className="">
    <label htmlFor="pwd">Password:</label>
    <input
      placeholder="******"
      name="password"
      type="password"
      id="pwd"
      onChange={handleChange}
    />
  </div>
  {error ? (
    <div>
      <p className="error-text">The provided credentials are incorrect</p>
    </div>
  ) : null}
  <div className="">
    <button type="submit">Submit</button>
  </div>
</form>
    </div>
    <Footer/>
   </>
  );
}

export default Login;
