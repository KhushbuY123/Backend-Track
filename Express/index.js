const express=require("express")
const app=express()
console.dir(app)
let port=3000;

app.listen(port,()=>{
    console.log(`App is listening at ${port}`)
})

// app.use((req,res)=>{
//     console.log("request recieved")
//     res.send({
//         name:"apple"
//     })
// })

// app.get("/",(req,res)=>{
//     res.send("you contacted to home path")
// })

// app.get("/:username/:id",(req,res)=>{
//     let {username ,id}=req.params
//     res.send(`you contacted to @${username}.`)
// })


app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
      res.send("result not found")  
    }
    res.send(`Result found @${q}`)
    // let q=req.query
});
// app.get("/about",(req,res)=>{
//     res.send("you contacted to new about path")
// })

// app.get("*",(req,res)=>{
//     res.send("Path doesn't exist")
// })

