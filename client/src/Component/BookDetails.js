// import { useLazyQuery } from '@apollo/client'
import React from 'react'
import {getBookQuery} from '../queries/queries'
import {graphql} from 'react-apollo'


const BookDetails = (props) => {
   
    return (
        <div className="book__details">
            <h3>Output  Books Details here</h3>
            {console.log(props.bookId)}
        </div>
    )
}

export default graphql(getBookQuery, {
    options: props =>{
        return{
            variables:{
                id: props.bookId
            }
        }
    }
})(BookDetails)
