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
  const res = await fetch(BASE_URL)
  return res.json
}


export {
  create, getAll
}