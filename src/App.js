import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Wishlist from './components/Wishlist';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async ({ title, author, year }) => {
    setLoading(true);
    setBooks([]);
    try {
      // Construct query based on available fields
      let query = "https://openlibrary.org/search.json?";
      if (title) query += `title=${title}&`;
      if (author) query += `author=${author}&`;
      if (year) query += `first_publish_year=${year}`;

      const response = await axios.get(query);
      const fetchedBooks = response.data.docs;
      
      // Set books data or show "No results found"
      if (fetchedBooks.length > 0) {
        setBooks(fetchedBooks);
      } else {
        setBooks(null); // Set to null for "No results found" message
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = (book) => {
    if (!wishlist.some((item) => item.key === book.key)) {
      setWishlist([...wishlist, book]);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">📚</div>
        <h1>BOOK FINDER</h1>
      </header>
      <div className="container">
        <Wishlist wishlist={wishlist} />
        <main className="main-content">
          <SearchBar onSearch={searchBooks} loading={loading} />
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : books === null ? (
            <p className="no-results-text">No results found.</p>
          ) : (
            <div className="books-list">
              {books.map((book) => (
                <BookCard key={book.key} book={book} addToWishlist={addToWishlist} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
