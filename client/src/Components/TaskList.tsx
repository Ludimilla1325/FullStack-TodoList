import React, { useEffect, useState } from "react";
import { GET_ALL_TASKS } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_TASK } from "../Graphql/Mutation";
import Update from "./Update";

function TaskList() {
  const { data } = useQuery(GET_ALL_TASKS);

  const [deleteTask, { error }] = useMutation(DELETE_TASK);
  const [edit, setEdit] = useState({
    id: null,
    info: "",
  });

  if (edit.id) {
    return <Update id={edit.id} info={edit.info} />;
  }

  return (
    <div>
      {data &&
        data.getAllTasks.map((task: any) => {
          return (
            <li className="todo-row">
              <label>{task.info}</label>
              <button
                onClick={() => {
                  deleteTask({ variables: { id: task.id } });
                }}
              >
                Apagar
              </button>
              <button onClick={() => setEdit({ id: task.id, info: task.info })}>
                Atualizar
              </button>
            </li>
          );
        })}
    </div>
  );
}

export default TaskList;
