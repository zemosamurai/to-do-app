import React, {ChangeEvent, useState} from 'react';
import {TaskPriorities, TaskStatuses} from "../../../../api/todo-api";
import {useAppDispatch} from "../../../../store/hooks";
import {TaskDomainType, updateTaskTC} from "./taskSlice";
import {TaskGridItem} from "../styles/styles";
import {FlexContainer, SuperText, Title3} from "../../../../styles/components";
import { PrioritiesEl, StatusIndicator, TaskWrapper} from "./styles/styles";
import {DotMenu} from "../../../../components/DotMenu/DotMenu";
import {ModalTodo} from "../../../../components/ModalTodo/ModalTodo";
import {FormChangeTask} from "./FormChangeTask/FormChangeTask";


export type TaskPropsType = {
    task: TaskDomainType
}


export const Task = ({task}: TaskPropsType) => {
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)

    const openModal = () => setModalActive(true)


    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked
        const status = checked ? TaskStatuses.Completed : TaskStatuses.New
        dispatch(updateTaskTC({todoId: task.todoListId, taskId: task.id, domainModel: {status}}))
    }

    const priorityContent = {
        [TaskPriorities.Low]: 'Low',
        [TaskPriorities.Medium]: 'Medium',
        [TaskPriorities.High]: 'High'
    }

    const formDate = (startDate: string | null, deadline: string | null) => {
        if (!!startDate && !!deadline) {
            const start = new Date(startDate)
            const end = new Date(deadline)
            const monthTitle = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
                'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

            const startDay = start.getDate().toString()
            const startMount = monthTitle[start.getMonth()]
            const deadlineDay = end.getDate().toString()
            const deadlineMount = monthTitle[end.getMonth()]


            return `${startMount} ${startDay} - ${deadlineMount} ${deadlineDay}`
        } else {
            return 'none date'
        }
    }

    return (
        <>
            <TaskGridItem paddingLeft={'20px'}>
                <TaskWrapper>
                    <StatusIndicator status={task.status}/>
                    <FlexContainer direction={'column'} rowGap={'5px'}>
                        <SuperText size={'16px'} weight={600} color={'#000'}>{task.title}</SuperText>
                        <SuperText>
                            {!!task.description ? task.description : 'Description from task'}
                        </SuperText>
                    </FlexContainer>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <input
                        type="checkbox"
                        checked={task.status === TaskStatuses.Completed}
                        onChange={onChangeTaskStatus}
                    />
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <SuperText>{formDate(task.startDate, task.deadline)}</SuperText>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <PrioritiesEl priority={task.priority}>
                        {priorityContent[task.priority]}
                    </PrioritiesEl>
                </TaskWrapper>
            </TaskGridItem>

            <TaskGridItem>
                <TaskWrapper>
                    <DotMenu openModal={openModal} rotate={90}/>
                </TaskWrapper>
            </TaskGridItem>

            {modalActive && <ModalTodo active={modalActive} setActive={setModalActive}>
                <FormChangeTask task={task} setModalActive={setModalActive}/>
            </ModalTodo>}
        </>
    );
};

