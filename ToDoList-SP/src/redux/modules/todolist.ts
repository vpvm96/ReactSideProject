const CREATE_TODO = "CREATE_TODO" as const
const UPDATE_TODO = "UPDATE_TODO" as const
const DELETE_TODO = "DELETE_TODO" as const

export interface TodoTypes {
  id?: string
  title?: string
  content?: string
  isDone?: boolean
  value?: any
}

export const todoCreate = (payload: TodoTypes) => {
  return {
    type: CREATE_TODO,
    payload,
  }
}

export const todoUpdate = (payload: TodoTypes) => {
  return {
    type: UPDATE_TODO,
    payload,
  }
}

export const todoDelete = (payload: TodoTypes) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

type TodoAction =
  | ReturnType<typeof todoCreate>
  | ReturnType<typeof todoUpdate>
  | ReturnType<typeof todoDelete>

const initialState: TodoTypes[] = []

const todolist = (state = initialState, action: TodoAction) => {
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
      return (state = state.map((state: TodoTypes) =>
        state.id === action.payload.id ? action.payload : state
      ))
    }
    case DELETE_TODO: {
      return state.filter((state: TodoTypes) => state.id !== action.payload)
    }
    default:
      return state
  }
}

export default todolist
