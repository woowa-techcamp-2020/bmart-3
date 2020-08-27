import { gql } from '@apollo/client';

const CATEGORIES_PARENT = gql`
  query {
    CategoriesParent {
      id
      name
      categoriesChild {
        id
        name
      }
    }
  }
`;

const CATEGORIES_CHILD = gql`
  query($parentId: Int!) {
    CategoriesChild(parentId: $parentId) {
      id
      name
    }
  }
`;

export { CATEGORIES_PARENT, CATEGORIES_CHILD };
