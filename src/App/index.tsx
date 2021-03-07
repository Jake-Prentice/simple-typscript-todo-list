import React from 'react';
import {
  GlobalStyles
} from "./style";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodoListReducer from "./useTodoListReducer";



function App() {
  
  const [todos, dispatch] = useTodoListReducer();

  return (
    <>
      <GlobalStyles />
      <TodoForm 
          dispatch={dispatch}
      />
      <TodoList 
          todos={todos}
          dispatch={dispatch}
      />
    </>
  );
}

export default App;
