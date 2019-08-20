const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.post('/:id/favorite', controller.favorite);
router.delete('/:id/favorite', controller.unfavorite);

module.exports = router;
