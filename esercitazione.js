
const { response } = require("express");
var express = require("express");
var apiServer = express();
const fs = require('fs');
const { request } = require("https");

var port=3000;
var host="localhost";

var login;
var password;

apiServer.listen(port, host, () => {
    console.log("server connected at http://%s:%d", host, port);
});




apiServer.get("/register", (req, res) => {
    res.send(
            + req.query.log
            + req.query.psw);

            const utente = {
                "login": req.query.log,
                "password": req.query.psw
            };
            
            const data = JSON.stringify(utente);

            fs.writeFile('utenti.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
                
            });


            
});
