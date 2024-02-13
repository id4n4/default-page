import { Button, Card, DatePicker, Text, TextInput, Textarea, Title } from '@tremor/react'
import { IoArrowBackOutline, IoSave } from 'react-icons/io5'
import { useEditConvocatory } from '../hooks/useEditConvocatory'
import { Controller } from 'react-hook-form'
import { es } from 'date-fns/locale'

export const EditConvocatory = () => {
  const { handlers, formStates, id } = useEditConvocatory()
  const { handleBack, onSubmit } = handlers
  const { control, handleSubmit, errors } = formStates
  return (
    <section >
      <Button
        variant="secondary"
        color="gray"
        onClick={handleBack}
        icon={IoArrowBackOutline}
        className='ml-12 md:ml-0'
      >
        Atrás
      </Button>
      <Card className="mt-4 mx-auto max-w-[800px]">
        <Title>{id ? 'Editar' : 'Crear'} Convocatoria</Title>
        <section>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <div>
              <Text>Nombre:</Text>
              <Controller
                control={control}
                name="title"
                rules={{ required: 'Este campo es requerido' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholder=""
                    value={value}
                    onValueChange={onChange}
                    error={!!errors?.title}
                    errorMessage={errors.title?.message}
                  />
                )}
              />
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-3'>
              <div>
                <Text>Nombre de la entidad</Text>
                <Controller
                  control={control}
                  name="entityName"
                  rules={{ required: 'Este campo es requerido' }}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      placeholder=""
                      value={value}
                      onValueChange={onChange}
                      error={!!errors?.entityName}
                      errorMessage={errors.entityName?.message}
                    />
                  )}
                />
              </div>
              <div>
                <Text>Fecha de inicio</Text>
                <Controller
                  control={control}
                  name="startDate"
                  rules={{ required: 'Este campo es requerido' }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      placeholder=""
                      value={value ? new Date(value) : undefined}
                      onValueChange={onChange}
                      locale={es}
                    />
                  )}
                />
                {!!errors?.startDate && (
                  <Text color="rose">{errors?.startDate?.message}</Text>
                )}
              </div>
              <div>
                <Text>Fecha de fin</Text>
                <Controller
                  control={control}
                  name="finishDate"
                  rules={{ required: 'Este campo es requerido' }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      placeholder=""
                      value={value ? new Date(value) : undefined}
                      onValueChange={onChange}
                      locale={es}
                    />
                  )}
                />
                {!!errors?.finishDate && (
                  <Text color="rose">{errors?.finishDate?.message}</Text>
                )}
              </div>
            </div>
            <div>
              <Text>Descripción</Text>
              <Controller
                control={control}
                name="description"
                rules={{ required: 'Este campo es requerido' }}
                render={({ field: { value, onChange } }) => (
                  <Textarea
                    placeholder=""
                    value={value}
                    rows={5}
                    onValueChange={onChange}
                    error={!!errors?.description}
                    errorMessage={errors.description?.message}
                  />
                )}
              />
            </div>
            <footer className='flex justify-center'>
              <Button icon={IoSave} type="submit">
                Guardar cambios
              </Button>
            </footer>
          </form>
        </section>
      </Card>
    </section>
  )
}
