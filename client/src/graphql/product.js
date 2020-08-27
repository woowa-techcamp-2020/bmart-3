import { gql } from '@apollo/client';

const PRODUCTS_BY_CATEGORY_ID = gql`
  query($categoryId: Int, $limit: Int) {
    ProductsByCategoryId(categoryId: $categoryId, limit: $limit) {
      id
      name
      price
      img_url
      discount_percent
      liked
    }
  }
`;

const PAGED_PRODUCTS_BY_CHILD_CATEGORY_ID = gql`
  query($categoryId: Int, $id: Int, $cursor: Int, $ordertype: String, $limit: Int, $direction: String) {
    PagedProductsByChildCategoryId(
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
      discount_percent
    }
  }
`;

const PAGED_PRODUCTS_BY_PARENT_CATEGORY_ID = gql`
  query($categoryId: Int, $id: Int, $cursor: Int, $ordertype: String, $limit: Int, $direction: String) {
    PagedProductsByParentCategoryId(
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
      discount_percent
    }
  }
`;

const GET_NEW_RELEASE = gql`
  query($limit: Int) {
    GetNewRelease(limit: $limit) {
      id
      name
      price
      img_url
      discount_percent
      liked
    }
  }
`;

const GET_POPULAR_ITEMS = gql`
  query($limit: Int) {
    GetPopularItems(limit: $limit) {
      id
      name
      price
      img_url
      discount_percent
      liked
    }
  }
`;

const GET_RAND_ITEMS = gql`
  query($limit: Int) {
    GetRandItems(limit: $limit) {
      id
      name
      price
      img_url
      discount_percent
      liked
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

const TOGGLE_LIKED = gql`
  mutation($id: Int, $liked: String) {
    ToggleLiked(id: $id, liked: $liked) {
      message
    }
  }
`;

const GET_SEARCH_PRODUCT = gql`
  query($keyword: String, $limit: Int) {
    GetSearchProducts(keyword: $keyword, limit: $limit) {
      id
      name
      img_url
      price
      discount_percent
    }
  }
`;

const GET_SEARCH_LOG = gql`
  query($id: Int) {
    GetSearchLogs(id: $id) {
      id
      registered_date
      keyword
    }
  }
`;

const POST_SEARCH_LOG = gql`
  mutation($id: Int, $keyword: String, $registered_date: String) {
    GetSearchLogs(id: $id, keyword: $keyword, registered_date: $registered_date) {
      id
      registered_date
      keyword
    }
  }
`;

export {
  PRODUCTS_BY_CATEGORY_ID,
  PAGED_PRODUCTS_BY_CHILD_CATEGORY_ID,
  PAGED_PRODUCTS_BY_PARENT_CATEGORY_ID,
  GET_NEW_RELEASE,
  GET_POPULAR_ITEMS,
  GET_RAND_ITEMS,
  GET_TIMESALE_ITEMS,
  TOGGLE_LIKED,
  GET_SEARCH_PRODUCT,
  GET_SEARCH_LOG,
  POST_SEARCH_LOG,
};
