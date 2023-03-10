const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/todos`;




const create = async (todo) => {
  try{
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
    const data = await res.json()
    console.log(data)
      return data
  } catch (error) {
    
    throw error
  }
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



const todoUpdate = async (todo)  => {

  const res = await fetch(`${BASE_URL}/${todo}`,
    {
      method: "PUT",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(todo)
    });
  return await res.json(todo); 
}

const deleteTodo = async (todo) => {
  try{
    await fetch(`${BASE_URL}/${todo}`, {method: "DELETE",});
  } catch (error){
    throw error
  }
}




export {
  create, getAll, getTodoDetail, todoUpdate, deleteTodo

}