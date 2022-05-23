import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
        .then(({data: {todos}}: TodoItem[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = (e: React.FormEvent, formData: TodoItem): void => {
    e.preventDefault()
    addTodo(formData)
        .then(({ status, data }) => {
          if (status !== 201) {
            throw new Error("Error! Todo not saved")
          }
          setTodos(data.todos)
        })
        .catch(err => console.log(err))
  }

    const handleDeleteTodo = (_id: string): void => {
        deleteTodo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error("Error! Todo not deleted")
                }
                setTodos(data.todos)
            })
            .catch(err => console.log(err))
    }
    return (
        <main className='App'>
            <AddTodo saveTodo={handleSaveTodo} />
            {todos.map((todo: TodoItem) => (
                <TodoItem
                    key={todo._id}
                    deleteTodo={handleDeleteTodo}
                    todo={todo}
                />
            ))}
        </main>
    )
}

export default App;
