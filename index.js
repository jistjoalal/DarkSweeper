const express = require('express');
const app = express();
const path = require('path');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

// allow X origin requests
app.use(cors());

// serve client build as root
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

// check env vars
const { DS_DB_URL, PORT } = process.env;
// exit if no db url set
if (!DS_DB_URL) {
  console.log('DS_DB_URL not set');
  process.exit();
}
// PORT default to 8081 to simulate production environment
// - my best fix atm, b/c I don't know how to pass the uri dynamically to the
//   apollo client.
const port = PORT || 8081;

// attempt connect to DB
mongoose.connect(DS_DB_URL, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to db');
})


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