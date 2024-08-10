import React, { Component } from 'react';
import '../App.css';
import * as BooksAPI from '../BooksAPI';
import AppRoutes from './Routes';

class Main extends Component {
    state = {
        myBooks: [],
        isSearchPageVisible: false,
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ myBooks: books }, () => {

            });
        });
    }

    updateBookShelf = (book, shelf) => {
        this.setState((prevState) => {
            if (shelf === 'none') {
                return {
                    myBooks: prevState.myBooks.filter((currentBook) => currentBook.id !== book.id),
                };
            }
            return {
                myBooks: prevState.myBooks.map((currentBook) => {
                    if (currentBook.id === book.id) {
                        currentBook.shelf = shelf;
                    }
                    return currentBook;
                }),
            };
        });
    };

    addBookToShelf = (book, shelf) => {
        this.setState((prevState) => {
            book.shelf = shelf;
            prevState.myBooks.push(book);
            return {
                myBooks: prevState.myBooks,
            };
        });
    };

    isNewBook = (book) => {
        const existingBooks = this.state.myBooks.filter((existingBook) => existingBook.id === book.id);
        return existingBooks.length === 0;
    };

    handleBookShelfChange = (book, shelf) => {
        if (this.isNewBook(book)) {
            this.addBookToShelf(book, shelf);
        } else {
            this.updateBookShelf(book, shelf);
        }

        BooksAPI.update(book, shelf);
    };

    toggleSearchPage = () => {
        this.setState({ isSearchPageVisible: true });
    };

    render() {
        return (
            <div className="app">
              <AppRoutes books={this.state.myBooks} onShelfChange={this.handleBookShelfChange}/>
            </div>
        );
    }
}

export default Main;
