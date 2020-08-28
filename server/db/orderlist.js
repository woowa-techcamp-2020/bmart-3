import executeQuery from './share/execute-query';
import { getOrderlistByUserIdQuery } from './query/orderlist';

const getOrderlistByUserId = async (userId) => {
  try {
    const rows = await executeQuery(getOrderlistByUserIdQuery(userId));
    return rows;
  } catch (err) {
    throw err;
  }
};

export { getOrderlistByUserId };
