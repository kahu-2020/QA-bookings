const express = require('express')

const db = require('../db/caochData')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    db.getCoach()
        .then(coaches => {
            res.json(coaches)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

module.exports = router