import Task from "../models/task.models.js";

export const getTasks = async (req, res) =>{

    const tasks = await Task.find({
        user: req.user.id
    }).populate('user');
    res.status(200).json(tasks)
    
}
export const getTask = async (req, res) =>{ 
    const { id }= req.params;

    const task = await Task.findById(id)

    if(!task) res.status(204).json({message:"Task not found."});
    else res.status(200).json(task);

}
export const addTask = async (req, res) =>{
    const {title, description, date} = req.body;

    const newTask = await Task.create({
        title,
        description,
        date,
        user: req.user.id
    })

    const createTask = await newTask.save();

    if(!createTask) res.status(401).json({message: "It was an error creating the task."})
    res.status(201).json(createTask);

}
export const updateTask = async (req, res) =>{

    const{ body, params :{id}} = req;

    const updateTask = await Task.findByIdAndUpdate(id, body, { new: true});

    res.status(200).json(updateTask);
}
export const deleteTask = async (req, res) =>{
    const { id }= req.params;

    const task = await Task.findByIdAndDelete(id);

    if(!task) res.status(403).json({message:"Task not found."});
    res.status(200).json({message:"Task deleted."});
}

