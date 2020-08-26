export default `
scalar DateTime
type User{
    id: Int!,
    name: String!,
    google_id: String!,
}
type Category{
    id: Int!,
    name: String!,
    is_parent: Boolean!,
    parent_name: String!,    
}
type Product{
    id: Int!,
    name: String!,
    price: Int!,
    registered_date: DateTime!,
    remain: Int!,
    saled_count: Int!,
    category_id: Int!,
    img_url: String,
    liked:String,
    discount_percent:Int!
}
type Query{
    Users: [User],
    Products: [Product],
    Product(id: Int): Product,
    ProductsByCategoryId(categoryId: Int,limit:Int): [Product],
    CategoriesParent: [Category],
    CategoriesChild(parentId: Int): [Category],
    PagedProductsByChildCategoryId(categoryId: Int, id: Int, cursor: Int, ordertype: String, limit: Int, direction: String ): [Product],
    PagedProductsByParentCategoryId(categoryId: Int, id: Int, cursor: Int, ordertype: String, limit: Int, direction: String ): [Product],
    GetNewRelease(limit:Int):[Product],
    GetPopularItems(limit:Int):[Product],
    GetRandItems(limit:Int):[Product],
    GetTimeSaleItems(limit:Int):[Product]

}`;
