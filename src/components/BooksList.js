import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookShelves: [
                { id: 'currentlyReading', title: 'Currently Reading' },
                { id: 'wantToRead', title: 'Want to Read' },
                { id: 'read', title: 'Read' }
            ]
        };
        
    }
    getBooksByFilterShelf = (shelf) => {
        return this.props.books.filter(book => shelf.id === book.shelf);
    };

    render() {
      console.log("booklist props");
      console.log(this.props);
      return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.state.bookShelves.map(shelf => (
                            <Shelf
                                key={shelf.id}
                                shelf={shelf}
                                books={this.getBooksByFilterShelf(shelf)}
                                onShelfChange={this.props.onShelfChange}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;
