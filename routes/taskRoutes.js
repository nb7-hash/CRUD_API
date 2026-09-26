const express=require('express')
const routes=express.Router()
const {getTasks,getTaskByID,createTask,updateTask,deleteTask}=require('../controllers/taskControllers')

routes.get('/',getTasks)
routes.get('/:id',getTaskByID)
routes.post('/',createTask)
routes.put('/:id',updateTask)
routes.delete('/:id',deleteTask)

module.exports=routes