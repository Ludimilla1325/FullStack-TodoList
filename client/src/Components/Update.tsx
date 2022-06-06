import React, { useState } from "react";
import { UPDATE_TASK } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdateTask(props: any) {
  const [info, setTask] = useState("");
  const [UpdateTask, { error }] = useMutation(UPDATE_TASK);

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        placeholder={props.info}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button
        onClick={() => {
          UpdateTask({
            variables: {
              id: props.id,
              info: info,
            },
          });
          console.log(props.id, info);
        }}
      >
        Update Task
      </button>
    </div>
  );
}

export default UpdateTask;
