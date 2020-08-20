import executeQuery from './share/execute-query';
import { getUsersQuery } from './query/user';

const getUsers = async ({ stream }) => {
  try {
    const result = await executeQuery({ stream, query: getUsersQuery() });
    return result;
  } catch (err) {
    throw err;
  }
};

export { getUsers };
