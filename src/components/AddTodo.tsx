import React, {FormEvent, useState } from 'react'
import { useTodos } from '../utils/TodoContext';


const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Write your todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodo;