require('../src/db/mongoose')
const User=require('../src/models/user')
//5f57ab99e3de8a16d44e965c
// User.findByIdAndUpdate('5f57cafa6e281b201431aa3a',{age:1}).then(()=>{
//         //console.log(user)
//         return User.countDocuments({age:1})
//     }).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//             console.log(e)
//     })
    const updateAgeAndCount=async(id,age)=>{
        const user=await User.findByIdAndUpdate(id,{age})
        const count=await User.countDocuments({age})
        return count
    }
    updateAgeAndCount('5f57cafa6e281b201431aa3a',3).then((count)=>{
        console.log(count)
    }).catch((e)=>{
        console.log(e)
    })