const jwt =require('jsonwebtoken')
const mongoose = require('mongoose');
const bycrpt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username : String,
    email: String,
    fname : String,
    lname: String,
    pnum: String,
    state:String,
    city: String,
    dist: String,
    DOB:String,
    password: String,
    pnum: String,
    // tokens:[{token: String}]
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        // console.log("inside");
        this.password = await bycrpt.hash(this.password,12);
        // this.cpass = await bycrpt.hash(this.cpass,12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens =this.tokens.concat({token:token})
    this.save();    
    return token;
}
// ???
const User = mongoose.model('REGISTRATION',userSchema);
module.exports=User;

mongoose.model