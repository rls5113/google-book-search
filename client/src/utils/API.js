import axios from "axios";

export default {
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    }
}