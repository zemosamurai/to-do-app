import React, {useState} from 'react';
import {setIsSelectTodoId} from "./todoSlice";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {fetchTasksTC} from "../../TaskList/Task/taskSlice";
import {TodoGridItem, TodoWrapper} from "../styles/styles";
import {Title2} from "../../../../styles/components";
import {DotMenu} from "../../../../components/DotMenu/DotMenu";
import {ModalTodo} from "../../../../components/ModalTodo/ModalTodo";
import {FormChangeTodo} from "./FormChangeTodo/FormChangeTodo";


type TodolistPropsType = {
    todoId: string
    title: string
}

export const Todo = ({todoId, title}: TodolistPropsType) => {
    const dispatch = useAppDispatch()
    const isSelectTodoId = useAppSelector<string | null>(state => state.todo.isSelectTodoId)
    const [modalActive, setModalActive] = useState(false)

    const selectTodo = () => {
        // dispatch once for selected Todo
        if (isSelectTodoId !== todoId) {
            dispatch(fetchTasksTC(todoId))
            dispatch(setIsSelectTodoId(todoId))
        }
    }

    const openModal = () => setModalActive(true)


    return (
        <TodoGridItem onClick={selectTodo} bg={isSelectTodoId === todoId}>
            <TodoWrapper align={'center'} justify={'space-between'}>
                <Title2>{title}</Title2>

                {isSelectTodoId === todoId && <DotMenu openModal={openModal}/>}

                {modalActive && <ModalTodo active={modalActive} setActive={setModalActive}>
                    <FormChangeTodo todoId={todoId} title={title} setActive={setModalActive}/>
                </ModalTodo>}
            </TodoWrapper>
        </TodoGridItem>
    );
}



