import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './BooksDetails';

class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            resultNum: 20,
            books: [],
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        
    }

    handleQueryChange(query) {
        this.setState({ query });
        if (query === '') {
            this.setState({ books: [] });
        } else {
            BooksAPI.search(query, this.state.resultNum)
                .then((searchResults) => {
                    if (Array.isArray(searchResults)) {
                        this.updateBookShelves(searchResults, this.props.books);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching books:', error);
                });
        }
    }

    updateBookShelves(searchResults, currentBooks) {
        const updatedBooks = searchResults.map((searchBook) => {
            const currentBook = currentBooks.find((book) => book.id === searchBook.id);
            searchBook.shelf = currentBook ? currentBook.shelf : 'none';
            return searchBook;
        });
        this.setState({ books: updatedBooks });
    }

    render() {
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.handleQueryChange(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={this.props.onShelfChange}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks;
