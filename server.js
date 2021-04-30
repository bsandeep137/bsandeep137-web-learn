const { static } = require('express');
const express = require('express');
 
const app = express();
app.express(express.static(__dirname+"/frontend"))
app.get("/", function(req, res){
    res.send("Welcome to my Basic website");
})
app.get("/resume", function(req, res){
    let reps=__dirname+"/frontend/html/resume.html"
    res.sendFile(reps);
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
