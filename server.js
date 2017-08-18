// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/apiRoutes");
var logger = require("morgan");
var Articles = require("./models/Article");
var path = require("path");

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 8080;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
// app.use("/", routes);

// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect(db, (error) => {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// -------------------------------------------------
app.get("/saved" , (req,res) => {

    console.log("Get")

    Articles.find({}, (err,doc) => {

        if(err){

            console.log(err)
        }
        else{
            res.json(doc)
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
    console.log(req.body._id)
    Articles.findByIdAndRemove({ _id: req.body._id },(err, doc) => {
    if (err) console.log(err);
    else res.send(doc);
    });
  });

app.get("/", function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

// Listener
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
