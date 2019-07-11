'use strict';

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res) => {
  res.send({
    name: 'Node Realword',
    description: 'Projeto teste para implantação no TJMT.',
    date: '2019-07-01',
    authors: [
      'Édipo Juan <edipojs@gmail.com>',
      'Yuri Leoni de Castro <leoni.yuri@gmail.com>'
    ],
    version: '1.0.0'
  });
});

module.exports = route;
