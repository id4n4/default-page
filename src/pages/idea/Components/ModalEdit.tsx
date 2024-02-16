import { IdeasInfo } from '@/mocks/ideas'
import {
  Button,
  Dialog,
  DialogPanel,
  Metric,
  Text,
  TextInput,
  Textarea
} from '@tremor/react'
import { type FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { type Ideas } from '../interface/idea'

interface Props {
  isOpen: boolean
  handleClose: () => void
  idIdea?: number
}

const initialValues: Ideas = {
  title: '',
  description: ''
}

export const ModalEdit: FC<Props> = ({ isOpen, handleClose, idIdea }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValues
  })

  const getInfoIdea = () => {
    for (const convocatory of IdeasInfo) {
      for (const idea of convocatory.ideas) {
        if (idea.id === idIdea) {
          reset({
            title: idea.title,
            description: idea.description
          })
        }
      }
    }
  }
  const onSubmit = (data: Ideas) => {
    console.log(data)
    idIdea ? onEdit(data) : onCreate(data)
  }
  const onEdit = (data: Ideas) => {
    console.log('edit')
    console.log(data)
    handleClose()
  }
  const onCreate = (data: Ideas) => {
    console.log('create')
    console.log(data)
    handleClose()
  }

  useEffect(() => {
    getInfoIdea()
  }, [idIdea])

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogPanel>
        <Metric className='text-center'>{idIdea ? 'Editar' : 'Crear'} Idea</Metric>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <main className="flex flex-col gap-3">
            <div>
              <Text>Nombre</Text>
              <Controller
                name="title"
                control={control}
                rules={{ required: 'Campo requerido' }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    value={value}
                    onValueChange={onChange}
                    placeholder="Nombre"
                    error={!!errors?.title}
                    errorMessage={errors?.title?.message}
                  />
                )}
              />
            </div>
            <div>
              <Text>Descripción</Text>
              <Controller
                name="description"
                control={control}
                rules={{ required: 'Campo requerido' }}
                render={({ field: { value, onChange } }) => (
                  <Textarea
                    value={value}
                    onValueChange={onChange}
                    placeholder="Descripción"
                    error={!!errors?.description}
                    errorMessage={errors?.description?.message}
                    rows={5}
                  />
                )}
              />
            </div>
          </main>
          <br />
          <footer className='flex justify-center gap-2'>
            <Button type="submit">Guardar</Button>
            <Button type="button" color='gray' onClick={handleClose}>
              Cancelar
            </Button>
          </footer>
        </form>
      </DialogPanel>
    </Dialog>
  )
}
