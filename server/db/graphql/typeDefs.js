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
    ProductsByCategoryId(categoryId: Int): [Product],
    CategoriesParent: [Category],
    CategoriesChild(parentId: Int): [Category],
    GetNewRelease(limit:Int):[Product],
    GetPopularItems(limit:Int):[Product],
    GetRandItems(limit:Int):[Product],
    GetTimeSaleItems(limit:Int):[Product]

}`;
