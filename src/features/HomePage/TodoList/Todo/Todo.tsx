import React from 'react';
import {setIsSelectTodoId} from "./todoSlice";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {fetchTasksTC} from "../../TaskList/Task/taskSlice";
import {TodoGridItem, TodoWrapper} from "../TodoList.styles";
import {Title2} from "../../../../assets/styles/components";
import {DotMenu} from "../../../../components/DotMenu/DotMenu";

type TodolistPropsType = {
    todoId: string
    title: string
}

export const Todo = ({todoId, title}: TodolistPropsType) => {
    const dispatch = useAppDispatch()
    const isSelectTodoId = useAppSelector<string | null>(state => state.todo.isSelectTodoId)

    const removeTodo = () => {

    }
    const selectTodo = () => {
        // dispatch once for selected Todo
        if (isSelectTodoId !== todoId) {
            dispatch(fetchTasksTC(todoId))
            dispatch(setIsSelectTodoId(todoId))
        }
    }

    return (
        <TodoGridItem onClick={selectTodo} borderRight bg={isSelectTodoId === todoId}>
            <TodoWrapper align={'center'} justify={'space-between'}>
                <Title2>{title}</Title2>
                {isSelectTodoId === todoId && <DotMenu onClickHandler={removeTodo}/>}
            </TodoWrapper>
        </TodoGridItem>
    );
}



