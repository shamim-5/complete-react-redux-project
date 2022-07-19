const { createSlice } = require("@reduxjs/toolkit");

const { v4: uuidv4 } = require("uuid");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Bangladesh && History", author: "Anisul Islam" },
    { id: uuidv4(), title: "Bangladesh", author: "Anisul Islam" },
    { id: uuidv4(), title: "History", author: "Anisul Islam" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExists = state.books.filter((book) => book.id === id);
      if (isBookExists) {
        isBookExists[0].title = title;
        isBookExists[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
