import { Button, Dialog, DialogPanel, Metric } from '@tremor/react'
import { type FC } from 'react'

interface Props {
  isOpen: boolean
  handleClose: () => void
}

export const ModalShare: FC<Props> = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogPanel>
        <Metric className="text-center">Compartir !!</Metric>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Falta Definir a quién o a que se comparte
        </p>
        <Button className="mt-8 w-full" onClick={handleClose}>
          Compartir
        </Button>
      </DialogPanel>
    </Dialog>
  )
}
