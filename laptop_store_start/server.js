//libraries
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
let port = process.env.PORT ? process.env.PORT : 3051;

app.use(express.static(path.join(__dirname)));

app.use('/beni/hw/laptop_store_start/data', express.static(path.join(__dirname, 'data')));

const laptopDataPath = path.join(__dirname, 'data', 'data.json');
const laptopData = JSON.parse(fs.readFileSync(laptopDataPath, 'utf8'));

app.get('/beni/hw/laptop_store_start', (req, res) => {
  res.sendFile(path.join(__dirname, 'overview.html'));
});

app.get('/beni/hw/laptop_store_start/laptop/:id', (req, res) => {
  const laptopId = req.params.id;
  const laptop = laptopData.find(laptop => laptop.id === laptopId);

  if (laptop) {
    res.sendFile(path.join(__dirname, 'laptop.html'));
  } else {
    res.status(404).send('Laptop not found');
  }
});

app.get('/beni/hw/laptop_store_start/api/laptops', (req, res) => {
  res.json(laptopData);
});

app.get('/beni/hw/laptop_store_start/api/laptops/:id', (req, res) => {
  const laptopId = req.params.id;
  const laptop = laptopData.find(laptop => laptop.id === laptopId);

  if (laptop) {
    res.json(laptop);
  } else {
    res.status(404).send('Laptop not found');
  }
});

app.get('/beni/hw/laptop_store_start/overview.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'overview.js'));
});

app.get('/beni/hw/laptop_store_start/laptop.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'laptop.js'));
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on the port ${port} ...`)
});