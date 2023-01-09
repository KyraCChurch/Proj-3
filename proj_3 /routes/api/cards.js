const express = require('express')
const router = express.Router()
const cardCtrl = require('../../controllers/api/cards')

// Index /api/cards
router.get('/', cardCtrl.indexNotComplete, cardCtrl.jsonCards)
// Index /api/cards/present
router.get('/present', cardCtrl.indexComplete, cardCtrl.jsonCards)
// Delete /api/cards/:id
router.delete('/:id', cardCtrl.destroy, cardCtrl.jsonCard)
// Update /api/card/:id
router.put('/:id', cardCtrl.update, cardCtrl.jsonCard)
// Create /api/cards
router.post('/', cardCtrl.create, cardCtrl.jsonCard)
// Show /api/cards/:id
router.get('/:id', cardCtrl.show, cardCtrl.jsonCard)

module.exports = router
