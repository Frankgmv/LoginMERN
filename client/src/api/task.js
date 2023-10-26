import axios from "./axios";

export const getTasksRequest =()=> axios.get('/tasks');
export const getTaskRequest =(id)=> axios.get(`/task/${id}`);
export const createTasksRequest =(task)=> axios.post('/task', task);
export const updateTasksRequest =(task)=> axios.put(`/task/${task._id}`, task); 
export const deleteTasksRequest =(id)=> axios.delete(`/task/${id}`);