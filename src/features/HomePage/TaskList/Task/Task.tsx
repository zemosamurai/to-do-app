import React, {ChangeEvent} from 'react';
import {TaskStatuses} from "../../../../api/todo-api";
import {useAppDispatch} from "../../../../store/hooks";
import {deleteTaskTC, updateTaskTC} from "./taskSlice";
import {TaskGridItem} from "../TaskList.styles";
import {FlexContainer, Text, Title3} from "../../../../assets/styles/components";
import {StatusIndicator} from "./Task.styles";


type TaskPropsType = {
    todoId: string
    taskId: string
    status: TaskStatuses
    title: string
}


export const Task = ({taskId, status, todoId, title}: TaskPropsType) => {
    const dispatch = useAppDispatch()

    const removeTask = () => dispatch(deleteTaskTC({todoId, taskId}))

    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked
        const status = checked ? TaskStatuses.Completed : TaskStatuses.New
        dispatch(updateTaskTC({todoId, taskId, domainModel: {status}}))
    }

    return (
        <>
            <TaskGridItem paddingLeft={'20px'}>
                <FlexContainer>
                    <StatusIndicator/>
                    <FlexContainer direction={'column'} >
                        <Title3>{title}</Title3>
                        <Text>Description from task</Text>
                    </FlexContainer>
                </FlexContainer>
            </TaskGridItem>

            <TaskGridItem>
                <input
                    type="checkbox"
                    checked={status === TaskStatuses.Completed}
                    onChange={onChangeTaskStatus}
                />
            </TaskGridItem>

            <TaskGridItem>
                <Text>may1 - day2</Text>
            </TaskGridItem>

            <TaskGridItem>
                <Text>Medium</Text>
            </TaskGridItem>

            <TaskGridItem>
                <button onClick={removeTask}>x</button>
            </TaskGridItem>
        </>
    );
};

