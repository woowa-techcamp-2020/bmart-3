import { gql } from '@apollo/client';

const PRODUCTS_BY_CATEGORY_ID = gql`
  query($categoryId: Int) {
    ProductsByCategoryId(categoryId: $categoryId) {
      name
      price
      category_id
      img_url
    }
  }
`;

const GET_NEW_RELEASE = gql`
  query($limit: Int) {
    GetNewRelease(limit: $limit) {
      name
      price
      category_id
      img_url
    }
  }
`;

const GET_POPULAR_ITEMS = gql`
  query($limit: Int) {
    GetPopularItems(limit: $limit) {
      name
      price
      category_id
      img_url
    }
  }
`;

const GET_RAND_ITEMS = gql`
  query($limit: Int) {
    GetRandItems(limit: $limit) {
      name
      price
      category_id
      img_url
    }
  }
`;

const GET_TIMESALE_ITEMS = gql`
  query($limit: Int) {
    GetTimeSaleItems(limit: $limit) {
      id
      name
      img_url
      liked
      price
      discount_percent
    }
  }
`;

export { PRODUCTS_BY_CATEGORY_ID, GET_NEW_RELEASE, GET_POPULAR_ITEMS, GET_RAND_ITEMS, GET_TIMESALE_ITEMS };
