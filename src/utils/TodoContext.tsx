import { createContext, ReactNode, useState, useContext } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}
export type TodosContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleTodoDelete: (id: string) => void;
}

export const TodoContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const todoList = localStorage.getItem("todos") || "[]";
            return JSON.parse(todoList) as Todo[];
        }
        catch (error) {
            return [];
        }
    });
    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const todos = [
                ...prev,
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date(),
                },
            ];
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        })
    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodo = prev.map((todo) => {
                if (todo.id === id) {
                    //  to change the checkbox of marked todo
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newTodo));
            return newTodo;
        })
    }
    const handleTodoDelete = (id: string) => {
        setTodos((prev) => {
            let deleteTodo = prev.filter((todo) => todo.id !== id)
            localStorage.setItem("todos", JSON.stringify(deleteTodo));
            return deleteTodo;
        })
    }
    return (
        <TodoContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleTodoDelete }}>
            {children}
        </TodoContext.Provider>
    )
}

// Consumer
export const useTodos = () => {
    const todoConsumer = useContext(TodoContext);
    if (!todoConsumer) {
        throw new Error("useTodos used outside of Provider");
    }
    return todoConsumer;
}