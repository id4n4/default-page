import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/context/AuthProvider'
import { type InfoLogin } from '@/Interfaces'

export const useLogin = () => {
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleSignUp = () => {
    navigate('/signup')
  }
  const onSubmit = async ({ email, password }: InfoLogin) => {
    context?.login({ email, password })
  }
  return {
    actions: {
      onSubmit,
      handleSignUp
    },
    formStates: {
      control,
      handleSubmit,
      errors
    }
  }
}
