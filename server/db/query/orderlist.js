import mysql2 from 'mysql2';

const getOrderlistByUserIdQuery = (userId) => {
  const getOrderlistByUserIdFormat = `
  select o.id, p.name, o.count, o.date
  from orderlist o left outer join product p 
  on o.product_id = p.id
  where o.user_id = ?;
  `;
  return mysql2.format(getOrderlistByUserIdFormat, [userId]);
};

export { getOrderlistByUserIdQuery };
