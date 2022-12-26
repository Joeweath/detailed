import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getTodoDetail } from "../../../services/todoService";


const TodoCard = (props) => {
  console.log(props)
  // const [todoDetails, setToDoDetails] = useState(null);
  // let location = useLocation();

  // useEffect(() => {
  //   getTodoDetail(location.state.todoDetails).then(todoData =>
  //     setToDoDetails(todoData)
  //     );
  // }, [location.state.todoDetails.id]
  // );
  
  return (
    <div className="todo-card">
      

        {/* <p>{todoDetails.title}</p>
        <p>{todoDetails.content}</p>
        <p>{todoDetails.date}</p> */}
    </div>
  )
}

export default TodoCard