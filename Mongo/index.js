const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema)
const usre1=new User({name:"khushbuyadav",email:"khushbuyad123@gmail.com",age:21})
usre1.save().then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err);
});
User.insertMany([
  {name:"muskan",email:"muku@gmail.com",age:20},
  {name:"suman",email:"bruce@gmail.com",age:24}
]).then((data)=>{
  console.log(data)
})
// User.find({age:{$gte:22}}).then((data)=>{
//   console.log(data)
// })
// User.updateOne({name:"khushbu"},{age:20}).then((res)=>{
//   console.log(res)
// })
User.deleteOne({name:"khushbuyadav"}).then((res)=>{
  console.log(res)
})