import { Button, Metric, Text, Title } from '@tremor/react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MainIcon } from '@/components/icons'

export const Home = () => {
  const navigate = useNavigate()
  const handleStart = () => {
    navigate('/convocatory')
  }
  return (
    <div className='flex flex-col md:justify-center items-center h-full'>
      <MainIcon />
      <Metric className='text-center font-bold'>Gestión Inteligente de proyectos</Metric>
      <section>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
          <img
            className='w-full '
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
            alt='dashboard image'
          />
          <div className='mt-8 flex flex-col gap-2'>
            <Title className='text-xl font-extrabold '>
              ¡Bienvenido a Gestión Inteligente de Proyectos!
            </Title>
            <Text>
              En GIP, nos dedicamos a ayudarte a convertir tus ideas en
              proyectos exitosos de forma autónoma. Sabemos que crear proyectos
              puede ser desafiante, especialmente si careces de experiencia o si
              te encuentras con obstáculos en el camino. Es por eso que estamos
              aquí para ofrecerte el apoyo y los recursos necesarios para que
              puedas alcanzar tus objetivos de manera eficaz y sin
              contratiempos.
            </Text>
            <Button
              onClick={handleStart}
              icon={AiOutlineArrowRight}
              iconPosition='right'
              className='self-end'
            >
              Comenzar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
