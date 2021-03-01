const graphql = require('graphql');

const {GraphQLObjectType, GraphQLSring} = graphql;

// Definition of Types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLSring},
        name: {type: GraphQLSring},
        genre: {type: GraphQLSring}
    })
})

// Defining ReQueries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args: {id: {type: GraphQLSring}},
            resolve(parent, args){
                // code to get data from db and other source
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})