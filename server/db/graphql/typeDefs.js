module.exports = `type User{
    id: ID!,
    name: String,
    google_id: String,
}
type Query{
    Users: [User],
}`;
