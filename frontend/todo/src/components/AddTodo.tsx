import React, {useEffect, useState} from 'react'
import {getTodos} from "../API";
import TodoItem from "./TodoItem";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


type Props = {
    saveTodo: (e: React.FormEvent, formData: TodoItem | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [textValue, setTextValue] = useState<string>("");
    const [todos, setTodos] = useState<TodoItem[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = (): void => {
        getTodos()
            .then(({data: {todos}}: TodoItem[] | any) => setTodos(todos))
            .catch((err: Error) => console.log(err))
    }

    const onTextChange = (e: any) => (setTextValue(e.target.value));
    let formData = {text: textValue};
    const [exists, setExists] = useState(false);
    useEffect(() =>{setExists(todos.some(i => i.text === textValue));}, [textValue]);
    return (
    <div className="Add">
            <div className="Add--text">
                  <TextField
                        id="text"
                        label="Add Todo"
                        value={textValue}
                        onChange={onTextChange}
                />
            </div>
            <div className="Add--button">
                <Button variant="outlined" size="large" disabled={exists || !textValue} startIcon={<AddIcon />}
                    onClick={(e) =>{
                        saveTodo(e,formData);
                        setTextValue ('');
                    }} >
                   Add TODO
                </Button>
            </div>
        </div>
    )
}

export default AddTodo