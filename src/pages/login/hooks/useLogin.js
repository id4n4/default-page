import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/authProvider'
import { useForm } from 'react-hook-form'

export const useLogin = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleSignUp = () => {
    navigate('/signup')
  }
  const onSubmit = async ({ email, password }) => {
    login({ email, password })
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
