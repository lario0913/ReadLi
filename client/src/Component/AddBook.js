import React, {useState} from 'react'
import {useMutation, useQuery} from '@apollo/client'
import {getAuthorssQuery, addBookMutation, getBooksQuery} from '../queries/queries'


const AddBook = () => {
    const {data, loading} = useQuery(getAuthorssQuery)
    const [addBook] = useMutation(addBookMutation)
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
        addBook({
            variables:{
                name,
                genre,
                authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        })
    }
    
    if(loading){
        return <option >Loading Authors</option>
    }

    return (
        <form className="addBook__form" onSubmit={submitForm}>
            <div className="field">
                <label>Book Name:</label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
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
