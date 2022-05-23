import { TodoItem } from "../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            required: true,
        },
    }
)

export default model<TodoItem>("Todo", todoSchema)