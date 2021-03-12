const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// Allow cors origin request
app.use(cors())


// Connect to database
mongoose.connect('mongodb+srv://lario:kb19c0914@cluster0.0gci4.mongodb.net/test', {
    useNewUrlParser: true,
   useUnifiedTopology: true
})
mongoose.connection.once('open', () =>{
    console.log('connected to database')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for request on port 4000')
});