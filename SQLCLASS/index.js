const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express")
const app=express()
const path=require("path")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password:'Khushbu@1023'
  });

// INSERT NEW DATA.....
// let getRandomUser=()=>  {
//     return [
//       faker.string.uuid(),
//       faker.internet.username(),
//       faker.internet.email(),
//       faker.internet.password(),
//   ]};

// let q="INSERT INTO user (id,username,email,password) VALUES ?";
// let data=[]
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser())
// }

app.get("/",(req,res)=>{
  let q=`SELECT count(*) FROM user`;
  // Home Route
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let count=result[0]["count(*)"]
   res.render("home.ejs",{count});
  });}
  catch(err){
      console.log(err)
      res.send("some error in Db")
  }
})

app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  // Show User Route
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   res.render("user.ejs",{result});
  });}
  catch(err){
      console.log(err)
      res.send("some error in Db")
  }
})


app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user=result[0]
      console.log(result)
      res.render("edit.ejs",{user})
    });
  }
  catch(err){
    console.log(err)
    res.send("some error in Db")
}
});

app.listen("8080",()=>{
  console.log("Hi , there this is me")
})



