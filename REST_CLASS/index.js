const express=require("express")
const app=express();
const port=8080;

const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"khushbu",
        content:"I love coding"
    },
    {
        username:"khushbu Yadav",
        content:"I love coding"
    },
    {
        username:"Nootan",
        content:"I an social worker"
    }
];

// Index Route Implement:GET/posts......................
app.get("/posts",(req,res)=>{
    res.render("index",{posts})
})

app.listen(port,(req,res)=>{
    console.log(`Hii this is ${port}`)
})

