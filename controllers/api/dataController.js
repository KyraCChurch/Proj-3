const Card = require('../../models/card')

const dataController = {
  // Index,
  index (req, res, next) {
    Card.find({ username: req.session.username }, (err, foundCards) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.cards = foundCards
        next()
      }
    })
  },
  // destroy
  destroy (req, res, next) {
    Card.findByIdAndDelete(req.params.id, (err, deletedCard) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.card = deletedCard
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Card.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCard) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.card = updatedCard
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.username = req.session.username
    Card.create(req.body, (err, createdCard) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.card = createdCard
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Card.findById(req.params.id, (err, foundCard) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a card with that ID'
        })
      } else {
        res.locals.data.card = foundCard
        next()
      }
    })
  }
}

module.exports = dataController
