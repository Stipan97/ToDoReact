import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { taskActions } from "../actions/actions"

interface TaskEditProps {
    id: number
}

export const TaskEdit: React.FC<TaskEditProps> = ({id}) => {
    const dispatch = useDispatch()

    const [localDescription, setDescription] = useState("")

    const onChangeUpdateEditTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value)
    }

    const onClickEditTask = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {taskId} = event.currentTarget.dataset

        if(taskId) {
            dispatch(taskActions.editTask(parseInt(taskId), localDescription))
        }
        setDescription("")
    }

    return(
        <>
            <input onChange={onChangeUpdateEditTask} type="text" name="task" value={localDescription} placeholder="Edit task..." />
            <button onClick={onClickEditTask} data-task-id={id}>Edit Task</button>
        </>
    )
}