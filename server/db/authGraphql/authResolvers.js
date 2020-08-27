import { getJwtByGoogleId, getUserByGoogleId, signup } from '../user';
export default async function () {
  return {
    Query: {
      Login: async (_, { googleId }) => await getJwtByGoogleId(googleId),
    },
    Mutation: {
      Signup: async (_, { name, googleId }) => await signup(name, googleId),
    },
  };
}
