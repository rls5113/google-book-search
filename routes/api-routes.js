require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {

    app.post("/search", (req, res) => {
        //replace spaces with (+) in the title
        let bookTitle = req.body.title.replace(/\s/g,"+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items);
            }
        ).catch(
            (err) => {
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