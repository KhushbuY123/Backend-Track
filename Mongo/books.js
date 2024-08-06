const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
        
    },
    price:{
        type:Number,
        min:1
    },
    genre:{
        type:[String]
    }
})
const book=mongoose.model("book",bookSchema)
// const book1=new book({title:"mathermatics",author:"RD Sharma",price:1200,genre:["comics","superheros","fiction"]})
// book1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
book.updateOne({title:"mathermatics"},{price:1300},{runValidators:true}).then((res)=>{
    console.log(res)
})