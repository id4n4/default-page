import { Title } from '@tremor/react'
import { Outlet } from 'react-router-dom'
import { MainIcon } from '../components/Icons/MainIcon'

export const LoginLayout = () => {
  return (
    <section className='w-screen h-screen bg-customDark-background flex flex-col justify-center items-center'>
      <MainIcon />
      <Title className='text-customDark-main'>
        Gestor Inteligente de Proyectos
      </Title>
      <br />
      <Outlet />
    </section>
  )
}
