const express=require('express')
const { update } = require('../models/task')
const Task=require('../models/task')
const auth=require('../db/middleware/auth')
const router=new express.Router()

router.post('/tasks', auth ,async(req,res)=>{
    const task=new Task({
        ...req.body,
        owner:req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/tasks',async (req,res)=>{
    try
    {
        const task=await Task.find({})
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})
router.get('/tasks/:id',async(req,res)=>{
        const _id=req.params._id
        try {
            const task=await Task.findById(_id)
            if(!task) {
                return res.status(404).send()
            }else{
                res.send(task)
            }
        }catch(e){
            res.status(500).send()
        }
    })
    router.patch('/tasks/:id',async(req,res)=>{
        const Updates=Object.keys(req.body)
        const allowedUpdatesArray=['description','status']
        const isValid=Updates.every((update)=>allowedUpdatesArray.includes(update))
        if(!isValid){
           res.status(400).send({error:'Invalid updates'}) 
        }
        try{
            const task=Task.findById(req.params.id)
            Updates.forEach((update)=>task[update]==req.body[update])
            await task.save()
            //const task= await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
            if(!task)
            {
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(400).send()
        }
    })
    router.delete('/tasks/:id',async(req,res)=>{
        try{
            const task= await Task.findByIdAndDelete(req.params.id)
            if(!task)
            {
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(500).send()
        }
})
module.exports=router