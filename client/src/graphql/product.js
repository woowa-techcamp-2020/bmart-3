import { gql } from '@apollo/client';

const PRODUCTS_BY_CATEGORY_ID = gql`
  query($categoryId: Int, $limit: Int) {
    ProductsByCategoryId(categoryId: $categoryId, limit: $limit) {
      id
      name
      price
      img_url
      discount_percent
    }
  }
`;

const PRODUCTS_BY_CHILD_CATEGORY_ID = gql`
  query($categoryId: Int, $id: Int, $cursor: Int, $ordertype: String, $limit: Int, $direction: String) {
    ProductsByChildCategoryId(
      categoryId: $categoryId
      id: $id
      cursor: $cursor
      ordertype: $ordertype
      limit: $limit
      direction: $direction
    ) {
      id
      name
      price
      registered_date
      remain
      saled_count
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

export {
  PRODUCTS_BY_CATEGORY_ID,
  PRODUCTS_BY_CHILD_CATEGORY_ID,
  GET_NEW_RELEASE,
  GET_POPULAR_ITEMS,
  GET_RAND_ITEMS,
  GET_TIMESALE_ITEMS,
};
