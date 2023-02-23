import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {meTC} from "../features/Login/authSlice";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../features/HomePage/HomePage";
import {Login} from "../features/Login/Login";

function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(meTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            {/*<CircularProgress/>*/}
        </div>
    }

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/404'} element={<h1>404 NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
