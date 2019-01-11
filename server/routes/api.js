var express = require('express')
var router = express.Router()
const db = require('../db');

//router.use(function timeLog (req, res, next) {
//  console.log(req.path + ' triggered at Time: ',  new Date())
//})

router.get('/:path', function (req, res) {
    var path = req.params.path;
    if(db[path] == null)
    {
        console.log(error)
        res.send("invalid route")
        return
    }
    var entities = db[path].list()
    console.log(entities)
    res.send(entities)
})

router.get('/:path/:id', function (req, res) {
    const id  = req.params.id;
    var path = req.params.path;
    if(db[path] == null)
    {
        res.send("invalid route")
        return
    }
    var entity  =db[path].get(id);
    if(entity){
        res.send(entity)
        return
    }
    res.send("not found")
  })



router.post('/:path', function (req, res) {
    console.log("xxxxx")
    var client  = req.body
    console.log(client)
    var path = req.params.path;
    if(db[path] == null)
    {
        console.log("error")
        res.send("invalid route")
        return
    }
    const id = db.clients.create(client);
    res.send("Created Client @ {" + id +"}" )
})

router.put("/:path", function(req, res){
    var path = req.params.path;
    if(db[path] == null)
    {
        res.send("invalid route")
        return
    }
    var newclient = req.body;
    res.send(db.clients.update(newclient))
})

router.delete("/:path", function (req, res) {
    var path = req.params.path;
    if(db[path] == null)
    {
        res.send("invalid route")
        return
    }
    const id  = req.id
    db.clients.delete(id)
})


module.exports = router