const { model, Schema } = require('mongoose')

const cardSchema = new Schema({
    dogName: {required: true, type: String},
    present: { required: true, type: String},
    owners1stName: {required: true, type: String},
    owners2ndName: {required: true, type: String},
    ownersNumber: {required: true, type: String}
}, {
    timestamps: true
})

const Card = model('Card', cardSchema)

module.exports = Card; 

