import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './BooksList';
import SearchBooks from './Search';

const AppRoutes = (props)=>{

  return (
    <Routes>
      <Route
        path="/"
        element={<BookList books={props.books} onShelfChange={props.onShelfChange} />}
      />
      <Route
        path="/search"
        element={<SearchBooks books={props.books} onShelfChange={props.onShelfChange} />}
      />
    </Routes>
  );
}
export default AppRoutes;
