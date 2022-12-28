import React, { useEffect, useState } from "react";
import { getTodoDetail } from "../../../services/todoService";
import { useParams,  useNavigate } from "react-router-dom";



const TodoCard = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [todo, setTodo] = useState()
  props = todo
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todoData = await getTodoDetail(id)
        setTodo(todoData)
      } catch (error) {
        throw error
      }
    }
    fetchTodo()
  }, [id])
  return (
    <div className="todo-card">
      {
        todo ? (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <p>{todo.date}</p>
        </div>
        ) : (
          <h3>Loading</h3>
        )
      }
      


        
    </div>
  )
}

export default TodoCard