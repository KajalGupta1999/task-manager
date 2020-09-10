const mongoose=require('mongoose')
const validator=require('validator') 
const User=mongoose.model('User',{
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new Error('Email is invalid')
                }
            }
        },
        age:{
            type:Number,
            default:0,
            validate(value){
                if(value<0) {
                    throw new Error('age must be a positive number')
                }
            }
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minlength:7,
            validate(value){
                if(value.toLowerCase().includes('password'))
                {
                    throw new Error('password does not contains password')
                }
            }
        }
    })
    // const me=new User({
    //     name:'    nikita   ',
    //    email:'Kajalgupta7898@gmail.com  ',
    //    password:'abc@123'
    // })
    // me.save().then(()=>{
    //     console.log(me)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    module.exports=User