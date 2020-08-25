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

const getNewReleaseQuery = (limit) => {
  const getNewReleaseFormat = `select * from product order by registered_date desc limit ?`;
  return mysql2.format(getNewReleaseFormat, [limit]);
};

const getPopularItemsQuery = (limit) => {
  const getPopularItemsFormat = `SELECT * FROM product order by saled_count desc limit ?`;
  return mysql2.format(getPopularItemsFormat, [limit]);
};
const getRandItemsQuery = (limit) => {
  const getRandItemsFormat = `SELECT * FROM product where category_id<28 order by rand()  limit ?`;
  return mysql2.format(getRandItemsFormat, [limit]);
};

const getTimesaleItemsQuery = (limit) => {
  const getTimesaleItemsFormat = `select p.id,p.name,p.price,s.discount_percent, p.img_url, if(l.product_id,'true','false') as liked from sale s left outer join liked l
  on s.product_id=l.product_id and s.is_timesale=1
  left outer join product p on p.id=s.product_id limit ?`;
  return mysql2.format(getTimesaleItemsFormat, [limit]);
};

export {
  getProductsQuery,
  getProductByIdQuery,
  getProductsByCategoryIdQuery,
  getNewReleaseQuery,
  getPopularItemsQuery,
  getRandItemsQuery,
  getTimesaleItemsQuery,
};
