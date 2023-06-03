export const Task = (props) => {
    return (
        <div 
        className='task'
        style={{backgroundColor: props.complete ? "green" : 'white'}}>
               <h1>{props.taskName}</h1>
               <button onClick={() => props.updateTask(props.id)}>complete</button>
               <button onClick={() => props.deleteTask(props.id)}>x</button>
            </div>
    )
}