const express = require('express');
const app = express();
const port = 3001;

// In-memory storage for data
let storedData = [];

// Middleware to parse JSON requests
app.use(express.json());

// GET route to show the saved data
app.get('/api/data', (req, res) => {
//   res.send({ message: 'Stored Data', data: storedData });
    res.send({ storedData }); 
});

// POST route to save data
app.post('/api/data', (req, res) => {
  const data = req.body;
  storedData = [];
  storedData.push(data); // Save the received data to the array
  res.send({ message: 'Data saved successfully', savedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
