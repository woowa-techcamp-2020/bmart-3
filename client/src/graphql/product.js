import { gql } from '@apollo/client';

const PRODUCTS_BY_CATEGORY_ID = gql`
  query($categoryId: Int) {
    ProductsByCategoryId(categoryId: $categoryId) {
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

export { PRODUCTS_BY_CATEGORY_ID, PRODUCTS_BY_CHILD_CATEGORY_ID };
