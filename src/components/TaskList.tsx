import React from "react";
import { useSelector } from "react-redux";
import { TaskState } from "../reducers/taskReducer";
import { TaskDelete } from "./TaskDelete";
import { TaskEdit } from "./TaskEdit";

interface AppState {
  tasks: TaskState;
}

export const TaskList = () => {
  const { items } = useSelector((state: AppState) => state.tasks);

  return (
    <div>
      <ul>
        {items.map((task) => (
          <li key={task.description}>
            {task.description}
            <TaskEdit description={task.description} />
            <TaskDelete description={task.description} id={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
