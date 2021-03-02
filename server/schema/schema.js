const graphql = require('graphql');
const _ = require('lodash')

const {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// Dummy data
var books = [
    {name: 'Name of the wind', genre: 'Fantasy', id: '1', authorId: '1'},
    {name: 'Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
    {name: 'Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
    {name: 'Hero of Ages', genre: 'Fantsay', id: '4', authorId: '2'},
    {name: 'Color of Magic', genre: 'Fantsay', id: '5', authorId: '3'},
    {name: 'Light Fantastic', genre: 'Fantsay', id: '6', authorId: '3'}
]

var authors = [
    {name: 'Patric Rothfus', age:'44', id: '1'},
    {name: 'Brandom Sanderson', age:'42', id: '2'},
    {name: 'John Terry', age:'47', id: '3'}
]

// Definition of Types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return _.filter(books, {authorId: parent.id})
            }
        }
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
        },
        author:{
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id})
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return authors
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})