import { Button, Card, Divider, Metric, Text, TextInput } from '@tremor/react'
import { useSignUp } from './hooks/useSignUp'
import { Controller } from 'react-hook-form'
import { ModalTerms } from './components/ModalTerms'
import { motion } from 'framer-motion'

export const SignUp = () => {
  const { actions, formStates, modalTerms } = useSignUp()
  const { onSubmit, handleLogin, acceptTerms, hideModalTerms, showModalTerms } =
    actions
  const { control, handleSubmit, errors } = formStates
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-w-[30rem]"
    >
      <Card>
        <header>
          <Metric className="text-center uppercase">Registro</Metric>
        </header>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-3/4">
          <section className="space-y-3">
            <div>
              <Text>Nombre:</Text>
              <Controller
                control={control}
                name="nombres"
                rules={{ required: 'El nombre es requerido' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type="text"
                    value={value}
                    placeholder=""
                    error={!!errors?.nombres}
                    onValueChange={onChange}
                    errorMessage={errors?.nombres?.message}
                  />
                )}
              />
            </div>

            <div>
              <Text>Apellido:</Text>
              <Controller
                control={control}
                name="apellidos"
                rules={{ required: 'El apellido es requerido' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type="text"
                    value={value}
                    placeholder=""
                    error={!!errors?.apellidos}
                    onValueChange={onChange}
                    errorMessage={errors?.apellidos?.message}
                  />
                )}
              />
            </div>

            <div>
              <Text>Email:</Text>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'El email es requerido',
                  pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type="email"
                    value={value}
                    placeholder=""
                    error={!!errors?.email}
                    onValueChange={onChange}
                    errorMessage={errors?.email?.message}
                  />
                )}
              />
            </div>

            <div>
              <Text>Contraseña:</Text>
              <Controller
                control={control}
                name="password"
                rules={{ required: 'La contraseña es requerida' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type="password"
                    value={value}
                    placeholder=""
                    error={!!errors?.password}
                    onValueChange={onChange}
                    errorMessage={errors?.password?.message}
                  />
                )}
              />
            </div>

            <div>
              <Text>Confirmar contraseña:</Text>
              <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: 'La contraseña es requerida' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    type="password"
                    value={value}
                    placeholder=""
                    error={!!errors?.confirmPassword}
                    onValueChange={onChange}
                    errorMessage={errors?.confirmPassword?.message}
                  />
                )}
              />
            </div>

            <div className="flex flex-wrap gap-1 items-center">
              <Controller
                control={control}
                name="terms"
                rules={{ required: 'Requerido' }}
                render={({ field: { value, onChange } }) => (
                  <input
                    aria-describedby="terms"
                    type="checkbox"
                    checked={value}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-0"
                    onChange={onChange}
                  />
                )}
              />
              <Text>Acepto los </Text>
              <Button type="button" variant="light" onClick={showModalTerms}>
                términos y condiciones
              </Button>
              {!!errors?.terms && (
                <Text id="terms" className="text-rose-500">
                  ({errors?.terms?.message})
                </Text>
              )}
            </div>
          </section>
          <div className="mt-3 w-full">
            <Button type="submit" className="w-full rounded-xl">
              Crear Cuenta
            </Button>
          </div>
        </form>
        <Divider />
        <footer className="flex items-center justify-center gap-1">
          <Text>¿Ya tienes una cuenta?</Text>
          <Button variant="light" onClick={handleLogin}>
            Inicia Sesión
          </Button>
        </footer>
      </Card>
      <ModalTerms
        acceptTerms={acceptTerms}
        hideModalTerms={hideModalTerms}
        modalTerms={modalTerms}
      />
    </motion.div>
  )
}
