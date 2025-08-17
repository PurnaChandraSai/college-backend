const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,   
        trim: true
    },
    PhoneNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,  
        unique: true        
    }
});


const Student = mongoose.model("Student", StudentSchema);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("✅ Successfully connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ Error connecting to MongoDB:", err);
    });

module.exports = { Student };
