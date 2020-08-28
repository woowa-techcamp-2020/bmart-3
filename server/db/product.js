import executeQuery from './share/execute-query';
import {
  getProductsQuery,
  getProductByIdQuery,
  getProductsByCategoryIdQuery,
  getPagedProductsByChildCategoryIdQuery,
  getPagedProductsByParentCategoryIdQuery,
  getNewReleaseQuery,
  getPopularItemsQuery,
  getRandItemsQuery,
  getSearchProductsQuery,
  getTimesaleItemsQuery,
  toggleLikedQuery,
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

const getPagedProductsByChildCategoryId = async (categoryId, id, cursor, ordertype, limit, direction) => {
  try {
    const rows = await executeQuery(
      getPagedProductsByChildCategoryIdQuery(categoryId, id, cursor, ordertype, limit, direction)
    );
    return rows;
  } catch (err) {
    throw err;
  }
};

const getPagedProductsByParentCategoryId = async (categoryId, id, cursor, ordertype, limit, direction) => {
  try {
    const rows = await executeQuery(
      getPagedProductsByParentCategoryIdQuery(categoryId, id, cursor, ordertype, limit, direction)
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

const toggleLiked = async (userId, id, liked) => {
  try {
    await executeQuery(toggleLikedQuery(userId, id, liked));
    return { message: 'success' };
  } catch (err) {
    throw err;
  }
};

const getSearchProducts = async (keyword, limit) => {
  try {
    const rows = await executeQuery(getSearchProductsQuery(keyword, limit));
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
  getSearchProducts,
  getTimeSaleItems,
  getPagedProductsByChildCategoryId,
  getPagedProductsByParentCategoryId,
  toggleLiked,
};
