import express from "express";
const router = express.Router();


router.get("/", (req,res) => {
    console.log("testing!");
})

export default router;