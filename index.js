import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hi there, running from the docker container optimized way"); // simple nodejs with docker
})

app.listen(3000);
