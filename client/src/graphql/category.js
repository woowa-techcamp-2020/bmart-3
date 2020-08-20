import { gql } from '@apollo/client';

const CATEGORIES_PARENT = gql`
  query {
    CategoriesParent {
      id
      name
    }
  }
`;
const CATEGORIES_CHILD = gql`
  query($parentName: String!) {
    CategoriesChild(parentName: $parentName) {
      id
      name
    }
  }
`;

export { CATEGORIES_PARENT, CATEGORIES_CHILD };
