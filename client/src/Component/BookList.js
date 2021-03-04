import React, {useState} from 'react'
import {useQuery} from '@apollo/client'
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails'


const BookList = () => {
    const {data, loading} = useQuery(getBooksQuery)
    const [select, setSelect] = useState(null)
    
    if(loading){
        return <div>Loading Books</div>
    }

    return (
        <div>
            <ul className="book-list">
                {
                    data.books.map((book) => {
                        return (
                            <li key={book.id}
                                onClick={e => setSelect(book.id)}
                            >
                                {book.name}
                            </li>
                        )
                    })
                }
            </ul>
            <BookDetails bookId={select} />
        </div>
    )
}

export default(BookList)
