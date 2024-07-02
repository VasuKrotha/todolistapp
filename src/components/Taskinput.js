import React, { useEffect, useState } from "react";
import { addtodo, edittodo } from "../storeData/todosSlice";
import { useDispatch } from "react-redux";
export const Taskinput = ({ editid, edittask, emptytask }) => {
  const [usertext, setText] = useState(edittask || "");
  const dispatch = useDispatch();

  useEffect(() => {
    setText(edittask || "");
  }, [edittask]);

  const hanglesubmit = (e) => {
    e.preventDefault();
    if (usertext.trim()) {
      if (editid) {
        dispatch(edittodo({ id: editid, task: usertext }));
      } else {
        dispatch(addtodo(usertext));
      }

      setText("");
      emptytask();
    }
  };
  return (
    <div>
      <form
        onSubmit={hanglesubmit}
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <div className="m-5">
          <input
            type="text"
            className="form-control w-70 text-center"
            placeholder="Enter text here"
            onChange={(e) => setText(e.target.value)}
            value={usertext}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {editid ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
