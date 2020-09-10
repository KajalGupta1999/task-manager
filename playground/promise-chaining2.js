require('../src/db/mongoose')
const Task=require('../src/models/task')
//5f57ab99e3de8a16d44e965c
// Task.findByIdAndDelete('5f58c9ff87c1c51168e8a27b').then(()=>{
//         //console.log(user)
//         return Task.countDocuments({status:true})
//     }).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//             console.log(e)
//     })
    const deleteTaskAndCount=async(id)=>{
        const task=await Task.findByIdAndDelete(id)
        const count=await Task.countDocuments({status:true})
        return count
    }
    deleteTaskAndCount('5f58c7de19aa20119c27d505').then((count)=>{
        console.log(count)
    }).catch((e)=>{
        console.log(e)
    })