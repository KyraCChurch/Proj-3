const db = require('./db')
const Card = require('./card')

Card.deleteMany({})
  .then(() => {
    Card.create(starterCards)
      .then((createdCards) => {
        console.log('created cards:', createdCards)
        db.close()
      })
      .catch(err => {
        console.log(err)
        db.close()
      })
  }).catch(err => {
    console.log(err)
    db.close()
  })
