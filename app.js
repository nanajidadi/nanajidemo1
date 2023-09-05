const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Dynamic Website!</h1>');
});

// Define a dynamic route
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
