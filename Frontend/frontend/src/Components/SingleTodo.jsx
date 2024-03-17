// Singletodo.js

import React from "react";
import { useDispatch } from "react-redux";
import { DeleteServerTodo, TodoUpdate } from "../Redux/action";
import "../Styles/SingleTodo.modules.css"; // Import the CSS file

const Singletodo = ({ el }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const newtitle = window.prompt("Enter New Title");
    let data = {
      title: newtitle,
    };
    dispatch(TodoUpdate(data, id));
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <p className="todo-title">Title: {el?.title}</p>
        <p className="todo-timestamp">{el?.created_at}</p>
        <button className="todo-button" onClick={() => handleEdit(el.id)}>
          Edit
        </button>{" "}
        {/* Apply button styling */}
        <button
          className="todo-button"
          onClick={() => dispatch(DeleteServerTodo(el.id))}
        >
          Delete
        </button>{" "}
        {/* Apply button styling */}
      </div>
    </div>
  );
};

export default Singletodo;
