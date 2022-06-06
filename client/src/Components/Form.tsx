import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../Graphql/Mutation";

function CreateTask() {
  const [info, setInfo] = useState("");
  const [createTask, { error }] = useMutation(CREATE_TASK);

  return (
    <>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Task"
          className="todo-input"
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <button
          className="todo-button"
          onClick={() => {
            createTask({
              variables: {
                info: info,
              },
            });
          }}
        >
          Create User
        </button>
      </div>
    </>
  );
}

export default CreateTask;
