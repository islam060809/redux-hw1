import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoRedux = () => {
    const { todoData } = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const addNewTodo = (e) => {
        e.preventDefault();
        console.log(e);
        const todoInput = e.target.todoInput.value
        if (todoInput === "") {
            ;
        } else {
            const newTodo = { title: todoInput, id: todoData.at(-1).id + 1 || 1 }
            dispatch({ type: "addTodo", payload: newTodo })
            e.target.todoInput.value = ""
        }
    }
    const deleteTodo = (id) => {
        console.log(id);
        const index = todoData.findIndex(el => el.id === id)
        const befor = todoData.slice(0, index)
        const after = todoData.slice(index + 1)
        console.log(befor,"be");
        console.log(after,"af");
        const newTodo = [...befor,...after]
        console.log(newTodo,"new");
        dispatch({ type: "delet", payload:  newTodo})

    }
    return (
        <div>
            <h2>Todo Redux</h2>
            <form onSubmit={addNewTodo}>
                <input type="text" name='todoInput' />
                <input type="submit" />
            </form>
            <ol>
                {todoData.map((el) => (
                    <li>
                        {el.title}
                        <button onClick={() => deleteTodo(el.id)}>delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TodoRedux