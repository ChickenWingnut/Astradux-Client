import express from "express";
import * as dotenv from "dotenv";
dotenv.config();


var config =
    {
        user: "postgres",
        host: "localhost",
        database: "Astradux_Dev",
        password: process.env.DEV_DB_PASSKEY,
        port: 5432,
    };
export default config;