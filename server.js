
var express = require("express");
var path = require("path");
var fs = require('fs')
var notesInfo = require('./db/db.json')
const { v4: uuidv4 } = require('uuid');
const { networkInterfaces } = require("os");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// CSS Stylings
app.use(express.static(path.join(__dirname, 'public')));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/add', function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get('/api/notes', function(req, res) {
  return res.json(notesInfo);
});

app.post('/api/notes', function(req, res) {
  var notesData = req.body;

  newNote.id = uuidv4();

  notesInfo.push(newNote)

  fs.writeFile("./db/db.json", JSON.stringify(notesInfo), function finished(
    err
   ) {
     console.log("good to go");
     res.json("Success!");
});


  app.delete("/api/notes.:id", function (req, res) {
    const id = req.params.id;

    for (i = 0; i< note.length; i++)
    if (notesInfo[i].id === id) {
      notesInfo.splice(i, 1);
    }

    fs.writeFile("./db/db.json", JSON.stringify(notesInfo), function finished(
     err
    ) {
      console.log("good to go");
      res.json("Success!");
});

  });





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})