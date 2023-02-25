import styled from "styled-components";
import {Button, FlexContainer} from "../../../../styles/components";
import {useAppSelector} from "../../../../store/hooks";
import {TodoDomainType} from "../Todo/todoSlice";
import React from "react";

const FormTodoWrapper = styled(FlexContainer)`
  width: 30vw;
  height: 30vh;
`

const TodoInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin: 0 auto;
`


type FormChangeTodoPropsType = {
    todoId: string
    removeTodo: () => void
}

export const FormChangeTodo = ({todoId, removeTodo}: FormChangeTodoPropsType) => {
    const todos = useAppSelector<TodoDomainType[]>(state => state.todo.todos)
    const todo = todos.find(el => el.id === todoId)



    return <FormTodoWrapper direction={'column'} justify={'space-between'}>
        <div>
            <TodoInput value={todo?.title} />
        </div>
        <FlexContainer columnGap={'10px'} justify={'flex-end'}>
            <Button>save Todo</Button>
            <Button onClick={removeTodo}>Delete Todo</Button>
        </FlexContainer>
    </FormTodoWrapper>
}