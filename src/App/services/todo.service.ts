import { useState } from "react";
import { ITodo } from "../models/todoItem.model.ts";

export const useTodoService = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "First Task", description: null, done: false },
    {
      id: 2,
      title: "Second Task",
      description: "First Task but Better",
      done: false,
    },
  ]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodoDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodoDone, deleteTodo };
};
