import {createAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatchType} from "../../../../store/store";
import {todoApi, TodolistType} from "../../../../api/todo-api";
import {RequestStatusType, setLoading} from "../../../../app/appSlice";
import axios from "axios";
import {handleServerAppError, handleServerNetworkError} from "../../../../utils/error-utils";


const initialState: InitialStateType = {
    todos: [],
    isSelectTodoId: ''
}


export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<TodolistType[]>) => {
            state.todos = action.payload.map(el => ({...el, filter: 'all', entityStatus: 'idle'}))
        },
        changeTodoFilter: (state, action: PayloadAction<ChangeTodoFilterType>) => {
            const todo = state.todos.find(el => el.id === action.payload.todoId)
            if (todo) todo.filter = action.payload.filter
        },
        changeTodoTitle: (state, action: PayloadAction<ChangeTodoTitleType>) => {
            const todo = state.todos.find(el => el.id === action.payload.todoId)
            if (todo) todo.title = action.payload.title
        },
        setTodoEntityStatus: (state, action: PayloadAction<{ todoId: string, entityStatus: RequestStatusType }>) => {
            state.todos.forEach(el => el.id === action.payload.todoId
                ? el.entityStatus = action.payload.entityStatus : el)
        },
        setIsSelectTodoId: (state, action: PayloadAction<string>) => {
            state.isSelectTodoId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeTodolistAC, (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload.todoId)
        })
        builder.addCase(addTodolistAC, (state, action) => {
            const newTodo: TodoDomainType = {...action.payload.todo, filter: 'all', entityStatus: 'idle'}
            state.todos.unshift(newTodo)
        })
    }
})


// actions
export const removeTodolistAC = createAction('REMOVE-TODOLIST', (todoId: string) => ({
    payload: {todoId}
}))
export const addTodolistAC = createAction('ADD-TODOLIST', (todo: TodolistType) => ({
    payload: {todo}
}))


// asyncThunk
export const fetchTodosTC = createAsyncThunk<unknown, undefined, AsyncThunkConfig>(
    'todolist/fetchTodolistsTC',
    async (_, {dispatch}) => {
        dispatch(setLoading({status: 'loading'}))
        try {
            const res = await todoApi.getTodolists()
            dispatch(setTodos(res.data))
            // res.data.forEach((el) => {
            //     dispatch(fetchTasksTC(el.id))
            // })
            dispatch(setLoading({status: 'succeeded'}))
        } catch (e) {
            if (axios.isAxiosError<{ error: string }>(e)) {
                const error = e.response?.data ? e.response.data.error : e.message
                handleServerNetworkError(dispatch, error)
            }
        }
    })

export const addTodoTC = createAsyncThunk<unknown, string, AsyncThunkConfig>(
    'todolist/addTodolistTC',
    async (title, {dispatch}) => {
        dispatch(setLoading({status: 'loading'}))
        try {
            const res = await todoApi.createTodolist(title)
            if (res.data.resultCode === 0) {
                dispatch(addTodolistAC(res.data.data.item))
                dispatch(setLoading({status: 'succeeded'}))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        } catch (e) {
            if (axios.isAxiosError<{ error: string }>(e)) {
                let error = e.response?.data ? e.response.data.error : e.message
                handleServerNetworkError(dispatch, error)
            }
        }
    })

export const removeTodoTC = createAsyncThunk<unknown, string, AsyncThunkConfig>(
    'todolist/removeTodolistTC',
    async (todoId, {dispatch}) => {
        dispatch(setLoading({status: 'loading'}))
        dispatch(setTodoEntityStatus({todoId, entityStatus: 'loading'}))
        try {
            const res = await todoApi.deleteTodolist(todoId)
            if (res.data.resultCode === 0) {
                dispatch(removeTodolistAC(todoId))
                dispatch(setLoading({status: 'succeeded'}))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        } catch (e) {
            if (axios.isAxiosError<{ error: string }>(e)) {
                const error = e.response?.data ? e.response.data.error : e.message
                handleServerNetworkError(dispatch, error)
                dispatch(setTodoEntityStatus({todoId, entityStatus: 'failed'}))
            }
        }
    })

export const changeTodoTitleTC = createAsyncThunk<unknown, { todoId: string, title: string }, AsyncThunkConfig>(
    'todolist/changeTodolistTitleTC',
    async (payload, {dispatch}) => {
        dispatch(setLoading({status: 'loading'}))
        try {
            const res = await todoApi.updateTodolist(payload.todoId, payload.title)
            if (res.data.resultCode === 0) {
                dispatch(changeTodoTitle({todoId: payload.todoId, title: payload.title}))
                dispatch(setLoading({status: 'succeeded'}))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        } catch (e) {
            if (axios.isAxiosError<{ error: string }>(e)) {
                const error = e.response?.data ? e.response.data.error : e.message
                handleServerNetworkError(dispatch, error)
            }
        }
    })


//types
export type FilterValueType = 'all' | 'active' | 'completed'
export type TodoDomainType = TodolistType & {
    filter: FilterValueType
    entityStatus: RequestStatusType
}
type InitialStateType = {
    todos: TodoDomainType[]
    isSelectTodoId: string
}
type ChangeTodoFilterType = {
    todoId: string
    filter: FilterValueType
}
type ChangeTodoTitleType = {
    todoId: string,
    title: string
}
type AsyncThunkConfig = { dispatch: AppDispatchType }

export const {changeTodoTitle, setTodos, setTodoEntityStatus, changeTodoFilter, setIsSelectTodoId} = todoSlice.actions
