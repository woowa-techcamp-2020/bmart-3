import React, { useState, useEffect, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import jwt from 'jsonwebtoken';
import { AuthContext } from 'context/AuthContext';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { LOGIN, SIGNUP } from 'graphql/auth';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

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

export default function Loginpags() {
  const [userInfo, setUserInfo] = useContext(AuthContext);
  const history = useHistory();

  const [login, { loading: loadingLogin, data: loginResult, error: errorLogin }] = useLazyQuery(LOGIN);
  const [signupMutation, { data: signupResult, error: errorSignup, stopPolling }] = useMutation(SIGNUP);

  useEffect(() => {
    const bearerToken = localStorage.getItem('Bearer');
    if (bearerToken) {
      const { id, name, googleId } = jwt.decode(bearerToken);
      setUserInfo({ id, name, googleId });
      history.push('/');
    }
    const googleIdToken = getGoogleLoginIdToken();
    if (googleIdToken) {
      const { sub: googleId, email } = jwt.decode(googleIdToken);
      const userName = email.split('@')[0];
      login({ variables: { name: userName, googleId } });
    }
  }, []);

  useEffect(() => {
    if (loginResult) {
      const { success, token } = loginResult.Login;
      if (success) {
        localStorage.setItem('Bearer', token);
        const { id, name, googleId } = jwt.decode(token);
        setUserInfo({ id, name, googleId });
        history.push('/');
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
        history.push('/');
      }
    }
    return stopPolling;
  }, [signupResult]);

  return (
    <Section>
      <GoogleLogin
        icon={true}
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
        onFailure={(error) => console.log(error)}
        cookiePolicy={'single_host_origin'}
        responseType="id_token"
        buttonText="구글 계정으로 로그인"
        uxMode="redirect"
        redirectUri={`${process.env.REACT_APP_PUBLIC_URI}:${process.env.REACT_APP_PUBLIC_PORT}/login`}
      />
    </Section>
  );
}
