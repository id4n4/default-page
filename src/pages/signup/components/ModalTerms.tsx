import { terms, titleTerms } from '@/mocks/terms'
import { Button, Dialog, DialogPanel, Subtitle, Text, Title } from '@tremor/react'
import { type FC } from 'react'

interface Props {
  modalTerms: boolean
  hideModalTerms: () => void
  acceptTerms: () => void
}

export const ModalTerms: FC<Props> = ({
  modalTerms,
  hideModalTerms,
  acceptTerms
}) => {
  return (
    <Dialog open={modalTerms} onClose={hideModalTerms}>
      <DialogPanel>
        <Title className='mb-3 text-center'>{titleTerms}</Title>
        {
            terms.map(({ title, content }, idx) => (
              <div
                key={idx} className='mb-2'
              >
                <Subtitle className='text-black'>{title}</Subtitle>
                <Text>{content}</Text>
              </div>
            ))
          }
        <div className='mt-10 space-x-2'>
          <Button onClick={acceptTerms}>
            Confirmar
          </Button>
          <Button variant='secondary' onClick={hideModalTerms}>
            Cancelar
          </Button>
        </div>

      </DialogPanel>
    </Dialog>
  )
}
