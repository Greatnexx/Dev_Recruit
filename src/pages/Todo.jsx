import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const App = () => {
  // State to hold todos and current input
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [input, setInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to handle adding or updating todos
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTodo) {
      // Update existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: input } : todo
        )
      );
      setEditingTodo(null);
    } else {
      // Add new todo
      const newTodo = { id: Date.now(), text: input }; // Use Date.now() for unique ID
      setTodos([...todos, newTodo]);
    }

    setInput(""); // Clear input field
  };

  // Function to handle editing a todo
  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setInput(todo.text);
  };

  // Function to handle deleting a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
        <Link to="/" className="text-blue-700  mb-5 flex items-center mt-2  ">
       <BiArrowBack className='mr-2'/>
        Go back 
      </Link>
    <div className="bg-gray-50 py-4 px-3">

        <h1 className="text-[40px] font-bold text-center">TODO APP</h1>
    <div className="container mx-auto md:mt-24 mt-6  p-10 max-w-xl bg-blue-700 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="mb-5 flex flex-col sm:flex-row gap-4 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className={`${
            editingTodo ? "bg-yellow-500 hover:bg-yellow-600" : "bg-black hover:bg-blue-600"
          } text-white font-bold px-4 py-2 rounded-lg shadow`}
        >
          {editingTodo ? "Update" : "Add"}
        </button>
      </form>
      <div className="bg-white p-8 rounded-lg shadow">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No todos to show!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center py-2 px-3 mb-3 bg-gray-100 rounded-lg shadow-sm"
            >
              <p className="text-gray-800">{todo.text}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <FaRegEdit />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default App;
