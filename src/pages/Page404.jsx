import { Button } from '@tremor/react'
import { useNavigate } from 'react-router-dom'

export const Page404 = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <main>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8'>
        <div className='max-w-lg mx-auto space-y-3 text-center'>
          <h3 className='text-indigo-600 font-semibold'>
            404 Error
          </h3>
          <p className='text-gray-800 text-4xl font-semibold sm:text-5xl'>
            Page not found
          </p>
          <p className='text-gray-600'>
            Lo siento, la página que buscas no existe o ha sido borrada.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Button onClick={handleBack}>
              Go back
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
