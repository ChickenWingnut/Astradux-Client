import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.set('views', __dirname + '/app/views')

import browseRoute from "./app/routes/browse.js";
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
})
app.use('/browse', browseRoute);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});


