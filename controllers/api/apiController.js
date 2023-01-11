const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.cards)
    },
    show (req, res, next) {
      res.json(res.locals.data.card)
    }
  }
  
  module.exports = apiController
  