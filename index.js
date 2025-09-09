import express from "express";

// dockerized this nodeJs app 
const app = express();

app.get('/', (req, res) => {
    res.send("Hi there, running from the docker container optimized way"); r
})

app.listen(3000);
