
import { useState } from 'react';
import './App.css';
import { ITodoList } from './Interfaces/ITodoList';
import { Task } from './Components/Task';
import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [id, setId] = useState(1);
  
  // Saving the input from the User into the todoItem state using the setTodoItem state method.
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setTodoItem(target.value);
  };

  // Adding todoItem to the TodoList.
  const addTask = (): void => {
    setId(id + 1);

    const newTodoTask: ITodoList = {
      id: id,
      taskName: todoItem,
      isCompleted: false
    }; 

    setTodoList([...todoList, newTodoTask]);
  }

  // Deleting task by Id from the TodoList.
  const deleteTask = (taskId: number) => {
    if (todoList !== undefined){
      const newTodoList = todoList?.filter((task) => task.id !== taskId);
      setTodoList(newTodoList);
    }
  }

  // Updating the task to mark it as Completed.
  const setTaskToComplete = (taskId: number) =>{
    const updatedTasks = todoList.map((task) => {
      if (task.id === taskId){
        return { ...task, isCompleted: true }; // Remain the same but the isCompleted prop to TRUE.
      } else {
        return task; // Keeping the same.
      }
    });
    setTodoList(updatedTasks);
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
            <Task 
              key={key} 
              taskName={task.taskName} 
              deleteTask={deleteTask}
              id={task.id}
              isCompleted={task.isCompleted}
              setTaskToComplete={setTaskToComplete}
            />
          )
        })}
      </div>
    </>
  )
}

export default App;


// Note: Si necesito extraer del JSX para crear un componente y este utiliza funciones, ids u
// otras propiedades, todo se lo puedo enviar utilizando las PROPS.

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

