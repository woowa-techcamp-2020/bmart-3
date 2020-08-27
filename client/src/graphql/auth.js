import { gql } from '@apollo/client';

const LOGIN = gql`
  query($googleId: String!) {
    Login(googleId: $googleId) {
      success
      token
    }
  }
`;

const SIGNUP = gql`
  mutation($name: String!, $googleId: String!) {
    Signup(name: $name, googleId: $googleId) {
      success
      token
    }
  }
`;

export { LOGIN, SIGNUP };
