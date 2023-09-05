import { useTodos } from "../../utils/TodoContext";
const Completed = () => {

    const { todos, toggleTodoAsCompleted,handleTodoDelete } = useTodos();

    let filterData = todos.filter((todo)=> todo.completed);

    return (
        <div>
            {
                filterData.map((todo) => {
                    return <li key={todo.id}>
                        <input type='checkbox' id={`todo-${todo.id}`} checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                        {
                            todo.completed && (
                                <button type='button' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }
        </div>
    )
}

export default Completed;