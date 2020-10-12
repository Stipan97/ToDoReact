import { taskActions } from "../actions/actions";
import { Task } from "../models/task";
import { ActionUnion } from "./actionUnion";

export interface TaskState {
    isChanging: false,
    items: Task[],
    error: string
}

const INITIAL_STATE: TaskState = {
    isChanging: false,
    items: [],
    error: ''
};

export const taskReducer = (state: TaskState = INITIAL_STATE, action: ActionUnion<typeof taskActions>) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: state.items.push(action.payload.task)
            };
        }
        case 'DELETE_TASK': {
            let task: Task = setTmpTask(state, action.payload.description)
            return {
                ...state,
                tasks: state.items.splice((state.items.indexOf(task)), 1)
            }
        }
        case 'EDIT_TASK': {
            let task: Task = setTmpTask(state, action.payload.oldDescription)
            return {
                ...state,
                tasks: state.items[state.items.indexOf(task)].description = action.payload.newDescription
            }
        }
        default:
            return state;
    }
}

//ovaj dio mi se ne svida
function setTmpTask(state: TaskState, description: string): Task {
    let task: Task = {description: ""}
    state.items.forEach(element => {
        if(element.description === description) {
            task = element
        }
    })
    return task
}