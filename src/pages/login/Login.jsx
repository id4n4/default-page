import { Button, Card, Divider, Metric, Text, TextInput } from '@tremor/react'
import { useLogin } from './hooks/useLogin'
import { Controller } from 'react-hook-form'

export const Login = () => {
  const { actions, formStates } = useLogin()
  const { onSubmit, handleSignUp } = actions
  const { control, handleSubmit, errors } = formStates
  return (
    <>
      <Card className='max-w-[30rem] animate-fade animate-duration-150 animate-ease-in'>
        <header>
          <Metric className='text-center uppercase'>Inicio de Sesión</Metric>
        </header>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className='m-auto w-3/4'>
          <section className='space-y-3'>
            <div>
              <Text>Email:</Text>
              <Controller
                control={control}
                name='email'
                rules={{
                  required: 'El email es requerido',
                  pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type='email'
                    value={value}
                    onValueChange={onChange}
                    error={errors?.email}
                    errorMessage={errors?.email?.message}
                  />
                )}
              />
            </div>
            <div>
              <Text>Contraseña:</Text>
              <Controller
                control={control}
                name='password'
                rules={{ required: 'La contraseña es requerida' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type='password'
                    value={value}
                    onValueChange={onChange}
                    error={errors?.password}
                    errorMessage={errors?.password?.message}
                  />
                )}
              />
            </div>
          </section>
          <div className='mt-3 w-full'>
            <Button type='submit' className='w-full rounded-xl'>
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

    </>
  )
}
