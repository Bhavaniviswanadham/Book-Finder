import React, { useState } from 'react';
import '../css/SearchBar.css';

function SearchBar({ onSearch, loading }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    onSearch({ title, author, year });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Published Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}

export default SearchBar;
