const express = require('express');
const app = express();
const port = 3000;

// Sample data (replace with your data or connect to a database)
const books = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
  { id: 3, title: 'Book 3' },
];

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

app.post('/api/books', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(book);
  res.json(book);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
