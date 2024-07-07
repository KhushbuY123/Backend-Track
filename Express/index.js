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

app.get("/",(req,res)=>{
    res.send("you contacted to path")
})

app.get("/about",(req,res)=>{
    res.send("you contacted to about path")
})

app.get("*",(req,res)=>{
    res.send("Path doesn't exist")
})

