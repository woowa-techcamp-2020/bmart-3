import mysql2 from 'mysql2';

const getCategoriesParentQuery = () => {
  const getCategoriesParentFormat = `select * from category where is_parent=true`;
  return mysql2.format(getCategoriesParentFormat);
};

const getCategoriesChildQuery = (parentName) => {
  const getCategoriesChildFormat = `select * from category where parent_name=?`;
  return mysql2.format(getCategoriesChildFormat, [parentName]);
};

export { getCategoriesParentQuery, getCategoriesChildQuery };
