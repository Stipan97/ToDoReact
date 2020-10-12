import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../actions/actions";

export const TaskInput = () => {
  const dispatch = useDispatch();

  const [localDescription, setDescription] = useState<string>();

  const onChangeUpdateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onClickUpdateTask = () => {
    if (localDescription) {
      dispatch(
        taskActions.addTask({ description: localDescription, id: Date.now() })
      );
    }

    setDescription("");
  };

  return (
    <>
      <input
        onChange={onChangeUpdateTask}
        type="text"
        name="task"
        value={localDescription}
        placeholder="Input task..."
      />
      <button onClick={onClickUpdateTask}>Add Task</button>
    </>
  );
};
