export default `
type JWT{
    success: Boolean!,
    token: String,
}

type Message{
    message:String
}

type Query{
    Login(googleId: String): JWT,
}

type Mutation{
    Signup(name: String, googleId: String):Message,
}
`;
