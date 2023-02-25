import React, {useState} from 'react';
import {useAppSelector} from "../../../store/hooks";
import {TodoDomainType} from "./Todo/todoSlice";
import {Todo} from "./Todo/Todo";
import {TodoGridContainer, TodoGridItem, TodoWrapper} from "./styles/TodoList.styles";
import {SuperText} from "../../../styles/components";
import {ModalTodo} from "../../../components/ModalTodo/ModalTodo";
import {FormChangeTodo} from "./FormChangeTodo/FormChangeTodo";


export const TodoList = () => {
    const todos = useAppSelector<TodoDomainType[]>(state => state.todo.todos)
    const isSelectTodoId = useAppSelector<string>(state => state.todo.isSelectTodoId)
    const [modalActive, setModalActive] = useState(false)


    const removeTodo = () => {
        console.log(isSelectTodoId)
    }

    const TodosJSX = todos.map(el => {
        return (
            <Todo
                key={el.id}
                todoId={el.id}
                title={el.title}
                setModalActive={setModalActive}
            />
        )
    })

    return (
        <>
            <TodoGridContainer>
                <TodoGridItem bg borderRight={'none'}>
                    <TodoWrapper align={'center'} justify={'space-between'}>
                        <SuperText>
                            Project Name
                        </SuperText>
                    </TodoWrapper>
                </TodoGridItem>

                {TodosJSX}
            </TodoGridContainer>

            <ModalTodo active={modalActive} setActive={setModalActive}>
                <FormChangeTodo todoId={isSelectTodoId} removeTodo={removeTodo}/>
            </ModalTodo>
        </>
    )
}


