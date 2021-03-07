import React from 'react'
import { TodoReducerProps } from '../../App/useTodoListReducer';
import { removeTodo, toggleTodo } from '../../App/useTodoListReducer/actions';
import { Todo as TodoType } from '../../App/useTodoListReducer/reducer';
import { Margin } from '../shared/spacing';
import {Container, RemoveTodoButton} from "./style";

interface Props extends TodoReducerProps {
    todo: TodoType
}

const Todo: React.FC<Props> = ({todo, dispatch}) => {
    return (
        <Container 
            key={todo.id}
            isCompleted={todo.isCompleted}
            onClick={() => dispatch(toggleTodo(todo.id))}
        >
            {todo.content}
            <Margin auto/>
            <RemoveTodoButton onClick={() => dispatch(removeTodo(todo.id))}>-</RemoveTodoButton>
        </Container>
    )
}


export default Todo;
