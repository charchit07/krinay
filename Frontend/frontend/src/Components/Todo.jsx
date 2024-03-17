import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetTodoServer } from "../Redux/action";
import Singletodo from "./SingleTodo";
import AddTodo from "./AddTodo";
import "../Styles/Todo.modules.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo.todos);
  const loading = useSelector((store) => store.todo.loading);
  useEffect(() => {
    dispatch(GetTodoServer);
  }, []);

  return loading ? (
    <h1 className="loading">Loading........</h1>
  ) : (
    <div>
      <AddTodo />

      {todos && todos.length > 0 ? (
        <div className="container">
          {todos
            .slice()
            .reverse()
            .map((el) => (
              <Singletodo key={el?.id} el={el} />
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
