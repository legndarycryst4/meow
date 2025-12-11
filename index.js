const express  = require('express');
const { resolve } = require('path');
const app = express();

//const path = resolve(__dirname, 'public');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'index.html'));
});
app.get('/MineTop', (req, res) => {
  res.sendFile(resolve(__dirname, 'server/MineTop.html'));
});
app.get('/AllayRival', (req, res) => {
  res.sendFile(resolve(__dirname, 'server/AllayRival.html'));
});
app.get('/minerel', (req, res) => {
  res.sendFile(resolve(__dirname, 'server/minerel.html')); });
app.get('/AcentraMC', (req, res) => {
  res.sendFile(resolve(__dirname, 'server/AcentraMC.html'));
});
app.get('/ArcadeHUB', (req, res) => {
  res.sendFile(resolve(__dirname, 'server/ArcadeHUB.html'));
});
app.get('/badge.css', (req, res) => {
  res.sendFile(resolve(__dirname, 'static/badge.css'));
});
app.get('/style.css', (req, res) => {
  res.sendFile(resolve(__dirname, 'static/style.css'));
});
