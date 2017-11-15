import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'

import schema from './graphql'

let app = express()

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true  
})))

mongoose.connect('mongodb://localhost/test')

let server = app.listen(8081, () => {
    console.log('Listening at port ', server.address().port)
})