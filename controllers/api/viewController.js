const RESOURCE_PATH = '/cards'

const viewController = {
  index (req, res, next) {
    res.render('cards/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('cards/New')
  },
  edit (req, res, next) {
    res.render('cards/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('cards/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const cardId = req.params.id || res.locals.data.card._id
    res.redirect(`${RESOURCE_PATH}/${cardId}`)
  }

}

module.exports = viewController
