import React from 'react'
import {Container} from "./style";
import { TodoReducerProps } from '../../App/useTodoListReducer'
import Todo from "../Todo";
import {Margin} from "../shared/spacing";

const TodoList: React.FC<TodoReducerProps> = ({dispatch, todos}) => {
    return (
        <Container>
            <Margin bottom={"40px"} />
            {todos && todos.map(todo => (
                <>
                    <Todo 
                        todo={todo}
                        dispatch={dispatch} 
                    />
                    <Margin bottom={"20px"} />
                </>
            ))}
        </Container>
    )
}

export default TodoList
