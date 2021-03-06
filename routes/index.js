const express = require('express')
const Creature = require('../models/Creature')
const router = express.Router()
const creatureController = require('../controllers/creatureController')



router.get('/api/creatures', creatureController.index)
router.post('/api/creatures', creatureController.create)
router.get('/api/creatures/:creatureId', creatureController.show)
router.patch('/api/creatures/:creatureId', creatureController.update)
router.delete('/api/creatures/:creatureId', creatureController.delete)

module.exports = router;