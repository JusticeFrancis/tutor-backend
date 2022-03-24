const express = require("express");


const app = express()
const port = 5000;

app.get('/', function (req, res) {
    res.send('GET request to homepage')
  })

app.listen(process.env.PORT || port, () => {
    console.log(`Now listening `);
}); 