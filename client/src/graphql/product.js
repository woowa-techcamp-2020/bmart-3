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

export { PRODUCTS_BY_CATEGORY_ID };
