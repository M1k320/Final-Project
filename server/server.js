require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.post('/api/users', (req, res) => {
    // Handle POST request to create a new user
  });
  
  app.get('/api/users/:id', (req, res) => {
    // Handle GET request to retrieve a user by ID
  });
  
  app.put('/api/users/:id', (req, res) => {
    // Handle PUT request to update a user by ID
  });
  
  app.delete('/api/users/:id', (req, res) => {
    // Handle DELETE request to delete a user by ID
  });