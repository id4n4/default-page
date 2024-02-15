import { Button, Card, Metric, Switch, Text, Title } from '@tremor/react'
import { IoPencilSharp, IoRemoveCircle } from 'react-icons/io5'
import { useState, type FC } from 'react'
import { StatusBadges } from '@/components/badges'
import { useNavigate } from 'react-router-dom'
import { PATH_CONVOCATORY_EDIT } from '@/constants/routePaths'
import { LiAnimated } from '@/components/listas'
import { ModalDelete } from '@/components/Modal'
interface Props {
  id: number
  title: string
  description: string
  startDate: string
  finishDate: string
  entityName: string
  active: boolean
}

export const ItemConvocatory: FC<Props> = ({
  id,
  title,
  description,
  startDate,
  finishDate,
  entityName,
  active
}) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`${PATH_CONVOCATORY_EDIT}/${id}`)
  }
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    console.log('delete')
    setIsDeleting(false)
  }
  const handleChangeState = () => {
    console.log('change state')
  }
  return (
    <LiAnimated>
      <Card>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="flex-grow flex flex-col gap-2">
            <Metric>{title}</Metric>
            <Text>{description}</Text>
            <StatusBadges isActive={active} />
          </div>
          <div className='flex flex-col items-start justify-center xl:items-center xl:flex-row gap-2'>
            <div className="grid grid-cols-2 items-center gap-x-3 min-w-max">
              <Title>Entidad:</Title>
              <Text>{entityName}</Text>
              <Title>Fecha de inicio:</Title>
              <Text>{startDate}</Text>
              <Title>Fecha de fin:</Title>
              <Text>{finishDate}</Text>
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
          </div>
        </section>
        <ModalDelete
          isOpen={isDeleting}
          hideModal={() => {
            setIsDeleting(false)
          }}
          handleDelete={handleDelete}
          itemName="convocatoria"
        />
      </Card>
    </LiAnimated>
  )
}
