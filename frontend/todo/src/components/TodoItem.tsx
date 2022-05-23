import React from "react"
import moment from 'moment';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = TodoProps & {
    deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
    return (
        <div className="Card">
            <div className="Card--details">
                <p className="Card--text">{todo.text}</p>
                <span className="Card--created">{(moment(todo.createdAt)).format('DD-MMM-YYYY HH:mm:ss')}</span>
            </div>
            <div className="Card--button">
                <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={() => deleteTodo(todo._id)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default Todo