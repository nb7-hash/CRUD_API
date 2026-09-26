const Task=require('../models/Task')


const getTasks=async(req,res)=>{
    try{
        const tasks=await Task.find()
        res.status(200).json(tasks);
    }catch(error){
        console.log('Error fetching tasks:',error.message);
        res.status(500).json({message: 'Server error while fetching the task'});

    }
};
const getTaskByID=async(req,res)=>{
   const {id}=req.params
    try{
        const task=await Task.findById(id);
        if (!task){
            return res.status(404).json({message:"Task is not created"})
        }
        return res.status(200).json(task)
    }
    catch(e){       
        res.status(400).json({message:"Id is not found"})
    }
}
const createTask=async(req,res)=>{
    const {title,description,completed}=req.body 
    try{
        const count=await Task.countDocuments();
        const task=await Task.create({title,description,completed})
        res.status(201).json(task)
    }
    catch(e){
        console.log("Error to insert it",e.message)
        res.status(500).json({message:"Internal Error"})
    }
}

const updateTask=async(req,res)=>{
 
    try{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!task){
           return res.status(400).json({message:"Task is not Found!"})     
        }
        else{
          return  res.status(200).json({message:"Updated Succusfully"})
        }
       
    }
    catch(e){
        res.status(400).json({message:"Error in updating"})
    }
}

const deleteTask=async(req,res)=>{
    try{
    const taskdelted=await Task.findByIdAndDelete(req.params.id);
    if (!taskdelted){
        return res.status(404).json({message:"Task is not Found"})
    }
    else{
                return res.status(200).json({message:"Deleted Succusefully"})
    }

}
catch(e){
    res.status(400).json({message:"Invalid Task"})
}
}
module.exports={getTasks,getTaskByID,createTask,updateTask,deleteTask}