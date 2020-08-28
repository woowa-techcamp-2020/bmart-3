import executeQuery from './share/execute-query';
import {
  addCartQuery,
  getCartQuery,
  updateCartQuery,
  removeCartQuery,
  submitOrderQuery,
  removeCartByUserQuery,
} from './query/cart';

const addCart = async (userId, productId, count) => {
  let ret = {
    success: false,
  };
  try {
    const { insertId, affectedRows } = await executeQuery(addCartQuery(userId, productId, count));
    if (affectedRows === 1) {
      ret = {
        success: true,
      };
    }
  } catch (err) {
    throw err;
  }
  return ret;
};

const getCart = async (userId) => {
  try {
    const rows = await executeQuery(getCartQuery(userId));
    return rows;
  } catch (err) {
    throw err;
  }
};

const removeCart = async (userId, productId) => {
  let ret = {
    success: false,
  };
  try {
    const { affectedRows } = await executeQuery(removeCartQuery(userId, productId));
    if (affectedRows === 1) {
      ret = {
        success: true,
      };
    }
  } catch (err) {
    throw err;
  }
  return ret;
};

const updateCart = async (userId, productId, count) => {
  let ret = {
    success: false,
  };
  try {
    const { affectedRows } = await executeQuery(updateCartQuery(userId, productId, count));
    if (affectedRows === 1) {
      ret = {
        success: true,
      };
    }
  } catch (err) {
    throw err;
  }
  return ret;
};

const submitOrder = async (userId) => {
  let ret = {
    success: false,
  };
  try {
    const { affectedRows: submitOrderAffectedRows } = await executeQuery(submitOrderQuery(userId));
    const { affectedRows: removeCartByUserAffectedRows } = await executeQuery(removeCartByUserQuery(userId));
    if (submitOrderAffectedRows > 0 && removeCartByUserAffectedRows) {
      ret = {
        success: true,
      };
    }
  } catch (err) {
    throw err;
  }
  return ret;
};

export { addCart, getCart, removeCart, updateCart, submitOrder };
