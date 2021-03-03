import React from 'react'
import BookList from './Component/BookList'
import { 
        ApolloClient, 
        InMemoryCache, 
        ApolloProvider,
        } from '@apollo/client';
import AddBook from './Component/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
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
