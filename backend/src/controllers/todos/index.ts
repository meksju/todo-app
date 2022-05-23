import { Response, Request } from "express"
import { TodoItem } from "../../types/todo"
import Todo from "../../models/todo"

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: TodoItem[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<TodoItem, "text" | "createdAt">

        const todo: TodoItem = new Todo({
            text: body.text,
            createdAt: body.createdAt,
        })

        const newTodo: TodoItem = await todo.save()
        const allTodos: TodoItem[] = await Todo.find()
        res
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: TodoItem | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos: TodoItem[] = await Todo.find()
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}

export { getTodos, addTodo, deleteTodo }