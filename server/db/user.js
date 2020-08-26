import executeQuery from './share/execute-query';
import { getUserByGoogleIdQuery, signupQuery } from './query/user';
import jwt from 'jsonwebtoken';

const getBearerToken = (id, name, googleId) => {
  return `Bearer ${jwt.sign({ id, name, googleId }, process.env.JWT_SECRET, { expiresIn: '3m' })}`;
};

const getJwtByGoogleId = async (googleId) => {
  let ret = {
    success: false,
    token: null,
  };
  try {
    const [result] = await executeQuery(getUserByGoogleIdQuery(googleId));
    if (result) {
      const { id, name } = result;
      ret = {
        success: true,
        token: getBearerToken(id, name, googleId),
      };
    }
  } catch (err) {
    throw err;
  }

  return ret;
};

const signup = async (name, googleId) => {
  let ret = {
    success: false,
    token: null,
  };
  try {
    const { insertId, affectedRows } = await executeQuery(signupQuery(name, googleId));
    if (affectedRows === 1) {
      ret = {
        success: true,
        token: getBearerToken(insertId, name, googleId),
      };
    }
  } catch (err) {
    throw err;
  }
  return ret;
};

// const getUserByGoogleId = async (googleId) => {
//   try {
//     const [result] = await executeQuery(getUserByGoogleIdQuery(googleId));
//     return result;
//   } catch (err) {
//     throw err;
//   }
// };

export { getJwtByGoogleId, signup };
