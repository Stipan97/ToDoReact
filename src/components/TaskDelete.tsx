import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../actions/actions";

interface TaskDeleteProps {
  description: string;
  id: number;
}

export const TaskDelete: React.FC<TaskDeleteProps> = ({ id }) => {
  const dispatch = useDispatch();

  const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { taskId } = event.currentTarget.dataset;

    if (taskId) {
      dispatch(taskActions.deleteTask(parseInt(taskId)));
    }
  };

  return (
    <button onClick={onClickDelete} data-task-id={id}>
      Delete
    </button>
  );
};
