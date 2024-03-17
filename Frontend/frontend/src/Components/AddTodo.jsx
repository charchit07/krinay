import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodotoServer } from "../Redux/action";
import "../Styles/AddTodo.modules.css"; // Import CSS module

const AddTodo = () => {
  const [title, setTitle] = useState("");
  let dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const data = {
      title
    };
    dispatch(AddTodotoServer(data));
    setTitle("");
  };
  return (
    <div className="todo"> {/* Apply the class name */}
      <h1 className="heading">Todos</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="field" 
      />
      <button onClick={handleAddTodo} className="btn">Add</button> {/* Apply the class name */}
    </div>
  );
};

export default AddTodo;
