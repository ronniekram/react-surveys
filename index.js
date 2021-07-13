const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
  res.send({ bye: 'buddy'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app: underlying express app to register this route handler with
// get: watch for incoming requests with this method
// '/': watch for requests trying to access '/'
// req: object representing the incoming request
// res: object representing the outgoing response
// res.send({ hi: 'there'}): immediately send some JSON back to whoever made this request