import { Button, Divider, MultiSelect, MultiSelectItem, Select, SelectItem, TextInput, Title } from '@tremor/react'
import { IoAdd, IoSearchOutline } from 'react-icons/io5'

export const Header = () => {
  return (
    <header>
        <Title className='text-center'>Lista de categorías</Title>
        <div className="mt-4 flex gap-2 flex-col md:flex-row">
          <TextInput icon={IoSearchOutline} placeholder="Buscar convocatoria" />
          <Button icon={IoAdd} color="indigo">
            Agregar convocatoria
          </Button>
        </div>
        <Divider className='my-2'/>
        <div className="flex flex-col md:flex-row gap-2 justify-start">
          <MultiSelect placeholder="Entidades">
            <MultiSelectItem value="1">Convocatorias activas</MultiSelectItem>
            <MultiSelectItem value="2">Convocatorias inactivas</MultiSelectItem>
          </MultiSelect>
          <Select placeholder="Estado" enableClear >
            <SelectItem value="0">Todos</SelectItem>
            <SelectItem value="1">Activos</SelectItem>
            <SelectItem value="2">Inactivos</SelectItem>
          </Select>
          <Button variant="secondary" color="gray" className='self-end'>
            Filtrar
          </Button>
        </div>
      </header>
  )
}
