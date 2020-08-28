export default `
scalar DateTime

type Category{
    id: Int!,
    name: String!,
    is_parent: Boolean!,
    parent_name: String!,
    categoriesChild: [Category],  
}

type OrderList{
    id: Int!,
    name: String!,
    count: Int!,
    date: DateTime!,
    userId: Int,
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
    liked: String,
    discount_percent: Int!,
    count: Int,
}

type Message{
    success: Boolean,
    message:String
}

type Query{
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
    GetTimeSaleItems(limit:Int):[Product],
    GetSearchProducts(keyword:String, limit: Int):[Product],
    GetCart(userId: Int): [Product],
    GetLiked(userId:Int):[Product],
    GetOrderlistByUserId(userId: Int): [OrderList],
}

type Mutation{
    ToggleLiked(userId:Int,id:Int,liked:String):Message,
    AddCart(userId: Int, productId: Int, count: Int): Message,
    RemoveCart(userId: Int, productId: Int): Message,
    UpdateCart(userId: Int, productId: Int, count: Int): Message,
}
`;
