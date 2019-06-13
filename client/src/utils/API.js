import axios from "axios";

export default {
    searchBooks: (title) => {
        console.log("API: title: "+title);
        return axios.post("/search",{title: title});
    }
}