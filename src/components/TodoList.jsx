import React from "react";
import { Title } from "./Styles";

const TodoList = ({ todo, removeTask, toggleTask, onChange,complated, id }) => {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complate ? "one-item" : "item-one"}
        onClick={() => toggleTask(todo.id)}
      >
        <Title isValid={todo.complate}>{todo.task}</Title>
        
      </div>
      <div className="item">
        <img
          className="img-icon"
          src="https://cdn-icons-png.flaticon.com/512/219/219311.png"
          alt="done"
          onClick={() => complated(id)}
        />

        <img
          className="img-icon"
          src="https://cdn-icons-png.flaticon.com/128/3395/3395538.png"
          alt="remove"
          onClick={() => removeTask(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;
