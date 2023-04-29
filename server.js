const express = require('express');
const fs = require('fs');
const app = express()
const bodyParser = require("body-parser");
const { response } = require("express");
var jsonParser = bodyParser.json();

let port = 3001;
const prettier = require("prettier");

//to avoid xmlhttprequest at blocked by cors

const cors = require("cors");

app.use(cors());

app.post('/posting', jsonParser, (req, res) => {
    // req.body holds the object which is sent from front end
    // fs.writeFileSync is used to override the file
let path = './tokens.json';
    fs.writeFileSync(path, prettier.format(JSON.stringify(req.body), { semi: false, parser: "json"}), (err) => {

        if (err) {

            res.send("Error writing file", err);

        } else {

            res.send("Successfully wrote file");

        }

    });
    


return req;
})


//Listen On Server

app.listen(port, function (err) {

    console.log(`Server Started At Port ${port}`);

});



