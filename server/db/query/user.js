import mysql2 from 'mysql2';

const getUsersQuery = () => {
  const getUsersFormat = `select * from user`;
  const getUsers = mysql2.format(getUsersFormat);
  return getUsers;
};

export { getUsersQuery };
