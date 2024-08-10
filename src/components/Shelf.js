import React, { Component } from 'react';
import Book from './BooksDetails';

class Shelf extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { shelf, books, onShelfChange } = this.props;

        return (
            <div className="bookshelf" key={shelf.id}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={onShelfChange}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;
