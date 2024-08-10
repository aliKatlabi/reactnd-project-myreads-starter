import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

class MyBookshelfApp extends Component {
  
    render() {
        return (
            <div className="app">
              <Main/>
            </div>
        );
    }
}

export default MyBookshelfApp;
