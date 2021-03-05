import React from 'react'
import BookList from './Component/BookList'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

import AddBook from './Component/AddBook';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h2>Lario Reading List</h2>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
