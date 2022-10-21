import "./App.css";
import React, { useState }  from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [todos, setTodos]= useState([]);
  const [done, setDone]=useState({title: "", done: false})
  const onChange = (event)=>{
   const {value}= event.target
   const obj = {}
   obj [ "title"]=value
   obj [ "done"] = false
   setDone(obj)

   
  }
  const addTask = (userInput)=>{
    if(userInput){
      const newItem = {
        id:Math.random().toString(36).substr(2,9),
        task: userInput,
        complate: true
      }
      setTodos([...todos,newItem])
    }
  }
  const removeTask =(id)=>{
    setTodos([...todos.filter((todo)=>todo.id !== id)])

  }
  const handelToggle=(id)=>{
    setTodos([
      ...todos.map((todo)=>
      todo.id === id ? {...todo, complate: !todo.complate}: {...todo})
    ])
  }

  const completedHandler = (id) => {
    let newArr = [...todos].filter((item) => {
      if (item.id === id) {
        item.complate = !item.complate
      }
      return item
    })
    setTodos(newArr)
  }

  return (
    <div className="App">
      <header>
        <h5>Список Задач: {todos.length}</h5>
      </header>
      <Form addTask={addTask}/>
      {todos.map((todo)=>{
        return(
          <TodoList 
          key={todo.id}
          todo={todo}
          onChange={onChange}
          toggleTask={handelToggle}
          removeTask={removeTask}
          complated={completedHandler}
          id={todo.id}
          />
        )
      })}
    </div>
  );
}

export default App;
