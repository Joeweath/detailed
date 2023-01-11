import React, { useEffect, useState } from "react";
import { getTodoDetail } from "../../services/todoService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './TodoCard.module.css'



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
    <div className={styles.container}>
    <div className={styles.todocontainer}>
      {
        todo ? (
        <div className={styles.cardcontent}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <p>Due Date: {Date(todo.date).slice(0, 15)}</p>
        </div>
        ) : (
          <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse fa-2xl"></i>
        )
      }

<div className={styles.buttons}>
        <Link
          class='btn btn-sm btn-warning fa-2xl'
          to='/edit'
          state={{todo}}
        >
          Edit
        </Link>
        <button
          onClick={() => props.handleDelete(todo._id)}
          class='btn btn-sm btn-danger fa-2xl'
        >
          Delete
        </button>

      </div>
      


        
    </div>
    </div>
  )
}

export default TodoCard