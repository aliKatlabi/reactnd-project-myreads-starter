import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './BooksList';
import SearchBooks from './Search';

class AppRoutess extends React.Component  {
    constructor(props) {
        super(props);
       
    }
    render(){
        return (
            <Routes>
              <Route
                path="/"
                element={<BookList books={this.props.books} onShelfChange={this.props.onShelfChange} />}
              />
              <Route
                path="/search"
                element={<SearchBooks books={this.props.books} onShelfChange={this.props.onShelfChange} />}
              />
            </Routes>
          );
    }
  
}

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
