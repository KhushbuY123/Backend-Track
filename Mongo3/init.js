const mongoose=require("mongoose");
const Chat=require("./models/chat.js")
main().then(()=>console.log("connection successful")).catch(err=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats=[
    {
    from:"khushbu",
    to:"Ankita",
    msg:"hii",
    created_at:new Date()
    },
    {
        from:"khushbu",
        to:"Ankita Mishra",
        msg:"hii, am good",
        created_at:new Date()
    },
    {
        from:"khushbu Yadav",
        to:"Ankita",
        msg:"hii,How are you ",
        created_at:new Date()
    }
]

Chat.insertMany(chats)