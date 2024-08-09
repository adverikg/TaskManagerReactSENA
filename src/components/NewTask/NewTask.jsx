import { useContext, useState } from "react"
import { taskContext } from "../Context/Context"
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'

export const NewTask = () => {
const [nameTask, setNameTask] = useState('')
const [descriptionTask, setDescriptionTask] = useState('')
const {tasks, setTasks} = useContext(taskContext)

const handleNameChange = (e) => {
  setNameTask(e.target.value)
}

const handleDescriptionChange = (e) => {
  setDescriptionTask(e.target.value)
}

const addTasks = () => {
 setTasks([...tasks, 
  {  id: uuidv4(),
  title: nameTask,
  description: descriptionTask,
  completed: false}])
}



  return (
  <>
    <section className='containerNewTask'>
      <div className='boxNewTask'>
        <label htmlFor="nameTask">
            task Name
        </label>
        <input type="text" id='nameTask' value={nameTask} onChange={handleNameChange}/>
        <label htmlFor="descriptionTask">Description task</label>
        <input type="text" id='descriptionTask' value={descriptionTask} onChange={handleDescriptionChange}/>
      </div>
      <button onClick={addTasks}>New Task</button>
    </section>
  </>
)
}