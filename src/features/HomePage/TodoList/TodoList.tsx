import React from 'react';
import {useAppSelector} from "../../../store/hooks";
import {TodoDomainType} from "./Todo/todoSlice";
import {Todo} from "./Todo/Todo";
import {TodoGridContainer, TodoGridItem, TodoWrapper} from "./TodoList.styles";
import {Text} from "../../../assets/styles/components";


export const TodoList = () => {
    const todos = useAppSelector<TodoDomainType[]>(state => state.todo.todos)

    const TitleColumnJSX = <>
        <TodoGridItem bg>
            <TodoWrapper align={'center'} justify={'space-between'}>
                <Text>
                    Project Name
                </Text>
            </TodoWrapper>
        </TodoGridItem>
    </>

    return (
        <TodoGridContainer>
            {TitleColumnJSX}
            {todos.map(el => {
                return (
                    <Todo
                        key={el.id}
                        todoId={el.id}
                        title={el.title}
                    />
                )
            })}
        </TodoGridContainer>
    )
}
