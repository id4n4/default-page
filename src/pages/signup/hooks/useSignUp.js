import { useForm } from 'react-hook-form'
import { rolAdminTornado } from '../../../mocks/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../context/authProvider'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const navigate = useNavigate()
  const [modalTerms, setModalTerms] = useState(false)
  const { signUp } = useContext(AuthContext)
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      nombres: '',
      apellidos: '',
      // userType: 1,
      rolId: rolAdminTornado.value,
      email: '',
      password: '',
      confirmPassword: '',
      nit: Math.random().toString(36).substring(7),
      terms: false
    }
  })
  const onSubmit = async (data) => {
    console.log(data)
    const { confirmPassword, terms, ...rest } = data
    console.log(rest)
    signUp(rest)
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
