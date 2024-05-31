import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todo/todoSlice";
import './TodoItem.css'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="list-container">
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span style={{ color: 'white' }}>{todo.text}</span>
        </div>
        <div><button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button></div>
      </div>
    </>
  );
};

export default TodoItem;