import React, { useEffect, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useHistory } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { LOGIN, SIGNUP } from 'graphql/auth';
import jwt from 'jsonwebtoken';

const getGoogleLoginIdToken = () => {
  let idToken = '';
  const hash = window.location.hash;
  if (hash.length > 0) {
    const splitedHash = hash.split('id_token=');
    if (splitedHash.length > 1) {
      idToken = splitedHash[1].split('&')[0];
    }
  }
  return idToken;
};

export default function LoginCheck() {
  const [userInfo, setUserInfo] = useContext(AuthContext);
  const [login, { loading: loadingLogin, data: loginResult, error: errorLogin }] = useLazyQuery(LOGIN);
  const [signupMutation, { data: signupResult, error: errorSignup, stopPolling }] = useMutation(SIGNUP);

  const history = useHistory();

  const bearerToken = localStorage.getItem('Bearer');

  useEffect(() => {
    const googleIdToken = getGoogleLoginIdToken();
    if (googleIdToken) {
      const { sub: googleId, email } = jwt.decode(googleIdToken);
      const userName = email.split('@')[0];
      login({ variables: { name: userName, googleId } });
    } else if (bearerToken) {
      const { id, name, googleId } = jwt.decode(bearerToken);
      setUserInfo({ id, name, googleId });
    } else {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    if (loginResult) {
      const { success, token } = loginResult.Login;
      if (success) {
        localStorage.setItem('Bearer', token);
        const { id, name, googleId } = jwt.decode(token);
        setUserInfo({ id, name, googleId });
      } else {
        const googleIdToken = getGoogleLoginIdToken();
        if (googleIdToken) {
          const { sub: googleId, email } = jwt.decode(googleIdToken);
          const userName = email.split('@')[0];
          signupMutation({ variables: { name: userName, googleId } });
        }
      }
    }
    return stopPolling;
  }, [loginResult]);

  useEffect(() => {
    if (signupResult) {
      const { success, token } = signupResult.Signup;
      if (success) {
        localStorage.setItem('Bearer', token);
        const { id, name, googleId } = jwt.decode(token);
        setUserInfo({ id, name, googleId });
      }
    }
    return stopPolling;
  }, [signupResult]);

  return <>쳌</>;
}
