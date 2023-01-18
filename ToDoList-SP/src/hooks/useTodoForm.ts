import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

export interface TodoFormValue {
  title: string
  content: string
  errors: { title: { message: string }; content: { message: string } }
}

export const todoListResolver = yup
  .object({
    title: yup.string().required("제목좀..."),
    content: yup.string().required("내용좀..."),
  })
  .required()

const useTodoForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TodoFormValue>({ resolver: yupResolver(todoListResolver) })

  return {
    register,
    errors,
    reset,
    handleSubmit,
  }
}

export default useTodoForm
