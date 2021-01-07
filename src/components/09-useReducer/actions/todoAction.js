export const handleUpdate = (data, dispatch) => {
  dispatch({
    type: 'update',
    payload: data
  })
}

export const handleDelete = (todoId, dispatch) => {
  dispatch({
    type: 'delete',
    payload: todoId
  })
}

export const handleToggle = (todoId, dispatch) => {
  dispatch({
    type: 'toogle',
    payload: todoId
  })
}

export const handleEdit = (todoId, dispatch) => {
  dispatch({
    type: 'edit',
    payload: todoId
  })
}
