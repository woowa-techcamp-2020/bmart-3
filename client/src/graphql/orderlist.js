import { gql } from '@apollo/client';

const GET_ORDER_BY_USERID = gql`
  query($userId: Int!) {
    GetOrderlistByUserId(userId: $userId) {
      id
      name
      count
      date
    }
  }
`;

export { GET_ORDER_BY_USERID };
