import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

export interface HookFormProps {
  title: string
  content: string
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
  } = useForm<HookFormProps>({ resolver: yupResolver(todoListResolver) })

  return {
    register,
    errors,
    reset,
    handleSubmit,
  }
}

export default useTodoForm