const graphql = require('graphql');
const _ = require('lodash')

const {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLSchema,
    GraphQLID
} = graphql;

// Dummy data
var books = [
    {name: 'Name of the wind', genre: 'Fantasy', id: '1'},
    {name: 'Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'Long Earth', genre: 'Sci-Fi', id: '3'}
]

// Definition of Types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

// Defining RootQueries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db and other source
                return _.find(books, {id: args.id})
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})