require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");
// const router = require("express").Router();

module.exports = function(app) {
    //SEARCH
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
    //SAVE BOOK
    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });
    //GET SAVED BOOKS
    app.get("/api/books", (req, res) => {
        db.Book.find()
        .then((bookData) => {
            res.json(bookData);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });
 
    //DELETE BOOK
    app.delete("/api/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });    

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  
}