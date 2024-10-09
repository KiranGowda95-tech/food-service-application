console.log("hello");
const express = require("express");
const mongoose = require("mongoose");
const getDishes = require("./controllers/dishesControllers");
const router = require("./routes/userRoutes");

const app = express();
const PORT = 5000;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kirankumardn74:kumar123@devconnector.fmvtn9e.mongodb.net/?retryWrites=true&w=majority&appName=DevConnector"
).then(()=>{
    console.log('Connected to Atlas database')
}).catch((err)=>{
    console.log(err)
});

app.use(router);

//app.get("/api/dishes", getDishes);

// app.post('/api/user/register',(req,res)=>{
//     console.log(req.body)
//     res.send('Okey')
// })

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
