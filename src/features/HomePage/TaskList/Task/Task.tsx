import React, {ChangeEvent} from 'react';
import {TaskPriorities, TaskStatuses} from "../../../../api/todo-api";
import {useAppDispatch} from "../../../../store/hooks";
import {updateTaskTC} from "./taskSlice";
import {TaskGridItem} from "../styles/TaskList.styles";
import {FlexContainer, SuperText, Title3} from "../../../../styles/components";
import {PrioritiesEl, StatusIndicator, TaskWrapper} from "./styles/Task.styles";
import {DotMenu} from "../../../../components/DotMenu/DotMenu";


type TaskPropsType = {
    todoId: string
    taskId: string
    status: TaskStatuses
    title: string
    priority: TaskPriorities
    setModalActive: (modalActive: boolean) => void
}


export const Task = ({taskId, status, todoId, title, priority, setModalActive}: TaskPropsType) => {
    const dispatch = useAppDispatch()

    const openModal = () => {
        setModalActive(true)
        // dispatch(deleteTaskTC({todoId, taskId}))
    }

    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked
        const status = checked ? TaskStatuses.Completed : TaskStatuses.New
        dispatch(updateTaskTC({todoId, taskId, domainModel: {status}}))
    }

    const priorityContent = {
        [TaskPriorities.Low]: 'Low',
        [TaskPriorities.Medium]: 'Medium',
        [TaskPriorities.High]: 'High'
    }

    return (
        <>
            <TaskGridItem paddingLeft={'20px'}>
                <TaskWrapper>
                    <StatusIndicator status={status}/>
                    <FlexContainer direction={'column'}>
                        <Title3>{title}</Title3>
                        <SuperText>Description from task</SuperText>
                    </FlexContainer>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <input
                        type="checkbox"
                        checked={status === TaskStatuses.Completed}
                        onChange={onChangeTaskStatus}
                    />
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <SuperText>may1 - day2</SuperText>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <PrioritiesEl priority={priority}>
                        {priorityContent[priority]}
                    </PrioritiesEl>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <DotMenu openModal={openModal} rotate={90}/>
                </TaskWrapper>
            </TaskGridItem>
        </>
    );
};

