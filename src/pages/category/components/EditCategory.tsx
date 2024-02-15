import { ButtonBack } from '@/components/buttons'
import { ViewLayout } from '@/layout'
import { Button, Card, Text, TextInput, Textarea, Title } from '@tremor/react'
import { useEditCategory } from '../hooks/useEditCategory'
import { Controller } from 'react-hook-form'
import { IoSave } from 'react-icons/io5'

export const EditCategory = () => {
  const { id, formStates, handlers } = useEditCategory()
  const { control, handleSubmit, errors } = formStates
  const { onSubmit } = handlers
  return (
    <ViewLayout>
      <ButtonBack />
      <Card className="mt-4 mx-auto max-w-[800px]">
        <Title>{id ? 'Editar' : 'Crear'} Categoría</Title>
        <section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div>
              <Text>Nombre:</Text>
              <Controller
                control={control}
                name="name"
                rules={{ required: 'Este campo es requerido' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    placeholder=""
                    value={value}
                    onValueChange={onChange}
                    error={!!errors?.name}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
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
            <div className="flex flex-col md:flex-row justify-between gap-3">
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
                <Text>Archivo</Text>
                <input type="file"/>
              </div>
            </div>
            <footer className="flex justify-center">
              <Button icon={IoSave} type="submit">
                Guardar cambios
              </Button>
            </footer>
          </form>
        </section>
      </Card>
    </ViewLayout>
  )
}
