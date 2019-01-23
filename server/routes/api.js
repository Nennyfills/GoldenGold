var express = require('express')
var router = express.Router()
const db = require('../db');


router.post('/login', function (req, res) {
    console.log(req.body)
    if (req.body.username == null || req.body.password == null) {
        res.send("invalid route")
        return
    }
    var entities;
    var user = null; 
    var result = {}; 

    if(user == null){
        entities = db["users"].list()
        user = entities.find(entity =>
            entity["email"] == req.body.username && entity["password"] == req.body.password);
            result["type"] = "admin";
            result["user"] = user;
    }
  
    if(user == null){
        entities = db["clients"].list()
        user = entities.find(entity =>
                entity["email"] == req.body.username && entity["key"] == req.body.password);    
                result["type"] = "client";
                result["user"] = user;        
        }
    res.send(result);
    return user;
})

router.get('/:path', function (req, res) {
    var path = req.params.path;
    if (db[path] == null) {
        console.log(error)
        res.send("invalid route")
        return
    }
    var entities = db[path].list()
    let uid = req.query.cid;
    if (uid == null) {
        res.send(entities)
        return entities
    } else {
        var t = entities.filter(entity =>
            entity["cid"] == uid
        )
        res.send(t);
        return t;
    }
})

router.get('/:path/:id', function (req, res) {
    const id = req.params.id;
    var path = req.params.path;
    if (db[path] == null) {
        res.send("invalid route")
        return
    }
    var entity = db[path].get(id);
    if (entity) {
        res.send(entity)
        return
    }
    res.send("not found")
})



router.post('/:path', function (req, res) {
    var entity = req.body
    var path = req.params.path;
    if (db[path] == null) {
        console.log("error")
        res.send("invalid route")
        return
    }
    const id = db[path].create(entity);
    res.send("Created Client @ {" + id + "}")
})

router.put("/:path", function (req, res) {
    var path = req.params.path;
    if (db[path] == null) {
        res.send("invalid route")
        return
    }
    var newclient = req.body;
    res.send(db[path].update(newclient))
})

router.delete("/:path", function (req, res) {
    var path = req.params.path;
    if (db[path] == null) {
        res.send("invalid route")
        return
    }
    const id = req.id
    db[path].delete(id)
})


module.exports = router