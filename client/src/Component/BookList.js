import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'

class BookList extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             selected:null
        }
    }

    displayBooks(){
        const {books, loading} = this.props.data
        if(loading){
            return (<div>Loading Books</div>)
        }else{
            return books.map(book => {
                return(
                    <li key={book.id} onClick={e => {this.setState({selected:book.id})}}>
                        {book.name}
                    </li>
                )
            })
        }
    }

    render(){
        return (
            <div>
                <ul className="book__list">
                    {this.displayBooks()}
                </ul>
       
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }  

}

export default graphql(getBooksQuery)(BookList)
