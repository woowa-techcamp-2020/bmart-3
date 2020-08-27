import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import ApolloClient from 'apollo-client';
import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthProvider } from 'context/AuthContext';
import { setContext } from '@apollo/client/link/context';
import jwt from 'jsonwebtoken';

const baseUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

const tokenExpiredThenRedirectLoginPage = (token) => {
  const { exp } = jwt.decode(token);
  const currentTime = new Date().getTime() / 1000;
  if (currentTime > exp) {
    localStorage.removeItem('Bearer');
    window.location.href = `${process.env.PUBLIC_URL}:${process.env.REACT_APP_PUBLIC_PORT}/login`;
  }
};

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('Bearer');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = new RetryLink().split(
  () => {
    const bearerToken = localStorage.getItem('Bearer');
    if (bearerToken) {
      tokenExpiredThenRedirectLoginPage(bearerToken);
    }
    return !bearerToken; // true면 두번째 파라미터 link가 실행, false면 세번째 파라미터 link가 실행
  },
  new createHttpLink({ uri: `${baseUrl}/auth` }),
  new createHttpLink({ uri: `${baseUrl}/graphql` })
);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root')
);
