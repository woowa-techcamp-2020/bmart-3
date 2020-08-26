import mysql2 from 'mysql2';

const getUserByGoogleIdQuery = (googleId) => {
  const getUserByGoogleIdFormat = `select * from user where google_id=?`;
  const getUserByGoogleId = mysql2.format(getUserByGoogleIdFormat, [googleId]);
  return getUserByGoogleId;
};

const signupQuery = (name, googleId) => {
  const signupFormat = `insert into user(name, google_id) values(?,?)`;
  const signup = mysql2.format(signupFormat, [name, googleId]);
  return signup;
};

export { getUserByGoogleIdQuery, signupQuery };
