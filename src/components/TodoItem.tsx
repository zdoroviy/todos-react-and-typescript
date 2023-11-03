import { ITodo } from '../types/data';

interface ITodoItems extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem:React.FC<ITodoItems> = (props) => {
    const { id, title, complete, toggleTodo, removeTodo } = props;

    return (
        <div className="">
            <input title='toggle' type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            {title}
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
        )
}
export default TodoItem