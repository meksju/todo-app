interface TodoItem {
    _id: string
    text: string
    createdAt: Date
}

interface TodoProps {
    todo: TodoItem
}

type ApiDataType = {
    message: string
    todos: TodoItem[]
    todo?: TodoItem
}