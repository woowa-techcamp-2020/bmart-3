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
  const getProductsByCategoryIdFormat = `select * from product where category_id in (select id from category where parent_name=(select name from category where id=?)) limit 10`;

  return mysql2.format(getProductsByCategoryIdFormat, [categoryId]);
};

const getProductsByChildCategoryIdQuery = (categoryId, id, cursor, ordertype, limit, direction) => {
  const getProductsByChildCategoryIdFormat = `
    select *
    from product
    where category_id = ? and ${ordertype} ${direction == 'ASC' ? '>=' : '<='} ? and id ${
    direction == 'ASC' ? '>' : '<'
  } ?
    order by ${ordertype} ${direction}, id ${direction}
    LIMIT ?;
  `;
  return mysql2.format(getProductsByChildCategoryIdFormat, [categoryId, cursor, id, limit]);
};

export { getProductsQuery, getProductByIdQuery, getProductsByCategoryIdQuery, getProductsByChildCategoryIdQuery };
