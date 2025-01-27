const express = require('express')
const server = express();
const cors = require('cors')
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/form');
  console.log("db conenected")
}
const uSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone:String
  });
  const User = mongoose.model('User', uSchema);
const bodyparser = require('body-parser')
server.use(bodyparser.json())
server.use(cors())
server.post('/form', async(req,res)=>{
    const user = new User();
    user.name = req.body.name
    user.email = req.body.email
    user.phone = req.body.phone
   const doc =  await user.save();
   res.send(doc)
   console.log(doc)
})
server.get('/getform' ,async(req,res)=>{
  const docs = await  User.find({})
  res.json(docs);
})
server.listen(8000,()=>{
    //console.log('server started');
})

