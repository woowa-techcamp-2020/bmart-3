// import mysql2 from 'mysql2/promise';
import { getUsers } from '../user';
export default async function () {
  return {
    Query: {
      Users: async () => await getUsers(),
    },
  };
}
