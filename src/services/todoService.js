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

const getTodoDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}


export {
  create, getAll, getTodoDetail
}