import React from 'react'
import {useQuery} from '@apollo/client'
import {getAuthorssQuery} from '../queries/queries'

const AddBook = () => {
    const {data, loading} = useQuery(getAuthorssQuery)
    
    if(loading){
        return <option >Loading Authors</option>
    }

    return (
        <form className="addBook__form">
            <div className="field">
                <label>Book Name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                    {
                    data.authors.map((author) => {
                        return (
                            <option key={author.id}  value={author.id}>
                                {author.name}
                            </option>
                        )
                    })
                }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook
