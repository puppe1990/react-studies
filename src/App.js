import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Use the useState hook to manage the todos in the component's state
  const [newTodo, setNewTodo] = useState(''); // Use the useState hook to manage the input value in the component's state

  const handleChange = (event) => {
    setNewTodo(event.target.value); // Update the newTodo value in the component's state when the input value changes
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    setTodos([...todos, newTodo]); // Add the new todo to the list of todos in the component's state
    setNewTodo(''); // Clear the input value in the component's state
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the todo from the list of todos in the component's state
  };

  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a to-do"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
