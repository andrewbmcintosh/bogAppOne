require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Creature = require('../models/Creature')


const luke = new Creature({
  name: 'Luke',
  description: "Jedi"
})
const darth = new Creature({
  name: 'Darth Vader',
  description: "Father of Luke"
})

Creature.remove({})
  .then(() => luke.save())
  .then(() => darth.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())