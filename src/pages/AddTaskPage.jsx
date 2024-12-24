import  { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {addTask , removeTask} from "../features/tasksSlice";

const AddTaskPage = () => {
  const [task, setTask] = useState("");

    const tasks = useSelector((state) => state.tasks.items); //  все задачи
  const dispatch = useDispatch();


    const handleAddTask = () => {
        if (task) {
            const newTask = {
                id: Date.now(), // Генерация  ID для  задач
                text: task,
            };
            dispatch(addTask(newTask)); // Добавляю задачу
            setTask(""); // Очищаю поле ввода после добавления задачи
        }
    };
    const handleRemoveTask = (id) => {
        dispatch(removeTask(id)); // Dispatch remove task with the ID

    };



    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}{" "}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove Task</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={handleAddTask}>Add Task</button>



        </div>

    );
};

export default AddTaskPage
