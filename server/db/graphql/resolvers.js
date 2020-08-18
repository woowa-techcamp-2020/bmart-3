// import mysql2 from 'mysql2/promise';
import { getUsers } from '../user';

export default async function (stream) {
  return {
    Query: {
      Users: async () => await getUsers({ stream }),
    },
  };
}
