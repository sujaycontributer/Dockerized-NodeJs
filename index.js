import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hi there, running from the docker container");
})

app.listen(3000);