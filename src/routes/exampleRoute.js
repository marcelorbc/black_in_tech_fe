const express = require('express');
const router = express.Router();

// Importa o modelo correspondente
const ExampleModel = require('../models/exampleModel');

// Exemplo de rota GET
router.get('/', async (req, res) => {
  try {
    const data = await ExampleModel.getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 