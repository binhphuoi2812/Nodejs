var mongoose = require("mongoose");

const URI = "mongodb+srv://binhbui9516:binh1102@cluster0.uwxvm.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async() =>{

    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);
    console.log("db connected");
}

module.exports = connectDB;
