const express = require('express')

const db = require('../db/caochData')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    db.getCoach()
    .then(id => {
        res.json(id)
    })
})

// router.post('/coach', (req, res) => {
//     console.log(req.body)
//     //dont forget about the console.log(this)
//     db.postCoach(req.body)
//     //change this later
//         .then(id => {
//             res.json(id[0])
//             console.log(res.body)
//         })
// })

module.exports = router