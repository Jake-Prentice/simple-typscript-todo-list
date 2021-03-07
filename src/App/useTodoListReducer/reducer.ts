import {ACTIONS, ACTIONTYPES} from "./actions";

export type Todo = {
    id: string, 
    content: string, 
    isCompleted: boolean
}

export type Todos = Array<Todo>;

export const initialStates: Todos = [] 


const reducer = (state: Todos, action: ACTIONTYPES) => {
    switch(action.type) {
        case ACTIONS.ADD:
            return [
                ...state,
                {
                    id: action.payload.id,
                    content: action.payload.content,
                    isCompleted: false
                }
            ]
        case ACTIONS.REMOVE:
            return state.filter(todo => 
                todo.id !== action.payload
            )
        case ACTIONS.TOGGLE_TODO:
            return [...state.map(todo => todo.id === action.payload 
                ? {...todo, isCompleted: !todo.isCompleted}
                : todo 
            )]
        default:
            throw new Error();
    }
}


export default reducer;