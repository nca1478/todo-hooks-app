export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter((todo) => todo.id !== action.payload)

    case 'toogle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )

    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
      )

    case 'update':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              desc: action.payload.desc,
              isEdit: !todo.isEdit
            }
          : todo
      )

    case 'toogle-old':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo
        }
      })

    default:
      return state
  }
}
