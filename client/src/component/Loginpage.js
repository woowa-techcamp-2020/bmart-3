import React, { useState, useEffect, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export default function Loginpags() {
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
        redirectUri={`${process.env.REACT_APP_PUBLIC_URI}:${process.env.REACT_APP_PUBLIC_PORT}`}
      />
    </Section>
  );
}
