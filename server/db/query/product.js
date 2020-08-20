import mysql2 from 'mysql2';

const getProductsQuery = () => {
  const getProductsFormat = `select * from product`;
  return mysql2.format(getProductsFormat);
};

const getProductByIdQuery = (id) => {
  const getProductByIdFormat = `select * from product where id=?`;
  return mysql2.format(getProductByIdFormat, [id]);
};

const getProductsByCategoryIdQuery = (categoryId) => {
  const getProductsByCategoryIdFormat = `select * from product where category_id in (select id from category where parent_name=(select name from category where id=?))`;

  //  = `select * from product where category_id=${category_ids}`;
  return mysql2.format(getProductsByCategoryIdFormat, [categoryId]);
};

export { getProductsQuery, getProductByIdQuery, getProductsByCategoryIdQuery };
