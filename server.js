import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;


import browseRoute from "./app/routes/browse.js";
app.use('/browse', browseRoute);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});


