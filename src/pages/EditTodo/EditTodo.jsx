import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const EditTodo = props => {

  const location = useLocation()
  const [formData, setFormData] = useState(location.state.todo)
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateTodo(formData)
  }
  
  return (
        <div>
            <h1>Edit Todo</h1>
            <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
                <div>
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
          value={formData.data}
          onChange={handleChange}
          required
        />
      </label>

      <button 
        type="submit"
        className="btn btn-primary btn-fluid"
        disabled={!validForm}
      >
        Save To-Do
      </button>
                </div>
                <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
            </form>
        </div>
    )
}


export default EditTodo