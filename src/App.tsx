
import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState("");
  
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setTodoItem(target.value);
  };

  // Option 1 to populate todoList
  const addTask = () => {
    const newTodoList = [...todoList, todoItem];
    setTodoList(newTodoList);
  }

  return(
    <>
      <div className="addTask"></div>
        <input type="text" onChange={handleInputValue}/>
        <br /><br />
        <button onClick={addTask}>Add Task</button>
      <div className="taskList">
        {todoList.map((item, key) => {
          return <h2 key={key}>{item}</h2>
        })}
      </div>
    </>
  )
}

export default App

// Nota: const newTodoList = [...todoList, newTask] // The array will have everything that "todoList" has and will add 
// the new one coming from "newTask".

// 1.0: We need to have a list and whenever an item is added or deleted from the list we need to re-render
// the component. (const [todoList, setTodoList] = useState();)

// 2: When we press the "AddTask" button, it should be saved in the state list (todoList) by means of
// the state method (setTodoList), however to achieve this we have to have the tracking of what is entered in the "Input".
// is entered in the "Input".
      //const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        //const target = event.target as HTMLInputElement;
        //setInputValueNewTask(target.value);
    //}
    //<input type="text" onChange={ handleInputValue }/>

  // 3: Now we should save the input in our task list (todoList). 
// when we press the AddTask button.
    //   const [todoList, setTodoList] = useState<string[] | string>([]);
    //   <button onClick={() => setTodoList(newTask) }>Add Task</button>

