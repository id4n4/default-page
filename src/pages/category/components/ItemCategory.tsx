import { ModalDelete } from '@/components/Modal'
import { StatusBadges } from '@/components/badges'
import { LiAnimated } from '@/components/listas'
import { Button, Card, Metric, Switch, Text, Title } from '@tremor/react'
import { type FC, useState } from 'react'
import { IoPencilSharp, IoRemoveCircle } from 'react-icons/io5'

interface Props {
  id: number
  name: string
  description: string
  entityName: string
  active: boolean
}

export const ItemCategory: FC<Props> = ({
  id,
  name,
  description,
  entityName,
  active
}) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleEdit = () => {
    console.log('edit')
  }
  const handleChangeState = () => {
    console.log('change state')
  }
  const handleDelete = () => {
    console.log('delete')
    setIsDeleting(false)
  }
  return (
    <LiAnimated>
      <Card>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="flex-grow flex flex-col gap-2">
            <Metric>{name}</Metric>
            <Text>{description}</Text>
            <StatusBadges isActive={active} />
          </div>
          <div className="grid grid-cols-2 items-center gap-x-3">
            <Title>Entidad:</Title>
            <Text>{entityName}</Text>
          </div>
          <div className="flex gap-2 items-center">
            <Button icon={IoPencilSharp} onClick={handleEdit}>
              Editar
            </Button>
            <Button
              icon={IoRemoveCircle}
              color="slate"
              onClick={() => {
                setIsDeleting(true)
              }}
            >
              Eliminar
            </Button>
            <Switch
              checked={active}
              onChange={handleChangeState}
              tooltip={active ? 'Desactivar' : 'Activar'}
            />
          </div>
        </section>
        <ModalDelete
          isOpen={isDeleting}
          hideModal={() => {
            setIsDeleting(false)
          }}
          handleDelete={handleDelete}
        />
      </Card>
    </LiAnimated>
  )
}
