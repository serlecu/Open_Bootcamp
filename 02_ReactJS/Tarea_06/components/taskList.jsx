import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
// import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Test', 'Test description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Test', 'Test description', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Test', 'Test description', false, LEVELS.BLOCKING);

    // const changeState = (id) => {
    //     console.log('Change state of task with id: ' + id)
    // }

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    useEffect(() => {
        console.log('Tasks: ', tasks);

        return () => {
            console.log('Cleaning up...');
        }
    }, [tasks]);

    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function removeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        const tempTasks = [...tasks];
        tempTasks.push(task)
        setTasks(tempTasks);
    }

    const table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Task</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={removeTask}
                            >
                            </TaskComponent>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable = table();

    if (tasks.length === 0) {
        tasksTable = (
            <div>
                <p>- There are no tasks -</p>
                <p>- Add a new one -</p>
            </div>
        )
    } else {
        tasksTable = table();
    }

    return (
        <div>
            <div className='col-12'>
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Tasks:</h5>
                    </div>
                    <div className="card-body"
                        style={{ position: 'relative', height: '400px' }}>
                        {tasksTable}
                    </div>

                </div>

            </div>
            {/* <TaskForm add={addTask} 
                    tasksLength={tasks.length}>
                </TaskForm> */}
                <TaskFormik add={addTask}
                        tasksLength={tasks.length}>
                    </TaskFormik>

        </div>
    );
};

export default TaskListComponent;
