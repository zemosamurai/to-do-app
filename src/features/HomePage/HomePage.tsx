import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchTodosTC} from "./TodoList/Todo/todoSlice";
import {Navigate} from "react-router-dom";
import {TodoList} from "./TodoList/TodoList";
import {TaskList} from "./TaskList/TaskList";
import {FlexContainer} from "../../styles/components";

export const HomePage = () => {

    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        dispatch(fetchTodosTC())
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }


    return (
        <>
            <div style={{backgroundColor: 'red', height: '40px'}}></div>
            <FlexContainer>
                <TodoList/>
                <TaskList/>
            </FlexContainer>
        </>
    )
}
