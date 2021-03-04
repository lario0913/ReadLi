import React from 'react'
import {getBookQuery} from '../queries/queries'

const BookDetails = () => {
    const {data, loading} = getBookQuery
    return (
        <div className="book__details">
            <h3>Output  Books Details here</h3>
        </div>
    )
}

export default BookDetails
