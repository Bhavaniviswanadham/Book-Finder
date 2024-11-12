import React from 'react';
import '../css/BookCard.css';

function BookCard({ book, addToWishlist }) {
  const { title, author_name, first_publish_year, key, cover_i } = book;
  const bookUrl = `https://openlibrary.org${key}`;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : 'https://via.placeholder.com/150?text=No+Image';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} className="book-cover" />
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author_name ? author_name.join(', ') : 'Unknown'}</p>
      <p><strong>Published:</strong> {first_publish_year || 'Unknown'}</p>
      <div className="book-card-buttons">
        <button onClick={() => window.open(bookUrl, '_blank')} className="details-btn">More Details</button>
        <button onClick={() => addToWishlist(book)} className="wishlist-btn">Add to Wishlist</button>
      </div>
    </div>
  );
}

export default BookCard;
