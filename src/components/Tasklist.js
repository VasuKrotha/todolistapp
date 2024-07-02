import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetotdo, toggletodo } from "../storeData/todosSlice";
import { Taskinput } from "./Taskinput";
export const Tasklist = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editid, setId] = useState(null);
  const [edittask, seteditTask] = useState("");

  const edit = (id, task) => {
    setId(id);
    seteditTask(task);
  };

  const emptytask = () => {
    setId(null);
    seteditTask("");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Todo List</h1>
      <Taskinput editid={editid} edittask={edittask} emptytask={emptytask} />

      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-3">
          <thead className="thead-light">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Todo</th>
              <th scope="col">Completed</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-dark">
            {todos.map((todo, index) => (
              <tr key={todo.id} className="text-center">
                <th scope="row">{index + 1}</th>
                <td
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggletodo(todo.id))}
                    className="form-check-input"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm m-2"
                    onClick={() => edit(todo.id, todo.task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => dispatch(removetotdo(todo.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
