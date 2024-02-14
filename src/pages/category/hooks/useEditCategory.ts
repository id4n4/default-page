import { categoryData } from '@/mocks/category'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const initialValues = {
  name: '',
  description: '',
  entityName: '',
  active: false,
  files: ''
}

export const useEditCategory = () => {
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

  const handleBack = () => {
    navigate(-1)
  }
  const getDataSource = () => {
    const categoryInfo = categoryData.find(
      (category) => category.id === Number(id)
    )
    reset(categoryInfo)
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
      handleBack,
      onSubmit
    }
  }
}
