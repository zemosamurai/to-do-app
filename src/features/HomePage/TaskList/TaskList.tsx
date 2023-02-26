import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {addTaskTC, TaskStateType} from "./Task/taskSlice";
import {Task} from "./Task/Task";
import {AddTask, TaskGridContainer} from "./styles/styles";
import {TaskTitleGridColumn} from "./TaskTitleGridColumn";
import {AddItemForm} from "../../../components/AddItemForm/AddItemForm";

export const TaskList = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector<TaskStateType>(state => state.task.tasks)
    const isSelectTodoId = useAppSelector<string>(state => state.todo.isSelectTodoId)
    let tasksFromTodo = tasks[isSelectTodoId]

    const addTask = (title: string) => {
        dispatch(addTaskTC({todoId: isSelectTodoId, title}))
    }

    const TasksItemJSX = tasksFromTodo && tasksFromTodo.map(el => {
        return (
            <Task
                key={el.id}
                task={el}
            />
        )
    })

    return (
        <>
            <TaskGridContainer>
                <TaskTitleGridColumn/>

                <AddTask justify={'center'} align={'center'}>
                    <AddItemForm title={'Task'} addItem={addTask} disabled={!isSelectTodoId}/>
                </AddTask>

                {TasksItemJSX}
            </TaskGridContainer>
        </>
    );
};





