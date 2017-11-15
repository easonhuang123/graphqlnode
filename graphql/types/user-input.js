import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from 'graphql'

export default new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
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