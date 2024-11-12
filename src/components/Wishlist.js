import React from 'react';
import '../css/Wishlist.css';

function Wishlist({ wishlist }) {
  return (
    <div className="wishlist">
      <h3>Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>No books added.</p>
      ) : (
        wishlist.map((book) => {
          const bookUrl = `https://openlibrary.org${book.key}`;
          return (
            <div key={book.key} className="wishlist-item">
              <p onClick={() => window.open(bookUrl, '_blank')}>{book.title}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Wishlist;

