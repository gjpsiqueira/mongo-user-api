var express = require('express')
var router = express.Router()
var User = require('../modules/user.schema')

router.get('/test', (req,res) => {
})

router.get('/', async (req,res,next) => {
    const users = await User.find()
    res.send(users)
    
})

router.post('/', async (req,res) => {
    const { name, email } = req.body
    const user = new User({ name, email })
    user.save()

    res.sendStatus(200)
})

router.delete('/:id', async (req,res) => {
    const { id } =  req.params
    await User.findByIdAndRemove(id)

    res.sendStatus(200)
})

module.exports = router

