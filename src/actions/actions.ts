import { Task } from "../models/task";
import { ActionWithPayload } from "./actionHelper";

const addTask = (
  task: Task
): ActionWithPayload<"ADD_TASK", { task: Task }> => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

const deleteTask = (
  id: number
): ActionWithPayload<"DELETE_TASK", { id: number }> => ({
  type: "DELETE_TASK",
  payload: {
    id: id,
  },
});

const editTask = (
  id: number,
  newDescription: string
): ActionWithPayload<
  "EDIT_TASK",
  { id: number; newDescription: string }
> => ({
  type: "EDIT_TASK",
  payload: {
    id,
    newDescription,
  },
});

export const taskActions = {
  addTask,
  deleteTask,
  editTask,
};