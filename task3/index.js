const express = require("express");

const app = express();
app.use(express.json());
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/" , (req , res)=>{
res.status(200).json(users)
})



app.get("/users", (req ,  res)=>{
    res.status(200).json(users);
})



app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);
    console.log(userId);
    console.log(req.body);
    
    
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role,
    age : req.body.age
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});



app.delete("/user/:id", (req, res)=>{
    console.log(req.params.id);
    
    const userId = Number(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if(index === -1){
        res.status(404).send("User doesn't exist");
    }

    users.splice(index ,1);
    res.status(200).json({"user": users})
});



app.patch("/users/:id" , (req , res)=>{
    const userId = Number(req.params.id);

    const  user = users.find(u => u.id === userId);
    if(!user){
        return res.status(404).json({"message": "User does not found"});
    }
    if(req.body.name) user.name = req.body.name;
    if(req.body.role) user.name = req.body.role;

    res.status(200).send("User updated" , user);
});



app.delete("/users/:name" , (req , res)=>{
    const name = req.params.name;
    console.log(name);
    
    const user = users.findIndex(u => u.name.toLowerCase() == name);
    console.log(user);
    
    if(user === -1){
        return res.status(404).send("No user found");
    }
    users.splice(user ,1);
    res.status(200).json({"user": users})
})



app.patch("/users1/:name" , (req , res)=>{
    const name = req.params.name;
    console.log(name);
    
    const user = users.find(u => u.name.toLowerCase() == name);
    console.log(user);
    
    if(!user){
        return res.status(404).send("No user found");
    }

    if(req.body.name) user.name = req.body.name;
    if(req.body.role) user.role = req.body.role
    res.status(200).json({"user": users})
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});