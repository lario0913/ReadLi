import {gql} from '@apollo/client'

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

export {
    getAuthorssQuery,
    getBooksQuery
}