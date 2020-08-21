import mysql2 from 'mysql2';

const getCategoriesParentQuery = () => {
  const getCategoriesParentFormat = `select * from category where is_parent=true`;
  return mysql2.format(getCategoriesParentFormat);
};

const getCategoriesChildQuery = (parentId) => {
  const getCategoriesChildFormat = `
  select id, name 
  from category C
  where parent_name=
  (select name from category C2
  where id = ?)
  `;
  return mysql2.format(getCategoriesChildFormat, [parentId]);
};

export { getCategoriesParentQuery, getCategoriesChildQuery };
