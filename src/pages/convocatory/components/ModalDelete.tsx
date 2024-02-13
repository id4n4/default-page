import { Button, Dialog, DialogPanel, Icon } from '@tremor/react'
import { type FC } from 'react'
import { IoTrashBin } from 'react-icons/io5'

interface Props {
  isOpen: boolean
  hideModal: () => void
  handleDelete: () => void
}

export const ModalDelete: FC<Props> = ({ isOpen, hideModal, handleDelete }) => {
  return (

    <Dialog open={isOpen} onClose={hideModal} >
      <DialogPanel className='max-w-sm flex flex-col items-center'>
        <Icon icon={IoTrashBin} color='red' size='xl' className='justify-center'/>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          ¿Estas seguro que deseas eliminar esta convocatoria?
        </p>
        <div className='mt-2 flex gap-2'>
          <Button onClick={handleDelete} color='red'>
            Si, eliminar
          </Button>
          <Button onClick={hideModal} color='gray' variant='secondary'>
            No, cancelar
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
