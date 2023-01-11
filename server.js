require('dotenv').config();
require('./config/database')
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const path = require('path')
const cors = require('cors')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const bcrypt = require('bcrypt')
const db = require('./models/db')
const MongoStore = require("connect-mongo");
const session = require("express-session");
app.use(express.json())
const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword }
        user.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/cards', require('./routes/api/cards'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We In the Building`)
})

app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })
  app.use(cors())
  app.engine('jsx', require('jsx-view-engine').createEngine())
  app.set('view engine', 'jsx')
  db.once('open', () => {
    console.log('connected to MongoDB Atlas')
  })

app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: true,
      resave: false,
    })
  )

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/card', require('./controllers/api/routeController'))
app.use('/user', require('./controllers/api/authController'))