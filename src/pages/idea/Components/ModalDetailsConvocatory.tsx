import { ConvocatoryData } from '@/mocks/convocatory'
import { Button, Dialog, DialogPanel, Metric, Text } from '@tremor/react'
import { useMemo, type FC } from 'react'
import { IoClose } from 'react-icons/io5'

interface Props {
  isOpen: boolean
  idConvocatory: number
  handleClose: () => void
}

export const ModalDetailsConvocatory: FC<Props> = ({ isOpen, handleClose, idConvocatory }) => {
  const convocatoryInfo = useMemo(() => {
    return ConvocatoryData.find((convocatory) => convocatory.id === idConvocatory)
  }, [idConvocatory])

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogPanel>
        {
          convocatoryInfo && (
            <section>
              <Metric className='text-center'>{convocatoryInfo.title}</Metric>
              <br />
              <Text>{convocatoryInfo.description}</Text>
              <br />
              <div className='grid grid-cols-2'>
                <Text className='font-medium'>Entidad:</Text>
                <Text>{convocatoryInfo.entityName}</Text>
                <Text className='font-medium'>Fecha de inicio:</Text>
                <Text >{convocatoryInfo.startDate}</Text>
                <Text className='font-medium'>Fecha de finalización:</Text>
                <Text>{convocatoryInfo.finishDate}</Text>
              </div>
            </section>
          )
        }
        <Button variant='light' className="absolute top-2 right-2" onClick={handleClose}>
          <IoClose className='text-2xl'/>
        </Button>
      </DialogPanel>
    </Dialog>
  )
}
