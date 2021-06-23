/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable default-case */
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from '../services/firebase';
import { Button } from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const { from } = location.state || { from: { pathname: '/' } };

        history.replace(from);
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="errorMsg">{emailError}</p>
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <Button onClick={handleLogin}>
                Sign in
              </Button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  <b>Sing up</b>
                </span>
              </p>
            </>
          ) : (
            <>
              <Button onClick={handleSignup}>
                Sign up
              </Button>
              <p>
                Have an account ?{' '}
                <span onClick={() => setHasAccount(!hasAccount)}>
                  <b> Sign in</b>
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
