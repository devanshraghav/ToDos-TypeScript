import { useTodos } from '../utils/TodoContext';
const TodoRender = () => {

    const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();

    let filterData = todos;

    return (
        <div className='main-task'>
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

export default TodoRender;