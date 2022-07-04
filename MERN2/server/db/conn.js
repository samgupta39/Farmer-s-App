const DB= process.env.DATABASE;
const mongoose = require('mongoose');
mongoose.connect(DB).then(() =>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("connection unscuccessful")
})
