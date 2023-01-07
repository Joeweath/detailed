import React, { useEffect, useState } from "react";
import { getTodoDetail } from "../../services/todoService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const TodoCard = (props) => {
  const { id } = useParams()
  const [todo, setTodo] = useState()
  
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
            <p>{Date(todo.date).slice(0, 15)}</p>
        </div>
        ) : (
          <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse fa-2xl"></i>
        )
      }

<div className="card-footer">
        <Link
          className='btn btn-sm btn-warning'
          to='/edit'
          state={{todo}}
        >
          Edit
        </Link>
        <button
          onClick={() => props.handleDelete(todo._id)}
        >
          Delete
        </button>

      </div>
      


        
    </div>
  )
}

export default TodoCard