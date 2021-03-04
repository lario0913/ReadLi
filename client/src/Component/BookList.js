import React, {useState} from 'react'
import {useLazyQuery, useQuery} from '@apollo/client'
import {getBookQuery, getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails'
// import BookDetails from './BookDetails'


const BookList = () => {
    const {data, loading} = useQuery(getBooksQuery)
    const [select, setSelect] = useState(null)
    const [book] = useLazyQuery(getBookQuery)
    const detail = useLazyQuery(getBookQuery)

    const getDetail = (id) => {
        e.preventDefault()
       console.log(id)
        
    }
    
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
                                onClick={getDetail(book.id)}
                            >
                                {book.name}
                            </li>
                        )
                    })
                }
            </ul>
            {/* <BookDetails bookId={select} /> */}
            <h2>Details Here</h2>
            {/* {console.log(detail)} */}
        </div>
    )
}

export default(BookList)
