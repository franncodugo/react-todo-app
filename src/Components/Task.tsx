
export const Task = (props: any) => {
    return (
        <div>
          <h2 key={props.key} style={{color: props.isCompleted ? "Green" : "Black"}}>
            {props.taskName}
          </h2>
          <button onClick={() => props.deleteTask(props.id)}>
            X 
          </button>
          <button onClick={() => props.setTaskToComplete(props.id)}> 
            Complete 
          </button>
        </div>
    );
}