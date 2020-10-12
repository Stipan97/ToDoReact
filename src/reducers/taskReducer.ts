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
        //action.payload.id dobar id mi dohvaca
        const tmpItem = state.items[state.items.indexOf(state.items.filter((task) => task.id === action.payload.id)[0])]
        state.items[state.items.indexOf(tmpItem)] = {
            description: action.payload.newDescription,
            id: action.payload.id
        }
        
      return {
        ...state,
        // items: state.items[state.items.indexOf(task)].description =
        //   action.payload.newDescription,
        // items: state.items[state.items.indexOf(state.items.filter((task) => task.id === action.payload.id)[0])].description = action.payload.newDescription
        //items: {description: action.payload.newDescription, id: action.payload.id} 
      };
    }
    default:
      return state;
  }
};
