import React from "react";
import { ITodo } from "../models/todoItem.model.ts";

interface TodoItemProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggleDone,
}) => {
  const handleDeleteTodo = () => {
    onDelete(todo.id);
  };

  const handleToggleDone = () => {
    onToggleDone(todo.id);
  };

  return (
    <div className={`todo-item ${todo.done ? "done" : ""}`}>
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleToggleDone}
        />
      </div>
      <div className="todo-item-center">
        <h3>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <div className="todo-item-right">
        <a onClick={handleDeleteTodo}>
          <img src="icons/delete.png" alt="Delete task" />
        </a>
      </div>
    </div>
  );
};
