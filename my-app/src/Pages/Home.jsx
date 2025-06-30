import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incriment } from '../Redux/Action/action'


function Home() {
  const count=useSelector(state=>state.CounterState.count)
  const dispatch=useDispatch()

  return (
    <>
        <h2>This is Home page</h2>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(incriment())}>+</button>
    </>
  )
}

export default Home