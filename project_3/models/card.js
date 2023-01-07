const { model, Schema } = require('mongoose')

const cardSchema = new Schema({
    dogName: {required: true, type: String},
    present: { required: true, type: String},
    owner1stName: {required: true, type: String},
    owner2ndName: {required: true, type: String},
    ownerNumber: {required: true, type: String},
    vet: {required: true, type: String},
    vetNumber: {required: true, type: String},
    dogWeight: {required: true, type: String},
    dogAge: {required: true, type: String},
    dogBreed: {required: true, type: String},
    feeding: {required: true, type: String},
    vacRabbies: {required: true, type: String},
    vacDistemper: {required: true, type: String},
    vacBordatella: {required: true, type: String}
}, {
    timestamps: true
})

const Card = model('Card', cardSchema)

module.exports = Card; 

