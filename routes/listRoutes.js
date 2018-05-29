const list = require('../models/surveys.js')
const passport = require('passport')

module.exports = (app) => {

app.get('/api/list', (req, res) => {
    var user =  req.user[0].id
    list.view(user).then( result => {
        res.send(result)
    })
})

app.post('/api/list/item', (req,res) => {
    console.log(typeof req.body.item)
    console.log(typeof req.user[0].id)
    list.insert(req.body.item,req.user[0].id).then (result => {
        console.log(result)
    })
    res.end()
})

app.put('/api/list/complete', (req,res) => {
    console.log(req.body)
    var number = parseInt(req.body.taskId)
    list.updateOne(true, number).then(result => {
        console.log(result)
    })
    res.end()
})
}