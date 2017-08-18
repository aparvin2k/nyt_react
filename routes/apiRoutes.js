var Articles = require("../models/Article");
var express = require("express");

var app = express()

app.get("/saved" , (req,res) => {

    console.log("Get")

    Articles.find({}, (err,doc) => {

        if(err){

            console.log(err)
        }
        else{
            res.send(doc)
        }
    });
});

app.post("/saved" , (req,res) => {

    var newArticle = new Articles(req.body)

    newArticle.save((err,doc) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
});

app.delete("/saved", (req,res) => {
    Article.remove({
      _id: req.body.id
    }).then((doc) => {
      res.send(doc);
    }).catch((err) => {
      res.send(err);
    });
  });