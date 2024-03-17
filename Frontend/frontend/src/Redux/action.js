import {
  Add_Todo,
  Delete_Todo,
  Get_Todo,
  Update_Todo,
  error,
  loading,
} from "./actionType";

import axios from "axios";

export const AddTodotoServer = (data) => async (dispatch) => {
  // dispatch({type:loading})
  await axios
    .post("http://localhost:7500/todos", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      if (res.data.msg === "Todo Created") {
        alert(res.data.msg);
      }
      dispatch({ type: Add_Todo, payload: res.data.data });
    });
};

export const GetTodoServer = async (dispatch) => {
  dispatch({ type: loading });
  await axios
    .get("http://localhost:7500/todos", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      dispatch({ type: Get_Todo, payload: res.data });
    })
    .catch((err) => dispatch({ type: error }));
};

export const TodoUpdate = (data, todoID) => async (dispatch) => {
  //dispatch({type:loading})
  await axios
    .patch(`http://localhost:7500/todos/${todoID}`, data, {
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      if (res.data.msg === `Todo with id:${todoID} has been updated`)
        alert(res.data.msg);
      dispatch({ type: Update_Todo, payload: res.data.todo });
    })
    .catch((err) => dispatch({ type: error }));
};

export const DeleteServerTodo = (todoID) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    await axios
      .delete(`http://localhost:7500/todos/${todoID}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.msg === `Todo with id:${todoID} has been deleted`) {
          alert(res.data.msg);
        }
        dispatch({ type: Delete_Todo, payload: todoID });
      })
      .catch((err) => dispatch({ type: "ERROR" }));
  } catch (error) {
    console.error("Error deleting todo from server:", error);
    dispatch({ type: "ERROR" });
  }
};
