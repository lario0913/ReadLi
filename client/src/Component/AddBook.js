import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import { getAuthorssQuery } from '../queries/queries'

class AddBook extends Component {

    render() {
        return (
            <form className="addBook__form">
            <div className="field">
                <label>Book Name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                </select>
            </div>
            <button>+</button>
        </form>
        )
    }
}

export default graphql(getAuthorssQuery)(AddBook)
