const express=require("express");
const app=express();
const port=8080;

// this line is necessary to handle post request 
app.use(express.urlencoded({extends:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let{user,password}=req.query;
    res.send(`standard GET response, Welcome ${user}`)
})

app.post("/register",(req,res)=>{
    let{user,password}=req.body;
    res.send(`standard POST response, Welcome ${user}`)
})

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})