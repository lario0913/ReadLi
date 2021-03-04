import { useQuery } from '@apollo/client'
import React from 'react'
import {getBookQuery} from '../queries/queries'

const BookDetails = ({bookId}) => {
    // const {data, loading} = getBookQuery
    const [book] = useQuery(getBookQuery)
    const getBook = id => {
        return (
            book({
                variables:{
                    id: id
                }
            })
        )
    }
    console.log(getBook(bookId))

    return (
        <div className="book__details">
            <h3>Output  Books Details here</h3>
        </div>
    )
}

export default BookDetails
