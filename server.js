const { static } = require('express');
const express = require('express');
const app = express();
app.use(express.static(__dirname+"/frontend"));




const mongoose=require('mongoose');
var password=process.env.Mongo_Atlas_Password;
var connectionString="mongodb+srv://sandeep:"+"Sandeep"+"@cluster0.kxroj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(connectionString,{useNewUrlParser: true});
mongoose.connection.on('connected',()=> {
    console.log("Database Connected")
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const todoRouter=require('./todo_routes')
app.use("/todo",todoRouter);


app.get("/tambola", function(req, res){
    let reps=__dirname+"/frontend/html/tambola.html"
    res.sendFile(reps);
})
app.get("/", function(req, res){
    res.send("Welcome to my Basic website");
})
app.get("/resume", function(req, res){
    let reps=__dirname+"/frontend/html/resume.html"
    res.sendFile(reps);
})
app.get("/google", function(req, res){
    let reps=__dirname+"/frontend/html/google.html"
    res.sendFile(reps);
})
app.get("/color", function(req, res){
    let reps=__dirname+"/frontend/html/color.html"
    res.sendFile(reps);
})
app.get("/login", function(req, res){
    let reps=__dirname+"/frontend/html/login.html"
    res.sendFile(reps);
})
app.get("/chart", function(req, res){
    let reps=__dirname+"/frontend/html/chart.html"
    res.sendFile(reps);
})
app.get("/codeforcesvisualizer", function(req, res){
    let reps=__dirname+"/frontend/html/codeforcesvisualizer.html"
    res.sendFile(reps);
})

 
app.get("/register", function(req, res){
    let reps=__dirname+"/frontend/html/register.html"
    res.sendFile(reps);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})