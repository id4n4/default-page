import { Button, Card, Divider, Metric, Text, TextInput } from '@tremor/react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleHome = () => {
    navigate('/')
  }
  return (
    <Card className='max-w-[30rem]'>
      <header>
        <Metric className='text-center uppercase'>Inicio de Sesión</Metric>
      </header>
      <br />
      <form className='m-auto w-3/4'>
        <section className='space-y-3'>
          <div>
            <Text>Email:</Text>
            <TextInput type='email' />
          </div>
          <div>
            <Text>Contraseña:</Text>
            <TextInput type='password' />
          </div>
        </section>
        <div className='mt-3 w-full'>
          <Button
            type='button'
            className='w-full rounded-xl'
            onClick={handleHome}
          >
            Iniciar Sesión
          </Button>
        </div>
      </form>
      <Divider />
      <footer className='flex items-center justify-center gap-1'>
        <Text>¿No tienes cuenta?</Text>
        <Button variant='light' onClick={handleSignUp}>
          Regístrate
        </Button>
      </footer>
    </Card>
  )
}
