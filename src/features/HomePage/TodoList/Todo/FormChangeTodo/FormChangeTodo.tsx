import {Button, FlexContainer} from "../../../../../styles/components";
import React, {ChangeEvent, useState} from "react";
import {useAppDispatch} from "../../../../../store/hooks";
import {changeTodoTitleTC, removeTodoTC} from "../todoSlice";
import {theme} from "../../../../../styles/theme";
import {FormTodoWrapper, SaveButton, TodoInput, TodoTitle} from "./styles/styles";

type FormChangeTodoPropsType = {
    todoId: string
    title: string
    setActive: (modalActive: boolean) => void
}

export const FormChangeTodo = ({todoId, title, setActive}: FormChangeTodoPropsType) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const removeTodo = () => {
        dispatch(removeTodoTC(todoId))
    }

    const changeTodoTitle = () => {
        dispatch(changeTodoTitleTC({todoId, title: value}))
        setActive(false)
    }

    return <FormTodoWrapper direction={'column'} justify={'center'}>
        <TodoTitle size={'20px'} color={theme.colors.fontPrimary}>Edit Project</TodoTitle>

        <FlexContainer columnGap={'10px'} align={'center'}>
            <TodoInput value={value} onChange={onChangeHandler}/>
            <SaveButton bg={theme.colors.secondary} onClick={changeTodoTitle}>Save</SaveButton>
        </FlexContainer>
        <Button bg={theme.colors.danger} onClick={removeTodo}>Delete Todo</Button>
    </FormTodoWrapper>
}