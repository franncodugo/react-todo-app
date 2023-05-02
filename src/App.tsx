
import { useState } from 'react'
import './App.css'

interface ITodoList{
  id: number,
  taskName: string
};

function App() {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [todoItem, setTodoItem] = useState("");
  const [id, setId] = useState(1);
  
  // Saving the input from the User into the todoItem state using the setTodoItem state method.
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setTodoItem(target.value);
  };

  // Adding todoItem to the TodoList.
  const addTask = (): void => {
    setId(id + 1);

    const task: ITodoList = {
      id: id,
      taskName: todoItem
    }; 

    console.log(task);

    setTodoList([...todoList, task]);
  }

  // Deleting task by Id from the TodoList.
  const deleteTask = (taskId: number) => {
    if (todoList !== undefined){
      console.log(taskId);
      const newTodoList = todoList?.filter((task) => task.id !== taskId);
      setTodoList(newTodoList);
    }
  }

  return(
    <>
      <div className="addTask"></div>
        <input type="text" onChange={handleInputValue}/>
        <br /><br />
        <button onClick={addTask}>Add Task</button>
      <div className="taskList">
        {todoList && todoList.map((task: ITodoList, key: number) => {  
          return (
            <div>
              <h2 key={key}>{task.taskName}</h2>
              <button onClick={() => deleteTask(task.id)}> X </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

// Delete Notes:

// 1. We create the button that will delete in each task. 
  // Note: We must use this syntax, using an anonymous function.. 
  // <button onClick={() => deleteTask(key)}> X </button>

// 2. The function will be: 
  //const deleteTask = (taskName: string) => {
  //  const newTodoList = todoList.filter((task) => {
  //    if (task === taskName){
  //      return false;
  //    }else{
  //      return true;
  //    }
  //   }); 
  //   setTodoList(newTodoList);
  //}

  // Option 2:
    // const deleteTask = (taskName: string) => {
    // const newTodoList = todoList.filter((task) => task !== taskName);
    // setTodoList(newTodoList);
    // }

// 3. The problem with this approach (not using an Id) is that when we have 2 Task with
// the same name it will be deleting both instead of the one that the user clicked.

// Add & Create Notes:

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

