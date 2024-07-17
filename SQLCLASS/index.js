const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password:'Khushbu@1023'
  });

//INSERT NEW DATA.....
let getRandomUser=()=>  {
    return [
      faker.datatype.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
  ]};

let q="INSERT INTO user (id,username,email,password) VALUES ?";
let data=[]
for(let i=1;i<=100;i++){
    data.push(getRandomUser())
}
// A simple SELECT query
try{
connection.query(q,[data],(err,result)=>{
 if(err) throw err;
 console.log(result)
 console.log(result.length)
});}
catch(err){
    console.log(err)
}
connection.end();






