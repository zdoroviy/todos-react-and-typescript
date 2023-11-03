import { useState, useEffect, useRef } from 'react';
import FieldInput from './FieldInput'

import { ITodo } from '../types/data';
import TodoList from './TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState('');
  const InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
        if (InputRef.current) InputRef.current.focus();
  }, [])
  const handleAddTodo = ():void => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
        setValue('');
        }
  }
  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e):void => {
        setValue(e.target.value)
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete
        }
      })
    )
  }
const removeTodo = (id: number): void => {
  setTodos(
    todos.filter(todo => todo.id !==id)
    )
  }
  return (
    <div>
      <FieldInput handleChange={handleChange} handleAddTodo={handleAddTodo} value={value} />
      <TodoList items={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  )
}

export default App
