import React, {useState} from 'react';
import {useAppSelector} from "../../../store/hooks";
import {TaskStateType} from "./Task/taskSlice";
import {Task} from "./Task/Task";
import {TaskGridContainer} from "./styles/TaskList.styles";
import {TaskTitleGridColumn} from "./TaskTitleGridColumn";
import {Title1} from "../../../styles/components";
import {ModalTodo} from "../../../components/ModalTodo/ModalTodo";


export const TaskList = () => {
    const tasks = useAppSelector<TaskStateType>(state => state.task.tasks)
    const isSelectTodoId = useAppSelector<string>(state => state.todo.isSelectTodoId)
    const [modalActive, setModalActive] = useState(false)
    let tasksFromTodo = tasks[isSelectTodoId]

    const TasksJSX = tasksFromTodo && tasksFromTodo.map(el => {
        return (
            <Task
                key={el.id}
                todoId={el.todoListId}
                taskId={el.id}
                status={el.status}
                title={el.title}
                priority={el.priority}
                setModalActive={setModalActive}
            />
        )
    })

    return (
        <>
            <TaskGridContainer>
                <TaskTitleGridColumn/>
                {TasksJSX}
            </TaskGridContainer>

            <ModalTodo active={modalActive} setActive={setModalActive}>
                <Title1>Logo</Title1>
            </ModalTodo>
        </>
    );
};





