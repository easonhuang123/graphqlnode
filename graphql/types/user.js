import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID
} from 'graphql'

export default new GraphQLObjectType({
    name: 'user',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)  
        },
        userName: {
            type: GraphQLString
        },
        sex: {
            type: GraphQLInt
        },
        phone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    }
})