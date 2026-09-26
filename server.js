require('dotenv').config();
const express=require("express")
const dbConn=require('./config/db');
const taskRoutes=require('./routes/taskRoutes')

const app=express()
dbConn()
app.use(express.json())
app.use('/api/tasks',taskRoutes)
app.get('/',(req,res)=>{
res.send("Connected and Api is running succusefully")
})

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000/`);

})
