const { model, Schema } = require('mongoose')

const cardSchema = new Schema ({
    title: {required: true, type: String},
    present: { required: true, type: String}
}, {
    timestamps: true
})

const Card = model('Card', cardSchema)

module.exports = Card;