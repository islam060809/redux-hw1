import React, { useState } from 'react'

const ReactCounte = () => {
    const [cuont, setCount] = useState(1)
    function plus(num) {
        const newNum = num + 1
        setCount(newNum)
    }
    function minus(num) {
        const newNum = num - 1
        setCount(newNum)
    }
    return (
        <div>
            <h1>{cuont}</h1>
            <button onClick={()=>plus(cuont)}>+</button>
            <button onClick={()=>minus(cuont)}>-</button>
        </div>
    )
}

export default ReactCounte