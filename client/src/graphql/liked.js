import { gql } from '@apollo/client';

const TOGGLE_LIKED = gql`
  mutation($userId: Int, $id: Int, $liked: String) {
    ToggleLiked(userId: $userId, id: $id, liked: $liked) {
      message
    }
  }
`;

const GET_LIKED = gql`
  query($userId: Int!) {
    GetLiked(userId: $userId) {
      id
    }
  }
`;

export { TOGGLE_LIKED, GET_LIKED };
