import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const todoListResolver = yup
  .object({
    title: yup.string().required("왜 안적음?"),
    content: yup.string().required("이유가 뭐임?"),
  })
  .required()

const useTodoForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(todoListResolver) })

  return {
    register,
    errors,
    reset,
    handleSubmit,
  }
}

export default useTodoForm
