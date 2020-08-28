import { gql } from '@apollo/client';

const TOGGLE_LIKED = gql`
  mutation($userId: Int, $id: Int, $liked: String) {
    ToggleLiked(userId: $userId, id: $id, liked: $liked) {
      message
    }
  }
`;

export { TOGGLE_LIKED };
