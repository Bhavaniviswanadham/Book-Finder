
# Book Finder

Book Finder is a responsive web application built with React, enabling users to search for books by title, author, or publication year and add them to a wishlist. This project utilizes the Open Library API for book data.

## Features

- **Search Functionality**: Search for books by title, author, or publication year.
- **Wishlist**: Save books to a wishlist for easy access.
- **Detailed View**: Open Library links for more details on each book.
- **Responsive Design**: The layout is optimized for various screen sizes.
- **Loading Indicator**: Shows a loading indicator while fetching data.

## Installation

### Prerequisites
- **Node.js** (version 14 or higher)
- **Git**

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bhavaniviswanadham/book-finder.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd book-finder
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Usage

1. In the search bar, enter a title, author, or year to search for books.
2. Click **Search** to display relevant results.
3. Click **Add to Wishlist** to save books for later viewing.
4. Click **More Details** to view additional information on Open Library.

## Technologies

- **React** for UI
- **Axios** for HTTP requests
- **Open Library API** for book information

## Project Structure

```
book-finder/
├── public/              # Public assets
├── src/
│   ├── components/      # React components
│   ├── css/             # CSS files for styling
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
└── README.md            # Project documentation
```

## License

This project is open-source and available under the MIT License.