import { Button, TextInput, Title } from '@tremor/react'
import { IoAdd, IoSearchOutline } from 'react-icons/io5'

export const Header = () => {
  return (
    <header>
        <Title className='text-center'>Lista de categorías</Title>
        <div className="mt-4 flex gap-2 flex-col md:flex-row justify-between">
          <TextInput icon={IoSearchOutline} placeholder="Buscar convocatoria" className='w-[20rem]'/>
          <Button icon={IoAdd} color="indigo">
            Agregar convocatoria
          </Button>
        </div>
      </header>
  )
}
