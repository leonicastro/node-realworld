import { Router } from 'express';
import controller from '../controllers/article.controller.js'

const router = new Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;