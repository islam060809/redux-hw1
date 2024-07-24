import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    const { counter } = useSelector((state) => state.count)
    const dispatch = useDispatch()

    const plusCounter = () => {
        dispatch({ type: "plus" })
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plusCounter}>+</button>
            <button onClick={()=>dispatch({type:"minus"})}>-</button>
        </div>
    )
}

export default ReduxCounter