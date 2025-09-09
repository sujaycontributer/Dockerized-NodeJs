import express from "express";

// simople nodejs for build docker file pf this
const app = express();

app.get('/', (req, res) => {
    res.send("Hi there, running from the docker container optimized way"); r
})

app.listen(3000);
