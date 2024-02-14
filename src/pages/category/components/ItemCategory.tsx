import { ModalDelete } from '@/components/Modal'
import { StatusBadges } from '@/components/badges'
import { LiAnimated } from '@/components/listas'
import { Button, Card, Metric, Switch, Text, Title } from '@tremor/react'
import { type FC, useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { IoPencilSharp, IoRemoveCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const [isDeleting, setIsDeleting] = useState(false)
  const handleEdit = () => {
    console.log('edit')
    navigate(`/category/edit/${id}`)
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
        <section className="flex flex-col xl:flex-row gap-5 ">
          <div className="flex flex-col gap-2 flex-grow">
            <Metric>{name}</Metric>
            <p className='text-customLight-paragraph'>{description}</p>
            <StatusBadges isActive={active} />
          </div>
          <div className="self-center grid grid-cols-2 items-center gap-3 min-w-max">
            <Title>Entidad:</Title>
            <Text>{entityName}</Text>
            <div className="col-span-2 flex justify-center">
              <Button variant='light' color='red' icon={FaFilePdf}>Ver Documento</Button>
            </div>
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
          itemName='categoría'
        />
      </Card>
    </LiAnimated>
  )
}
