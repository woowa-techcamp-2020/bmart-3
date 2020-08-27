import mysql2 from 'mysql2';

const getProductsQuery = () => {
  const getProductsFormat = `select * from product`;
  return mysql2.format(getProductsFormat);
};

const getProductByIdQuery = (id) => {
  const getProductByIdFormat = `select * from product where id=?`;
  return mysql2.format(getProductByIdFormat, [id]);
};

const getProductsByCategoryIdQuery = (categoryId, limit) => {
  const getProductsByCategoryIdFormat = `
  select p.id,p.name,p.price,p.img_url,ifnull(s.discount_percent, 0) as discount_percent,if(l.product_id,'true','false') as liked
  from product p left outer join sale s 
  on p.id=s.product_id 
  left outer join liked l on l.product_id=p.id
  where category_id in 
  (select id from category where parent_name=(select name from category where id=?)) limit ?`;
  return mysql2.format(getProductsByCategoryIdFormat, [categoryId, limit]);
};

const getPagedProductsByParentCategoryIdQuery = (categoryId, id, cursor, ordertype, limit, direction) => {
  const getPagedProductsByParentCategoryIdFormat = `
    select p.id, p.name, p.price, p.img_url, p.remain, p.registered_date, p.saled_count, p.category_id, ifnull(s.discount_percent, 0) as discount_percent
    from product p left outer join sale s
    on p.id=s.product_id
    where category_id in 
    (select id from category where parent_name=(select name from category where id=?))
    and p.${ordertype} ${direction == 'ASC' ? '>=' : '<='} ? and p.id != ?
    order by p.${ordertype} ${direction}, p.id ${direction}
    LIMIT ?;
  `;
  return mysql2.format(getPagedProductsByParentCategoryIdFormat, [categoryId, cursor, id, limit]);
};

// ${direction == 'ASC' ? '>' : '<'}
const getPagedProductsByChildCategoryIdQuery = (categoryId, id, cursor, ordertype, limit, direction) => {
  const getPagedProductsByChildCategoryIdFormat = `
    select p.id, p.name, p.price, p.img_url, p.remain, p.registered_date, p.saled_count, p.category_id, ifnull(s.discount_percent, 0) as discount_percent
    from product p left outer join sale s
    on p.id=s.product_id
    where category_id = ? and p.${ordertype} ${direction == 'ASC' ? '>=' : '<='} ? and p.id != ?
    order by p.${ordertype} ${direction}, p.id ${direction}
    LIMIT ?;
  `;
  return mysql2.format(getPagedProductsByChildCategoryIdFormat, [categoryId, cursor, id, limit]);
};

const getNewReleaseQuery = (limit) => {
  const getNewReleaseFormat = `select p.id,p.name,p.price,p.img_url,if(l.product_id,'true','false') as liked,ifnull(s.discount_percent,0) as discount_percent 
  from product p left outer join sale s on p.id=s.product_id left outer join liked l
  on p.id=l.product_id order by registered_date desc limit ?`;
  return mysql2.format(getNewReleaseFormat, [limit]);
};

const getPopularItemsQuery = (limit) => {
  const getPopularItemsFormat = `select p.id,p.name,p.price,p.img_url,if(l.product_id,'true','false') as liked,ifnull(s.discount_percent,0) as discount_percent 
  from product p left outer join sale s on p.id=s.product_id left outer join liked l
  on p.id=l.product_id order by saled_count desc limit ?`;
  return mysql2.format(getPopularItemsFormat, [limit]);
};
const getRandItemsQuery = (limit) => {
  const getRandItemsFormat = `select p.id,p.name,p.price,p.img_url,if(l.product_id,'true','false') as liked,ifnull(s.discount_percent,0) as discount_percent 
  from product p left outer join sale s on p.id=s.product_id left outer join liked l
  on p.id=l.product_id where category_id<28 order by rand() limit ?`;
  return mysql2.format(getRandItemsFormat, [limit]);
};

const getTimesaleItemsQuery = (limit) => {
  const getTimesaleItemsFormat = `select p.id,p.name,p.price,s.discount_percent, p.img_url, if(l.product_id,'true','false') as liked from sale s left outer join liked l
  on s.product_id=l.product_id and s.is_timesale=1
  left outer join product p on p.id=s.product_id limit ?`;
  return mysql2.format(getTimesaleItemsFormat, [limit]);
};

const toggleLikedQuery = (id, liked) => {
  let toggleLikedFormat;
  if (liked === 'true') {
    toggleLikedFormat = `delete from liked where user_id=1 and product_id=?`;
  } else {
    toggleLikedFormat = `insert into liked(user_id,product_id) values(1,?)`;
  }
  return mysql2.format(toggleLikedFormat, [id]);
};

export {
  getProductsQuery,
  getProductByIdQuery,
  getProductsByCategoryIdQuery,
  getNewReleaseQuery,
  getPopularItemsQuery,
  getRandItemsQuery,
  getTimesaleItemsQuery,
  getPagedProductsByChildCategoryIdQuery,
  getPagedProductsByParentCategoryIdQuery,
  // getProductsByChildCategoryIdQuery,
  toggleLikedQuery,
};
