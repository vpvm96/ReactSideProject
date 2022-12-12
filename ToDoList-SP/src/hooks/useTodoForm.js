import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const todoListResolver = yup
  .object({
    title: yup.string().required("제목 입력해라"),
    content: yup.string().required("내용 입력좀"),
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
