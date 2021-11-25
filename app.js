// import .env file
require('dotenv').config()

// Express Config
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser');

// File System
const fs = require('fs');

app.use(bodyParser.text());
app.use((req, res) => {

    let output = `
-------------------------
NEW REQUEST
req.path = ${JSON.stringify(req.path, null, 4)}
req.method = ${JSON.stringify(req.method, null, 4)}
req.headers = ${JSON.stringify(req.headers, null, 4)}
req.query = ${JSON.stringify(req.query, null, 4)}
req.body = ${JSON.stringify(req.body, null, 4)}
-------------------------
    `;

    fs.appendFileSync(process.env.LOG, output);
    console.log(output);
    res.send('Got it')
})

app.listen(port, () => {
    console.log(`SimplyProxy App listening at port ${port}`);
})