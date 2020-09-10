// //CRUD
//const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
const{MongoClient,ObjectID, ObjectId}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
const id=new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    const db=client.db(databaseName)
    // db.collection('users').insertOne({
    //     name:'Kajal Gupta',
    //     age:21,
    // },(error,result)=>{
    //     if(error)
    //     {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
//     db.collection('users').insertMany([
//         {
//             name:'Akshita',
//             age:20
//         },
//         {
//              name:'Etika',
//              age:19
//         }
// ],(error,result)=>{
//     if(error){
//         return console.log('Unbale to insert documents')
//     }
//     console.log(result.ops)
// })
// db.collection('task-collections').insertMany([
//             {
//                 description:'first task',
//                 status:true
//             },
//             {
//                 description:'second-task',
//                 status:true
//             },
//             {
//                 description:'third-task',
//                 status:false
//             }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unbale to insert documents')
//         }
//         console.log(result.ops)
//     }) 
    // db.collection('users').findOne( {_id:new ObjectId("5f53cefd8781c81594d3456a")},(error,user)=>{
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }
    //     else{
    //         console.log(user)
    //     }
    // })
    // db.collection('users').find( {age:20}).toArray((error,users)=>{
    //     console.log(users)
    // })  
    // db.collection('users').find( {age:20}).count((error,count)=>{
    //     console.log(count)
    // }) 
    // db.collection('task-collections').findOne( {_id:new ObjectId("5f53c5bb1161e00f8c2752d1")},(error,user)=>{
    //         if(error)
    //         {
    //             return console.log('Unable to fetch')
    //         }
    //         else{
    //             console.log(user)
    //         }
    //     })
    //     db.collection('task-collections').find( {status:true}).toArray((error,users)=>{
    //         console.log(users)
    //     }) 
    // const updatePromise=db.collection('users').updateOne({
    //     _id:new ObjectId("5f53c069812024124c2ab8c2")
    // },{
    //     $set:{
    //         name:'kaju'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('task-collections').updateMany({
    //     status:false
    // },{
    //     $set:{
    //         status:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age:20
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('task-collections').deleteOne({
        description:'first task'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
