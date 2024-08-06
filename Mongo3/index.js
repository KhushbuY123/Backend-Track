const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
const Chat=require("./models/chat.js")
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))  //to import css
app.use(express.urlencoded({extended:true}))
main().then(()=>console.log("connection successful")).catch(err=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index route
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats)
    res.render("index.ejs",{chats})
})
//New route
app.get("/chats/new",(req,res)=>{
    res.render("newchat.ejs")
})
//Create route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newchat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newchat.save().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("hi")
});

app.listen(8000,()=>{
    console.log("Server is listening on port 8000")
})