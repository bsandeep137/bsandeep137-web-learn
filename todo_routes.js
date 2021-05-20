const express = require('express')
var todoSchema=require('./backend/models/todomodels')
const router= express.Router();
// var idx=1;
// var data=[]


router.get("/",async(resq,res)=>{
    try{
        res.sendFile(__dirname+"/frontend/html/todo.html")
    }catch(err)
    {
        res.send('error'+err)
    }
})
router.get("/todo_list",async(req,res)=>{
    var task=await todoSchema.find()
    res.json(task)
})

router.post("/add_todo",async(req,res)=>{
    var task= await todoSchema.create(req.body)
    res.send(JSON.stringify({id:task["_id"]}))
})
router.delete("/remove_todo/:id",async(req,res)=>{
    var task = await todoSchema.deleteOne({_id:req.params.id})
    res.send(task)

})
router.put("/get_todo/:id",async(req,res)=>{
    var task=await todoSchema.update(
        { _id:req.params.id},
        {$set:{todo:req.body.todo}}
        )
    res.json(task)
})











// router.get("/",function(req,res){
//     res.sendFile(__dirname+'/frontend/html/todo.html')
// })
// router.post('/add_todo',function(req,res){
//     console.log("entered into post")
//     var x=req.body;
//     x.id=idx;
//     idx++;
//     data.push(x)
//     res.send(JSON.stringify({id:x.id}));
// })

// router.get('/todo_list',function(req,res) {
//     res.send(data);
    
// })
// router.get('/todo_list/:id',function(req,res) {
//     var Id=req.params.id;

//     res.send(data);
    
// })
// router.put("/get_todo/:id",function(req,res) {
//     for( x of data){
//         if (x.id==req.params.id){
//             x.todo=req.body.todo;

//         }

//     }
//     res.send("done updating")
    
// })
// router.delete("/remove_todo/:id",function (req,res) {
//     data=data.filter((x)=>{return (x.id!=req.params.id)})
//     res.send("deleted")
// })
module.exports = router