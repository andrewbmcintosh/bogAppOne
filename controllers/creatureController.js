const Creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        Creature.find({}).then((creatures) => {
            res.send(creatures)
        })
    },
    show: (req, res) => {
        Creature.findById(req.params.creatureId).then((creature) => {
            res.send(creature)
        })
    },
    update: (req, res) => {
        Creature.findByIdAndUpdate(req.params.creatureId, req.body)
            .then((updatedCreature) => {
                updatedCreature.save()
                res.send(updatedCreature)
            })
    },
    delete: (req, res) => {
        Creature.findByIdAndDelete(req.params.creatureId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        const newCreature = new Creature(req.body.creature)
        newCreature.save().then((creature) => {
            res.json(creature)
        }).catch(console.log)
          
    }
}


module.exports = creatureController