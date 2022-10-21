import React from 'react'
import { useState } from 'react'
const Form = ({addTask}) => {
    const [userInput, setUserInput]= useState('')
    const handelSubmit =(e)=>{
     e.preventDefault()
     addTask(userInput)
     setUserInput('')
    }
    const handleVhange =(e)=>{
        setUserInput(e.target.value)
    }
  return (
    <form onSubmit={handelSubmit}>
        <input 
        type="text" 
        value={userInput} 
        onChange={handleVhange}
        placeholder='Задачи ...'/>
        <button>Add</button>
    </form>
  )
}

export default Form