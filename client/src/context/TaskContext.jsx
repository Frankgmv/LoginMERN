import { createContext, useContext, useState } from 'react';
import { createTasksRequest, getTasksRequest } from '../api/task';

const TaskContext = createContext();

export const useTask = () => {

    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('UseTask must be used within a TaskProvider');
    }
    return context;
}



// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState([]);
    const createTask = async (task) => {
        const res = await createTasksRequest(task)
        console.log(res);
    }

    const getTasks = async () =>{
        try {
            const res = await getTasksRequest();
            setTasks(res.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <TaskContext.Provider value={{
                tasks,
                createTask,
                getTasks
            }}>
            {children}
        </TaskContext.Provider>
    )
}