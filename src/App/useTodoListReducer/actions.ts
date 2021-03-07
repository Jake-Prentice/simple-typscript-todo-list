import { v4 as uuidv4 } from 'uuid';

export enum ACTIONS {
    ADD,
    REMOVE,
    TOGGLE_TODO
}

export type ACTIONTYPES = 
    |{ type: ACTIONS.REMOVE; payload: string}
    |{ type: ACTIONS.TOGGLE_TODO; payload: string } 
    | {type: ACTIONS.ADD, payload: {
        id: string;
        content: string;
    }}
        

export const addTodo = (content: string) : ACTIONTYPES => ({
    type: ACTIONS.ADD,
    payload: {
        id: uuidv4(),
        content
    }
})


export const removeTodo = (id: string) : ACTIONTYPES => ({
    type: ACTIONS.REMOVE,
    payload: id
})


export const toggleTodo = (id: string) : ACTIONTYPES => ({
    type: ACTIONS.TOGGLE_TODO,
    payload: id
})



