 require("dotenv").config();

const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

//middleware
app.use(cors()); 
app.use(express.json()); 

//connect to mongoose
async function connect() {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);  
        console.log("Connected to MongoDB"); 
    } catch (error) {
        console.error(error); 
    }
}
connect(); 

const laptopSchema = new mongoose.Schema({
    
brand: String,
model: String, 
price: Number,
cpu_family: String,
category: String,
screen_size: Number,
memory_size: Number,
customer_rating: Number, 
image: String,
});

const Laptop = mongoose.model("Laptop", laptopSchema); 

//add obects to array to be inserted into db
//const laptops = [{}];

//insert data into db
/*laptops.forEach(laptop => {
    const newLaptop = new Laptop({
        brand: laptop.brand,
        model: laptop.model, 
        price: laptop.price,
        cpu_family: laptop.cpu_family,
        category: laptop.category,
        screen_size: laptop.screen_size,
        memory_size: laptop.memory_size,
        customer_rating: laptop.customer_rating, 
        image: laptop.image,
    })
    newLaptop.save();
})*/

//routes
app.get("/", (req,res) => {
    Laptop.find({}).limit(6)
    .then(laptops => res.json(laptops)
    ).catch(err => console.log(err));
}); 

app.get("/showmore", (req,res) => {
    Laptop.find({})
    .then(laptops => res.json(laptops)
    ).catch(err => console.log(err));
})

app.get("/business", (req,res) => {
    Laptop.find({category:"Business"})
    .then(laptops => res.json(laptops)
    ).catch(err => console.log(err));
});

app.get("/home&study", (req,res) => {
    Laptop.find({category:"Home & study"})
    .then(laptops => res.json(laptops)
    ).catch(err => console.log(err));
});

//require route
app.listen(3001, function () {
    console.log("Express server is running on port 3001")
}); 




