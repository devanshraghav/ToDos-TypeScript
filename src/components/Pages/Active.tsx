import { useTodos } from "../../utils/TodoContext";
const Active = () => {

    const { todos, toggleTodoAsCompleted } = useTodos();

    let filterData = todos.filter((todo)=> !todo.completed);

    return (
        <div className="main-task">
            {
                filterData.map((todo) => {
                    return <li key={todo.id}>
                        <input type='checkbox' id={`todo-${todo.id}`} checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    </li>
                })
            }
        </div>
    )
}

export default Active;