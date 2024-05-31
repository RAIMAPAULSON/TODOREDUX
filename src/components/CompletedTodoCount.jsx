import React from "react";
import { useSelector } from "react-redux";

const CompletedTodoCount = () => {
  const todos = useSelector((state) => state.todos);
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <h3 style={{ color: 'white', textAlign: 'center' }}>Total Completed Todos: {completedCount}</h3>
    </div>
  );
};

export default CompletedTodoCount;