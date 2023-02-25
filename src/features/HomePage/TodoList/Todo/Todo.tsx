import React from 'react';
import {setIsSelectTodoId} from "./todoSlice";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {fetchTasksTC} from "../../TaskList/Task/taskSlice";
import { TodoGridItem, TodoWrapper} from "../styles/TodoList.styles";
import {Title2} from "../../../../styles/components";
import {DotMenu} from "../../../../components/DotMenu/DotMenu";


type TodolistPropsType = {
    todoId: string
    title: string
    setModalActive: (modalActive: boolean) => void
}

export const Todo = ({todoId, title, setModalActive}: TodolistPropsType) => {
    const dispatch = useAppDispatch()
    const isSelectTodoId = useAppSelector<string | null>(state => state.todo.isSelectTodoId)

    console.log(isSelectTodoId)

    const openModal = () => {
        setModalActive(true)
    }
    const selectTodo = () => {
        // dispatch once for selected Todo
        if (isSelectTodoId !== todoId) {
            dispatch(fetchTasksTC(todoId))
            dispatch(setIsSelectTodoId(todoId))
        }
    }

    return (
        <TodoGridItem onClick={selectTodo} bg={isSelectTodoId === todoId}>
            <TodoWrapper align={'center'} justify={'space-between'}>
                <Title2>{title}</Title2>
                {isSelectTodoId === todoId && <DotMenu openModal={openModal}/>}
            </TodoWrapper>
        </TodoGridItem>
    );
}



