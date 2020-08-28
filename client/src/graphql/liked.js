import { gql } from '@apollo/client';

const TOGGLE_LIKED = gql`
  mutation($id: Int, $liked: String) {
    ToggleLiked(id: $id, liked: $liked) {
      message
    }
  }
`;

export { TOGGLE_LIKED };
