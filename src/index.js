const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

require('./database');

app.use(express.json());
app.use(cors());

/**
 * Adiciona automaticamente as rotas
 * */
const directoryPath = path.join(__dirname, './app/routes/');
fs.readdirSync(directoryPath)
  .filter((file) => !!file && file.indexOf('.') !== 0)
  .forEach((file) => {
    let [routeName] = file.split('.');
    app.use(
      `/${routeName === 'index' ? '' : routeName}`,
      require(path.resolve(directoryPath, file))
    );
  });

module.exports = app;
