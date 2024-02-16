import { CollapseIconAnimated } from '@/components/icons/CollapseIconAnimated'
import { LiAnimated } from '@/components/listas'
import { Button, Card, Title } from '@tremor/react'
import { type FC, useState } from 'react'
import { type Ideas } from '../interface/idea'
import { ListIdeas } from './ListIdeas'
import { IoEye } from 'react-icons/io5'
import { ModalDetailsConvocatory } from './ModalDetailsConvocatory'

interface Props {
  idConvocatory: number
  title: string
  ideas: Ideas[]
}

export const ItemConvocatory: FC<Props> = ({ idConvocatory, title, ideas }) => {
  const [isVisibleIdeas, setIsVisibleIdeas] = useState(false)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  const handleVisibleIdeas = () => {
    setIsVisibleIdeas((value) => !value)
  }
  const openDetails = () => { setIsDetailsVisible(true) }
  const closeDetails = () => { setIsDetailsVisible(false) }
  return (
    <LiAnimated>
      <section className="bg-customDark-background rounded-lg duration-500 ">
        <Card className="p-2 flex justify-between items-center">
          <Title>{title}</Title>
          <div className="flex items-center gap-2">
            <Button icon={IoEye} onClick={openDetails}>Detalles</Button>
            <Button
              variant="secondary"
              onClick={handleVisibleIdeas}
              color="gray"
            >
              <CollapseIconAnimated isCollapsed={isVisibleIdeas} />
            </Button>
          </div>
        </Card>
        <ListIdeas isVisibleIdeas={isVisibleIdeas} ideas={ideas} />
      </section>
      <ModalDetailsConvocatory isOpen={isDetailsVisible} handleClose={closeDetails} idConvocatory={idConvocatory} />
    </LiAnimated>
  )
}
