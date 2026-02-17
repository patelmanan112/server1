const express = require("express");

const app = express();
app.use(express.json());
const users = [
    {
        att : 80,
        uid : 108243,
        total_sub : 7,
        bonus : 20,
        name : 'Dax'
    },
    {
        att : 98,
        uid : 108659,
        total_sub : 9,
        bonus : 10,
        name : 'manan'
    },
    {
        att : 100,
        uid : 108347,
        total_sub : 9,
        bonus : 1,
        name  :'dev'
    }
];

app.get("/" , (req , res)=>{
res.status(200).json(users)
})

app.get('/users/:uid' , (req , res)=>{
    const uid = Number(req.params.uid)
    const user = users.find(u=> u.uid == uid);

    res.status(200).json(user);
})

app.put('/user/:uid' , (req , res)=>{
    const uid = Number(req.params.uid);
    console.log(uid);
    
    const index = users.findIndex(u=> u.uid == uid);

    
     users[index] ={
          att : req.body.att,
        uid : req.body.uid,
        total_sub : req.body.total_sub,
        bonus : req.body.bonus,
        name  :req.body.name
    }
    res.status(201).json({"user updated": users[index]})
})


app.post('/user' , (req , res)=>{
    const user = {
         att : req.body.att,
        uid : req.body.uid,
        total_sub : req.body.total_sub,
        bonus : req.body.bonus,
        name  :req.body.name
    }
    users.push(user);
    res.status(201).json({"added": user})
})

app.delete("/user/:uid" , (req , res)=>{
    const uid = Number(req.params.uid);
    const user = users.findIndex(u=> u.uid ===  uid);
    users.splice(user , 1);
    res.status(201).json(users);
})

app.patch("/users/:uid" , (req , res)=>{


    const userId = Number(req.params.uid);
    console.log(userId);
    
    const  user = users.find(u => u.uid === userId);
    console.log(user);
    if(!user){
        return res.status(404).json({"message": "User does not found"});
    }
    if(req.body.att) user.att = req.body.att;
    if(req.body.total_sub) user.total_sub = req.body.total_sub;
     if(req.body.bonus) user.bonus = req.body.bonus;
      if(req.body.name) user.bonus = req.body.name;

    res.status(200).send("User updated" , user);
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});