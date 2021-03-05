import {gql} from 'apollo-boost'

const getAuthorssQuery = gql`
    query {
        authors{
            name
            id
        }
    }
`
const getBooksQuery = gql`
    query {
        books{
            name
            genre
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`

const getBookQuery=gql`
    query($id: ID){
        book(id:$id){
            name
            genre
            author{
                name
                age
                books{
                    name
                }
            }
        }
    }
`

export {
    getAuthorssQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery
}