require("dotenv").config();
const express = require("express");
const { Student } = require("./db");
const cors = require("cors");

const app = express();


// app.use(cors({
//   origin: [
//     "https://your-frontend.vercel.app","https://college-frontend-rho.vercel.app/",
//     "http://localhost:5173"
//   ],
//   credentials: true
// }));

app.use(cors({ origin: 'https://college-frontend-rho.vercel.app' }));
app.use(express.json());


app.post("/student", async (req, res) => {
    try {
        const { Username, PhoneNo, email } = req.body;

        const NewStudent = await Student.create({ Username, PhoneNo, email });
        console.log("✅ New Student Created:", NewStudent);

        res.status(201).json({data :"done"});
    } catch (err) {
        console.error("❌ Error creating student:", err);
        res.status(500).json({ error: "Failed to create student" });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`🚀 App running on port ${process.env.PORT}`);
});
