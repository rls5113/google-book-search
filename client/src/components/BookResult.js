import React from "react";
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

function BookResult() {
    // render() {
        return (
            <div>
                <div className="row">
                    <div className="aboutBook">
                        <h4>Title</h4>
                        <p>
                            By: authors
                        </p>
                    </div>
                    <div className="btnDiv">
                        <a href="#" target="_blank" >
                            <button type="button" name="view">View</button>
                        </a>

                    </div>
                    <div className="row">
                        <img src="#" alt="book cover"></img>
                        <p>description</p>
                    </div>

                </div>
            </div>
        );
    // }
}

export default BookResult;