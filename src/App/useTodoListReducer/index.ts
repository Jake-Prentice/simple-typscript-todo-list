import React, {useReducer, useEffect} from 'react'
import reducer, {initialStates, Todos} from "./reducer";
import {ACTIONTYPES} from "./actions";

const localStorageKey = "todos";

export interface TodoReducerProps {
    dispatch: React.Dispatch<ACTIONTYPES>;
    todos?: Todos;
}

const tryGetLocalStorage = (initial: Todos ) => {
    const persistedStorage = localStorage.getItem(localStorageKey);
    try {
        if (persistedStorage) return JSON.parse(persistedStorage);
    }catch(err) {}

    return initial
}


const useTodoListReducer = (): [Todos, React.Dispatch<ACTIONTYPES>] => {
    const initialState = tryGetLocalStorage(initialStates);
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state])

    return [state, dispatch]
}

export default useTodoListReducer
