const express = require('express');
const app = express();
const path = require('path');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');


// serve client build as root
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

// check DS_DB_URL set
const { DS_DB_URL } = process.env;
if (!DS_DB_URL) {
  console.log('DS_DB_URL not set');
  process.exit();
}

// attempt connect to DB
mongoose.connect(DS_DB_URL, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to db');
})

// get PORT if any
const port = process.env.PORT || 3000;

// define schema
const schema = require('./schema');
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// run express server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});