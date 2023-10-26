import { useEffect } from "react";
import { useTask } from "../context/TaskContext";

const TaskPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(()=> {
    getTasks();
  }, [])

  return (
    <div>
      {
        tasks.map((task) => {
          return (

            <div key={task._id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskPage
