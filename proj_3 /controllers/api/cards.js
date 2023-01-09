const Card = require('../../models/card')

module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonCards,
    jsonCard
}


// jsonCards, jsonCard

function jsonCard (req, res){
    res.json(res.locals.data.card)
}

function jsonCards (req, res){
    res.json(res.locals.data.cards)
}


// create
async function create(req, res, next){
    try {
        const card = await Card.create(req.body)
        console.log(card)
        res.locals.data.card = card
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })        
    }
}


// read - index, show
async function indexComplete(req, res, next){
    try {
        const cards = await Card.find({ present: true })
        res.locals.data.cards = cards
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

async function indexNotComplete(req, res, next){
    try {
        const cards = await Card.find({ present: false })
        res.locals.data.cards = cards
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

async function show(req, res, next){
    try {
        const card = await Card.findById(req.params.id)
        res.locals.data.card = card
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}



// update

async function update(req, res, next){
    try {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.locals.data.card = card
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


// destroy

async function destroy(req, res, next){
    try {
        const card = await Card.findByIdAndDelete(req.params.id)
        res.locals.data.card = card
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}