import { LiAnimated } from '@/components/listas'
import { Card, Title } from '@tremor/react'
import { type Ideas } from '../interface/idea'
import { TooltipOptions } from './TooltipOptions'
import { type FC } from 'react'
import { useItemIdea } from '../hooks/useItemIdea'
import { ModalShare } from './ModalShare'
import { ModalEdit } from './ModalEdit'
import { ModalDelete } from '@/components/Modal'

export const ItemIdea: FC<Ideas> = ({ id, title, description }) => {
  const { state, handlers } = useItemIdea()
  const { isVisibleModalShare, isVisibleModalEdit, isVisibleModalDelete } = state
  const { handleShare, handleEdit, handleDelete, onDelete } = handlers
  return (
    <LiAnimated>
      <Card className='relative h-full'>
        <TooltipOptions handleDelete={handleDelete} handleEdit={handleEdit} handleShare={handleShare} />
        <Title>{title}</Title>
        <p
          className="overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </p>
      </Card>
      <ModalShare isOpen={isVisibleModalShare} handleClose={handleShare} />
      <ModalEdit isOpen={isVisibleModalEdit} handleClose={handleEdit} idIdea={id} />
      <ModalDelete isOpen={isVisibleModalDelete} hideModal={handleDelete} itemName='Idea' handleDelete={() => { onDelete(id) }} />
    </LiAnimated>
  )
}
