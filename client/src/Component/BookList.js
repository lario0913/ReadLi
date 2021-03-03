import React from 'react'
import {useQuery} from '@apollo/client'
import {getBooksQuery} from '../queries/queries'


const BookList = () => {
    const {data, loading} = useQuery(getBooksQuery)
    
    if(loading){
        return <div>Loading Books</div>
    }

    return (
        <div>
            <ul className="book-list">
                {
                    data.books.map((book) => {
                        return (
                            <li key={book.id}>
                                {book.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default(BookList)
