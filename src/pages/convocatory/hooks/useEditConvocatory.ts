import { ConvocatoryData } from '@/mocks/convocatory'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const initialValues = {
  title: '',
  description: '',
  startDate: '',
  finishDate: '',
  entityName: '',
  active: false
}

export const useEditConvocatory = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialValues
  })
  const getDataSource = () => {
    const convocatory = ConvocatoryData.find(
      (convocatory) => convocatory.id === Number(id)
    )
    reset(convocatory)
  }

  const onSubmit = () => {
    id === undefined ? console.log('create') : console.log('edit')
    navigate(-1)
  }

  useEffect(() => {
    getDataSource()
  }, [id])

  return {
    id,
    formStates: {
      control,
      handleSubmit,
      errors
    },
    handlers: {
      onSubmit
    }
  }
}
