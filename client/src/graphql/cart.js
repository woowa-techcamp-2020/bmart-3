import { gql } from '@apollo/client';

const ADD_CART = gql`
  mutation($userId: Int!, $productId: Int!, $count: Int!) {
    AddCart(userId: $userId, productId: $productId, count: $count) {
      success
    }
  }
`;

const GET_CART = gql`
  query($userId: Int!) {
    GetCart(userId: $userId) {
      id
      name
      price
      img_url
      count
    }
  }
`;

const REMOVE_CART = gql`
  mutation($userId: Int!, $productId: Int!) {
    RemoveCart(userId: $userId, productId: $productId) {
      success
    }
  }
`;

const UPDATE_CART = gql`
  mutation($userId: Int!, $productId: Int!, $count: Int!) {
    UpdateCart(userId: $userId, productId: $productId, count: $count) {
      success
    }
  }
`;

const SUBMIT_ORDER = gql`
  mutation($userId: Int!) {
    SubmitOrder(userId: $userId) {
      success
    }
  }
`;

export { ADD_CART, GET_CART, REMOVE_CART, UPDATE_CART, SUBMIT_ORDER };
