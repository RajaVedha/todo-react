import './App.css';
import {useState} from 'react';
import {Task} from './Task.js';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState('');

  const handleChange = (event) => {
      setNewTask(event.target.value);
  }

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList,task]);
  }

  const deleteTask = (id) => {
      const newTodoList = todoList.filter((task) =>  task.id!==id);
      setTodoList(newTodoList);
  }

  const updateTask = (id) => {
    const updateTodoList = todoList.map((task) => {
       if (task.id === id){
        return {...task,complete:true};
       }else{
        return task;
       }
    })
    setTodoList(updateTodoList);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className='addTask'>
        <input onChange={handleChange} placeholder='enter the task'/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return(
            <Task 
            taskName={task.taskName} 
            id={task.id}
            complete={task.complete}
            deleteTask={deleteTask}
            updateTask={updateTask}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
