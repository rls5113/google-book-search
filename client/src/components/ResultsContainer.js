import React from "react";
import BookResult from "../components/BookResult";

function ResultsContainer(props) {
    if(props.path === "/") {
        return (
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {props.bookData.map((book) => {
                    const bookInfo = book.volumeInfo;
                    // console.log(bookInfo);
                    return <BookResult 
                        title={bookInfo.title}
                        authors={bookInfo.authors}
                        description={bookInfo.description}
                        link={bookInfo.canonicalVolumeLink}
                        // img={bookInfo.imageLinks.thumbnail}
                        path={props.path}
                        key={book.id}
                        />
                })}
            </div>
        );
    } else {
        return(
            <div id="resultsContainer">
                <h3>Saved Books</h3>
                <p>No saved books</p> 
            </div>
        );
    }
}

export default ResultsContainer;