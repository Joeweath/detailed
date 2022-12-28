import { useState } from "react";
import { Link } from "react-router-dom";

const EditTodo = props => {
    return (
        <div>
            <h1>Edit Todo</h1>
            <form autoComplete="off">
                <div>
                <label>
        Title:
        <input 
          type="text" 
          name="title"
          id="title-input"
          required 
        />
      </label>
      <label>
        <input 
          type="text" 
          name="content"
          id="content-input"
          required
        />
      </label>
      <label>
        <input 
          type="date"
          name="date"
          required
        />
      </label>

      <button 
        type="submit"
        className="btn btn-primary btn-fluid"
        // disabled={!validForm}
      >
        Add To-Do
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