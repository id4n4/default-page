import { Button, Card, Divider, Metric, Text, TextInput } from '@tremor/react'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }
  return (
    <Card className='max-w-[30rem]'>
      <header>
        <Metric className='text-center uppercase'>Registro</Metric>
      </header>
      <br />
      <form className='m-auto w-3/4'>
        <section className='space-y-3'>
          <div>
            <Text>Nombre:</Text>
            <TextInput type='text' placeholder='' />
          </div>
          <div>
            <Text>Apellido:</Text>
            <TextInput type='text' placeholder='' />
          </div>
          <div>
            <Text>Email:</Text>
            <TextInput type='email' placeholder='' />
          </div>
          <div>
            <Text>Contraseña:</Text>
            <TextInput type='password' placeholder='' />
          </div>
          <div>
            <Text>Confirmar contraseña:</Text>
            <TextInput type='password' placeholder='' />
          </div>
          <div className='flex gap-1 items-center'>
            <input aria-describedby='terms' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-customDark-primary' required='' />
            <Text>Acepto los términos y condiciones</Text>
          </div>
        </section>
        <div className='mt-3 w-full'>
          <Button type='submit' className='w-full rounded-xl'>Crear Cuenta</Button>
        </div>
      </form>
      <Divider />
      <footer className='flex items-center justify-center gap-1'>
        <Text>¿Ya tienes una cuenta?</Text>
        <Button variant='light' onClick={handleLogin}>Inicia Sesión</Button>
      </footer>
    </Card>
  )
}
