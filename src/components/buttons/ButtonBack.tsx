import { Button } from '@tremor/react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const ButtonBack = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Button
      variant="secondary"
      color="gray"
      onClick={handleBack}
      icon={IoArrowBackOutline}
      className="ml-12 md:ml-0"
    >
      Atrás
    </Button>
  )
}
