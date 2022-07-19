const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: 1, title: "Bangladesh && History", author: "Anisul Islam" },
    { id: 2, title: "Bangladesh", author: "Anisul Islam" },
    { id: 3, title: "History", author: "Anisul Islam" },
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
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
