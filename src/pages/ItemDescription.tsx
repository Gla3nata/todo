import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { log } from "console"

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()
    console.log(id)
    useEffect (() => {
    })

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
        
    )
   
}