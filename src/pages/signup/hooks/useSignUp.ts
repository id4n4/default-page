import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthProvider'
import { InitialStateSignup, type InfoSignUp } from '@/Interfaces'

export const useSignUp = () => {
  const navigate = useNavigate()
  const [modalTerms, setModalTerms] = useState(false)
  const context = useContext(AuthContext)
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: InitialStateSignup
  })
  const onSubmit = async (data: InfoSignUp) => {
    console.log(data)
    const { confirmPassword, terms, ...rest } = data
    console.log(rest)
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
