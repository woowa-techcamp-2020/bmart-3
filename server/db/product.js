import executeQuery from './share/execute-query';
import {
  getProductsQuery,
  getProductByIdQuery,
  getProductsByCategoryIdQuery,
  getProductsByChildCategoryIdQuery,
  getNewReleaseQuery,
  getPopularItemsQuery,
  getRandItemsQuery,
  getTimesaleItemsQuery,
} from './query/product';

const getProducts = async () => {
  try {
    const rows = await executeQuery(getProductsQuery());
    return rows;
  } catch (err) {
    throw err;
  }
};

const getProductById = async (id) => {
  try {
    const [row] = await executeQuery(getProductByIdQuery(id));
    return row;
  } catch (err) {
    throw err;
  }
};

const getProductsByCategoryId = async (categoryId, limit) => {
  try {
    const rows = await executeQuery(getProductsByCategoryIdQuery(categoryId, limit));
    return rows;
  } catch (err) {
    throw err;
  }
};

const getProductsByChildCategoryId = async (categoryId, id, cursor, ordertype, limit, direction) => {
  try {
    const rows = await executeQuery(
      getProductsByChildCategoryIdQuery(categoryId, id, cursor, ordertype, limit, direction)
    );
    return rows;
  } catch (err) {
    throw err;
  }
};

const getNewRelease = async (limit) => {
  try {
    const rows = await executeQuery(getNewReleaseQuery(limit));
    return rows;
  } catch (err) {
    throw err;
  }
};

const getPopularItems = async (limit) => {
  try {
    const rows = await executeQuery(getPopularItemsQuery(limit));
    return rows;
  } catch (err) {
    throw err;
  }
};

const getRandItems = async (limit) => {
  try {
    const rows = await executeQuery(getRandItemsQuery(limit));
    return rows;
  } catch (err) {
    throw err;
  }
};
const getTimeSaleItems = async (limit) => {
  try {
    const rows = await executeQuery(getTimesaleItemsQuery(limit));
    return rows;
  } catch (err) {
    throw err;
  }
};
export {
  getProducts,
  getProductById,
  getProductsByCategoryId,
  getNewRelease,
  getPopularItems,
  getRandItems,
  getTimeSaleItems,
  getProductsByChildCategoryId,
};
