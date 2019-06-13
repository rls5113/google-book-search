require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");
// const router = require("express").Router();

module.exports = function(app) {

    app.post("/search", (req, res) => {
        console.log("in api-routes");
        //replace spaces with (+) in the title
         console.log(req.body);
        // console.log(req.body.title);
        let bookTitle = req.body.title.replace(/\s/g,"+");
        console.log(bookTitle);
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                console.log(response.data.items);
                res.json(response.data.items);
            }
        )
        .catch(
            (error) => {
                res.json({error: error});
            }
        )
    });





    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  
}