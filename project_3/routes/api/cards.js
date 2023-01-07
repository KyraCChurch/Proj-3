const express = require('express') 
const router = express.Router()
const cardCtrl = require('../../controllers/api/cards')

// Index /api/cards
router.get('/', cardCtrl.indexNotComplete, cardCtrl.jsonCards)
// Index /api/cards/completed
router.get('/completed', cardCtrl.indexComplete, cardCtrl.jsonCards)
// Delete /api/cards/:id
router.delete('/:id', cardCtrl.destroy, cardCtrl.jsonCards)
// Update /api/cards/:id
router.put('/:id', cardCtrl.update, cardCtrl.jsonCards)
// Create /api/cards
router.post('/', cardCtrl.create, cardCtrl.jsonCards)
// Show /api/cards/:id
router.get('/:id', cardCtrl.show, cardCtrl.jsonCards)

module.exports = router