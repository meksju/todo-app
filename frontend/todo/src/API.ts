import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        )
        return todos
    } catch (error: any) {
        throw new Error(error)
    }
}

export const addTodo = async (
    formData: TodoItem
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<TodoItem, "_id"> = {
            text: formData.text,
            createdAt: new Date(),
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo
        )
        return saveTodo
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch (error: any) {
        throw new Error(error)
    }
}