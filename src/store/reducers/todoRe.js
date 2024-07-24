const todoState = {
    todoData: [
        { title: "Whatch stream", id: 1 },
        { title: "Play basket", id: 2 }
    ]
}

const todoReducer = (state = todoState, action) => {
    const {type, payload }= action
    switch (type) {
        case 'addTodo':
            return {
                todoData: [...state.todoData, payload]
            }
        case 'delet':
            return {
                todoData:[...payload]
            }
        default:
            return state
    }
}

export default todoReducer