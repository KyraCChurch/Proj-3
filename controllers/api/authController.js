const express = require('express')
const User = require('../../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) => {
  res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {

    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    )

    User.create(req.body)
      .then((user) => {

        res.redirect('/user/login')
      })
      .catch((error) => {

        console.log(error)
        res.json({ error })
      })
  })



router.get('/login', (req, res) => {
  res.render('user/LogIn.jsx')
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    User.findOne({ username })
      .then(async (user) => {
        if (user) {
          const result = await bcrypt.compare(password, user.password)
          if (result) {
            req.session.username = username
            req.session.loggedIn = true
            res.redirect('/cards')
          } else {
            res.json({ error: "password doesn't match" })
          }
        } else {
          res.json({ error: "user doesn't exist" })
        }
      })
      .catch((error) => {
        console.log(error)
        res.json({ error })
      })
  })

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
      res.status(500).json(err)
    } else {
      res.redirect('/')
    }    
  })
})

module.exports = router