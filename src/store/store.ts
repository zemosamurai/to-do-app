import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from "../features/Login/authSlice";
import {appSlice} from "../app/appSlice";
import {taskSlice} from "../features/HomePage/TaskList/Task/taskSlice";
import {todoSlice} from "../features/HomePage/TodoList/Todo/todoSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        task: taskSlice.reducer,
        app: appSlice.reducer,
        auth: authSlice.reducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store