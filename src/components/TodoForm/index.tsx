import React, {useState} from 'react'
import {Form, Input, AddButton} from "./style";
import { TodoReducerProps } from "../../App/useTodoListReducer";
import { addTodo } from '../../App/useTodoListReducer/actions';

const TodoForm: React.FC<TodoReducerProps> = ({dispatch}) => {

    const [value, setValue] = useState("");
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(value))
        setValue("");
    }

    return (
       <Form onSubmit={onSubmit}>
           <Input value={value} onChange={e => setValue(e.target.value)}/>
           <AddButton>+</AddButton>
       </Form>
    )
}

export default TodoForm
