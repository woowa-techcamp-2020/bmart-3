import executeQuery from './share/execute-query';
import { getUsersQuery } from './query/user';

const getUsers = async () => {
  try {
    const result = await executeQuery(getUsersQuery());
    return result;
  } catch (err) {
    throw err;
  }
};

export { getUsers };
