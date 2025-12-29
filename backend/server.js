// import express from "express";
// const app=express();

// app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });

// app.post("/signup",(req,res)=>{

//     const name=req.body.name;
//     const email=req.body.email;
//     const password=req.body.password;
//     console.log(name,email,password);
//     if(!name||!email||!password){
//         res.send("Required to fill all the details");
//     }
//     else{
//         res.send("Signup successful");
//     }
// })
// app.post("/login",(req,res)=>{
//     const email=req.body.email;
//     const password=req.body.password;
//      if(email==="vaish@gmail.com"&&password==="12345" ){
//         res.send("login successful");
//      }else{
//         res.send("login failed");
//      }
// })

// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log(`Server is running in the port ${PORT}`);
// })

import express from "express";
import mongoose from "mongoose";
import todoroutes from "./routes/todoRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ enable CORS
app.use(cors());

// ✅ parse JSON
app.use(express.json());

// routes
app.use("/", todoroutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017/reacttodo")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

// server
app.listen(5000, () => {
  console.log("server listening on port 5000");
});

