import { useRef, useEffect } from "react";


interface ITodofiels {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    handleAddTodo: () => void;
    value: string;
}
const FieldInput: React.FC<ITodofiels> = ({ handleChange, handleAddTodo, value }:ITodofiels) => {

    const InputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (InputRef.current) InputRef.current.focus();
    }, [])
    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') handleAddTodo();
    }

  return (
    <div>
        <input title='titleTodo' value={value} type="text" onKeyDown={handleKeyDown} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)} ref={InputRef} />
        <button type='button' onClick={() => handleAddTodo()}>Add todo</button>
    </div>
  )
}

export default FieldInput
