import { taskActions } from "../actions/actions";
import { Task } from "../models/task";
import { ActionUnion } from "./actionUnion";

export interface TaskState {
  isChanging: false;
  items: Task[];
  error?: string;
}

const INITIAL_STATE: TaskState = {
  isChanging: false,
  items: [],
  error: undefined,
};

export const taskReducer = (
  state: TaskState = INITIAL_STATE,
  action: ActionUnion<typeof taskActions>
) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        items: state.items.concat(action.payload.task),
      };
    }
    case "DELETE_TASK": {
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload.id),
      };
    }
    case "EDIT_TASK": {
      return {
        ...state,
        // items: state.items[state.items.indexOf(task)].description =
        //   action.payload.newDescription,
      };
    }
    default:
      return state;
  }
};
