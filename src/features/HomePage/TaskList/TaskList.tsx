import React from 'react';
import {useAppSelector} from "../../../store/hooks";
import {TaskStateType} from "./Task/taskSlice";
import {Task} from "./Task/Task";
import {TaskGridContainer, TaskGridItem} from "./TaskList.styles";
import {Text} from "../../../assets/styles/components";


export const TaskList = () => {
    const tasks = useAppSelector<TaskStateType>(state => state.task.tasks)
    const isSelectTodoId = useAppSelector<string>(state => state.todo.isSelectTodoId)
    let tasksFromTodo = tasks[isSelectTodoId]

    const TitleColumnJSX = <>
        <TaskGridItem bg={'#F6F8F9'} paddingLeft={'20px'}>
            <Text>
                Status
            </Text>
        </TaskGridItem>
        <TaskGridItem bg={'#F6F8F9'}>
            <Text>
                Task Progress
            </Text>
        </TaskGridItem>
        <TaskGridItem bg={'#F6F8F9'}>
            <Text>
                Dates
            </Text>
        </TaskGridItem>
        <TaskGridItem bg={'#F6F8F9'}>
            <Text>
                Priorities
            </Text>
        </TaskGridItem>
        <TaskGridItem bg={'#F6F8F9'}>
            <Text>
                Setting
            </Text>
        </TaskGridItem>
    </>

    return (
        <TaskGridContainer>
            {TitleColumnJSX}
            {tasksFromTodo && tasksFromTodo.map(el => {
                return (
                    <Task
                        key={el.id}
                        todoId={el.todoListId}
                        taskId={el.id}
                        status={el.status}
                        title={el.title}
                    />
                )
            })}
        </TaskGridContainer>
    );
};



