import React, { useEffect, useRef, useState } from "react";

const AddTodo = (props) => {
 
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    owner: props.user.profile,
  })

  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    
    setFormData({ ...formData, [evt.target.name]: evt.target.value}, )
  }

  const handleSubmit = evt => {
  
    evt.preventDefault()
    props.handleAddTodo(formData)
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  return (
    <>
    <h1>TO-DO-LIST 📝</h1>
    <h2> Add To-Do</h2>
    <form  autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
      <label>
        Title:
        <input 
          type="text" 
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
          required 
        />
      </label>
      <label>
        <input 
          type="text" 
          name="content"
          id="content-input"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input 
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <button 
        type="submit"
        className="btn btn-primary btn-fluid"
        disabled={!validForm}
      >
        Add To-Do
      </button>
    </form>
    
    
    </>
  )
}

export default AddTodo