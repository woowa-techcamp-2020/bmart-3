import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { AuthContext } from 'context/AuthContext';
import { getGoogleLoginIdToken } from 'component/Loginpage';

export default function LoginCheck() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useContext(AuthContext);

  const bearerToken = localStorage.getItem('Bearer');

  useEffect(() => {
    const googleLoginIdToken = getGoogleLoginIdToken();
    if (bearerToken) {
      const { id, name, googleId } = jwt.decode(bearerToken);
      setUserInfo({ id, name, googleId });
      history.push('/main');
    } else if (!googleLoginIdToken) {
      history.push('/login');
    }
  }, []);

  return <></>;
}
