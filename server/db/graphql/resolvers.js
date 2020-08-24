// import mysql2 from 'mysql2/promise';
import { getUsers } from '../user';
import { getProducts, getProductById, getProductsByCategoryId, getProductsByChildCategoryId } from '../product';
import { getCategoriesParent, getCategoriesChild } from '../category';
export default async function () {
  return {
    Query: {
      Users: async () => await getUsers(),
      Products: async () => await getProducts(),
      Product: async (_, { id }) => await getProductById(id),
      ProductsByCategoryId: async (_, { categoryId }) => await getProductsByCategoryId(categoryId),
      ProductsByChildCategoryId: async (_, { categoryId, id, cursor, ordertype, limit, direction }) =>
        await getProductsByChildCategoryId(categoryId, id, cursor, ordertype, limit, direction),
      CategoriesParent: async () => await getCategoriesParent(),
      CategoriesChild: async (_, { parentId }) => await getCategoriesChild(parentId),
    },
  };
}
