import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar"
import BooksView from "../features/books/BooksView";
import AddBook from "../features/books/AddBook";

const Index = () => {
   return <BrowserRouter>
      <Navbar />
      <main>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="*" element={<Error />} />
            </Routes>
      </main>
   </BrowserRouter>
};

export default Index;
