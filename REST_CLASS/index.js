const express=require("express")
const app=express();
const port=8080;
const {v4:uuid4}=require('uuid');
const methodOverride=require("method-override")

const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuid4(),
        username:"khushbu",
        content:"I love coding"
    },
    {
        id:uuid4(),
        username:"khushbu Yadav",
        content:"I love coding"
    },
    {
        id:uuid4(),
        username:"Nootan",
        content:"I an social worker"
    }
];

// Index Route Implement:GET/posts......................
app.get("/posts",(req,res)=>{
    res.render("index",{posts})
})

app.get("/posts/new",(req,res)=>{
 res.render("form")
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuid4()
    posts.push({username,content,id}) 
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show",{post})
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;
    res.redirect("/posts")
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id)
    res.render("editform",{post})
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id)
    res.redirect("/posts")
});

app.listen(port,(req,res)=>{
    console.log(`Hii this is ${port}`)
})

 
