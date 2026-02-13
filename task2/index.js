const express = require("express");

const app = express();
app.use(express.json());
const users = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Cotton Jacket",
        "price": 55.99,
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    }]



app.get("/", (req, res) => {
    res.status(200).json(users)
})


app.get("/all", (req, res) => {
    res.status(200).json(users)
})


app.get("/product/:id", (req, res) => {
    console.log(req.params.id);

    const userId = Number(req.params.id);
    // console.log(users[2].UniversityUID);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ Message: "User not found" })
    }
    res.status(200).json(user);
})


app.post("/product" , (req, res)=>{
    console.log(req.body);
    // console.log(users);
    
    console.log(req.body.id);
    
    const obj = {
        id : req.body.id,
        title : req.body.title,
        price : req.body.price,
        category : req.body.category,
        image: req.body.image,
        rating :{
            rate : req.body.rating.rate,
            count : req.body.rating.count
        }
    }
console.log(obj);

    users.push(obj);
    res.status(201).send("updated")


})

app.get("/category/:type", (req, res) => {
    console.log(req.params.type);
    const store = req.params.type.toLowerCase();

    const check = users.filter(u => u.category.toLowerCase() == store);

    if (!check) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json(check);

})

app.post("/products" , (req, res)=>{
    console.log(req.body);
    // console.log(users);
    
    
   req.body.map((element)=>{
     const obj = {
        id : element.id,
        title : element.title,
        price : element.price,
        category : element.category,
        image: element.image,
        rating :{
            rate : element.rating.rate,
            count : element.rating.count
        }
    }

    users.push(obj);
   })


    res.status(201).json({
        message : "Updated",
        users: users
    })


})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});