//libraries
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3051;

// epress static folder
app.use(express.static(__dirname));

// static directory for data
app.use('/data', express.static(path.join(__dirname, 'data')));

// path to data.json
const laptopDataPath = path.join(__dirname, 'data', 'data.json');
const laptopData = JSON.parse(fs.readFileSync(laptopDataPath, 'utf8'));

// add requested object 
app.use((req, res, next) => {
  req.laptops = laptopData;
  next();
});

// overview page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'overview.html'));
});

// root of each laptop page
app.get('/laptop/:id', (req, res) => {
  const laptopId = req.params.id;
  const laptop = req.laptops.find(laptop => laptop.id === laptopId);

  if (laptop) {
    res.sendFile(path.join(__dirname, 'laptop.html'));
  } else {
    res.status(404).send('Laptop not found');
  }
});

// get laptop data
app.get('/api/laptops', (req, res) => {
  res.json(req.laptops);
});

// get laptop by id
app.get('/api/laptops/:id', (req, res) => {
  const laptopId = req.params.id;
  const laptop = req.laptops.find(laptop => laptop.id === laptopId);

  if (laptop) {
    res.json(laptop);
  } else {
    res.status(404).send('Laptop not found');
  }
});

// get overview.js and laptop.js
app.get('/overview.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'overview.js'));
});

app.get('/laptop.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'laptop.js'));
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});