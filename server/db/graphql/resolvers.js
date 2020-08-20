// import mysql2 from 'mysql2/promise';
import { getUsers } from '../user';
import { getProducts, getProductById, getProductsByCategoryId } from '../product';
import { getCategoriesParent, getCategoriesChild } from '../category';
export default async function () {
  return {
    Query: {
      Users: async () => await getUsers(),
      Products: async () => await getProducts(),
      Product: async (_, { id }) => await getProductById(id),
      ProductsByCategoryId: async (_, { categoryId }) => await getProductsByCategoryId(categoryId),
      CategoriesParent: async () => await getCategoriesParent(),
      CategoriesChild: async (_, { parentName }) => await getCategoriesChild(parentName),
    },
  };
}
