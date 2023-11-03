import React from "react";
import { ITodo } from '../types/data';
import TodoItem from "./TodoItem";

interface ITodoList {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
    const { items, toggleTodo, removeTodo } = props;
    return (
        <div className="">
           {items.map(todo => <TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo} />)}
        </div>
        )
}
export default TodoList