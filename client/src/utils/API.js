import axios from "axios";

export default {
    // Gets all the saved books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Delets a book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};