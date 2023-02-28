import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {addTodoTC, TodoDomainType} from "./Todo/todoSlice";
import {Todo} from "./Todo/Todo";
import {AddTodo, TodoGridContainer, TodoGridItem, TodoGridItemTitle, TodoWrapper} from "./styles/styles";
import {SuperText} from "../../../styles/components";
import {AddItemForm} from "../../../components/AddItemForm/AddItemForm";


export const TodoList = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector<TodoDomainType[]>(state => state.todo.todos)
    const addTodo = (title: string) => dispatch(addTodoTC(title))

    const TodosJSX = todos.map(el => {
        return (
            <Todo
                key={el.id}
                todoId={el.id}
                title={el.title}
            />
        )
    })

    return (
        <>
            <TodoGridContainer>
                <TodoGridItemTitle>
                    <TodoWrapper align={'center'} justify={'space-between'}>
                        <SuperText>Project Name</SuperText>
                    </TodoWrapper>
                </TodoGridItemTitle>

                <AddTodo justify={'center'} align={'center'}>
                    <AddItemForm title={'Project'} addItem={addTodo}/>
                </AddTodo>

                {TodosJSX}
            </TodoGridContainer>
        </>
    )
}


