import React, { useState } from "react";
import { TodoItem } from "../components/TodoItem.tsx";
import { useTodoService } from "../services/todo.service";

export const TodoList: React.FC = () => {
  const { todos, addTodo, deleteTodo, toggleTodoDone } = useTodoService();
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState(""); // Add state for description

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "") {
      addTodo({
        id: todos.length + 1,
        title: newTodoTitle,
        description: newTodoDescription,
        done: false,
      });
      // Reset when Adding
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  const handleToggleDone = (id: number) => {
    toggleTodoDone(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <div id="main">
        <h1>To-Do List</h1>
        <div className="todos-container">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onToggleDone={handleToggleDone}
            />
          ))}
        </div>
      </div>
      <div id="new-item-inputs">
        <input
          type="text"
          placeholder="Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          rows={3}
        />
        <button onClick={handleAddTodo}>Add New Task</button>
      </div>
    </>
  );
};
