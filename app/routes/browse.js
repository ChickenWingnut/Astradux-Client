import express from "express";
import pg from "pg";
// configures database

import config from "../config/config.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const db = new pg.Client(config);
db.connect();


var data = [];
async function getProducts(){
    data = [];
    const products = await db.query("SELECT * FROM products");
    products.rows.forEach(function(product){
        data.push(product);
    });
}

router.get("/", async (req,res) => {
    await getProducts();
    // console.log(data);
    res.render("browse.ejs", {data});
})

export default router;