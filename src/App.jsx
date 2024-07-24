import React from 'react'
import ReactCounte from './ReactCounte.jsx'
import ReduxCounter from './ReduxCounter.jsx'
import TodoRedux from './TodoRedux.jsx'

const App = () => {
  return (
    <div>
      <ReactCounte/>
      <hr />
      <ReduxCounter/>
      <hr />
      <TodoRedux/>
    </div>
  )
}

export default App