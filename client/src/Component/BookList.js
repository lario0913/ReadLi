import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import { getBooksQuery } from '../queries/queries'



class BookList extends Component{
    displayBooks(){
        const {books, loading} = this.props.data
        if(loading){
            return (<div>Loading Books</div>)
        }else{
            return books.map(book => {
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }

    render(){
        return (
            <div>
                <ul className="book-list">
                    {this.displayBooks()}
                </ul>
       
            </div>
        )
    }  
}

export default graphql(getBooksQuery)(BookList)
