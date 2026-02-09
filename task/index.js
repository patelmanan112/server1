const express = require("express");

const app = express();
app.use(express.json());
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Arjun ram", role: "student" },
  { id: 3, name: "sita", role: "student" },
  { id: 4, name: "krishna", role: "operator" }

]
app.get("/", (req, res) => {
  res.status(200).json(users)
})
app.get("/users", (req, res) => {
  res.status(200).json(users)
})

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);

  const userId = Number(req.params.id);
  // console.log(users[2].UniversityUID);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ Message: "User not found" })
  }
  res.status(200).json(user);
})

app.get("/cg/names/:name" , (req , res)=>{
    console.log(req.params.name);
    const store = req.params.name.toLowerCase();

    const check = users.find(u => u.name.toLowerCase() == store);

    if(!check){
        return res.status(404).json({message : "User not found"})
    }
    res.status(200).json(check);

})

app.post("/users", (req, res) => {

  console.log(req.body)
  req.body.map((element) => {
    const newUser = {
      id: element.id,
      name: element.name,
      role: element.role
    };

    users.push(newUser);
    console.log(element);


  
});
  res.status(201).json({
  message: "User created",
  user: users});
})


app.post("/well" , (req, res)=>{
  console.log(req.body);
  
  req.body.forEach(data => {
        const newUser = {
      id: data.id,
      name: data.name,
      role: data.role
    };

    users.push(newUser);
    

  });
   res.status(201).json({
  message: "User created",
  user: users});
})
// app.post("/v1" ,(req , res)=>{
//   const addUser = {
//     id: req.body.id,
//     name: req.body.name,
//     role: req.body.role
//   }
//   users.push(addUser);

//   res.status(201).send("New data of student is added in in-memory database")
// })
app.listen(3000, () => {
  console.log("Server started on port 3000");
});