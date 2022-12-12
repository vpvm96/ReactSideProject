const CREATE_TODO = "CREATE_TODO"
const UPDATE_TODO = "UPDATE_TODO"
const DELETE_TODO = "DELETE_TODO"

export const todoCreate = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  }
}

export const todoUpdate = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  }
}

export const todoDelete = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

const initialState = [
  {
    id: "6af6b39b-0742-460a-812a-c216aa73d452",
    title: "테스트 타이틀임",
    content: "테스트 내용임",
    isDone: false,
  },
]

const todolist = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.value.title,
          content: action.payload.value.content,
          isDone: false,
        },
      ]
    }
    case UPDATE_TODO: {
      return (state = state.map((state) =>
        state.id === action.payload.id ? action.payload : state
      ))
    }
    case DELETE_TODO: {
      return state.filter((state) => state.id !== action.payload)
    }
    default:
      return state
  }
}

export default todolist
