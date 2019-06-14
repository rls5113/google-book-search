import axios from "axios";

export default {
    searchBooks: (title) => {
        console.log("API: title: "+title);
        return axios.post("/search",{title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    getBooks: () => {
        return axios.get("/api/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}