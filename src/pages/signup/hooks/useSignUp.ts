import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { type InfoSignUp } from '@/Interfaces/authProvider'
import { AuthContext } from '../../../context/AuthProvider'
import { InitialStateSignup } from '@/constants/authConstants'

export const useSignUp = () => {
  const navigate = useNavigate()
  const [modalTerms, setModalTerms] = useState(false)
  const context = useContext(AuthContext)
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: InitialStateSignup
  })
  const onSubmit = async (data: InfoSignUp) => {
    const { confirmPassword, terms, ...rest } = data
    context?.signUp(rest)
  }
  const handleLogin = () => {
    navigate('/login')
  }
  const showModalTerms = () => {
    setModalTerms(true)
  }
  const hideModalTerms = () => {
    setModalTerms(false)
  }
  const acceptTerms = () => {
    setValue('terms', true)
    setModalTerms(false)
  }
  return {
    modalTerms,
    actions: {
      onSubmit,
      handleLogin,
      showModalTerms,
      hideModalTerms,
      acceptTerms
    },
    formStates: {
      control,
      handleSubmit,
      errors
    }
  }
}
