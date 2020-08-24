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

export { PRODUCTS_BY_CATEGORY_ID, GET_NEW_RELEASE };
