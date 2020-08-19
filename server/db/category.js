import executeQuery from './share/execute-query';
import { getCategoriesParentQuery, getCategoriesChildQuery } from './query/category';

const getCategoriesParent = async () => {
  try {
    const rows = await executeQuery(getCategoriesParentQuery());
    return rows;
  } catch (err) {
    throw err;
  }
};

const getCategoriesChild = async (parentName) => {
  try {
    const rows = await executeQuery(getCategoriesChildQuery(parentName));
    return rows;
  } catch (err) {
    throw err;
  }
};

export { getCategoriesParent, getCategoriesChild };
