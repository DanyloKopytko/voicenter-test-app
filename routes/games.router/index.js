const router = require('express').Router();

const { gamesControllers } = require('../../controllers');

router.get('/:id', gamesControllers.getById);
router.get('/', gamesControllers.getAll);

router.post('/', gamesControllers.create);

router.patch('/:id', gamesControllers.update);

router.delete('/:id', gamesControllers.delete);

module.exports = router;
