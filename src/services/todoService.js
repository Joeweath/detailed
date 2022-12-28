import { json } from "react-router-dom";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/todos`;

const create = async (todo) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todo)
  })
  return res.json();
}

const getAll = async () => {
  try{
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const getTodoDetail = async (todoId) => {
  try {
    const res = await fetch(`${BASE_URL}/${todoId}`);
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

const todoUpdate = async (todo) => {
  try {
    const res = await fetch(`${BASE_URL}/${todo._Id}`,
    {
      method: "PUT",
      headers: {'content-type': 'application'/json},
      body: JSON.stringify(todo)
    })
    return res.json();
  } catch (error){
    return error
  }
}


export {
  create, getAll, getTodoDetail, todoUpdate

}