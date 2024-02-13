import { Button, DateRangePicker, Divider, MultiSelect, MultiSelectItem, TextInput, Title } from '@tremor/react'
import { IoAdd, IoSearchOutline } from 'react-icons/io5'
import { es } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'
import { PATH_CONVOCATORY_CREATE } from '@/constants/routePaths'

export const Header = () => {
  const navigate = useNavigate()
  const handleAdd = () => { navigate(PATH_CONVOCATORY_CREATE) }
  return (
    <header>
        <Title className='text-center'>Lista de convocatorias</Title>
        <div className="mt-4 flex gap-2 flex-col md:flex-row">
          <TextInput icon={IoSearchOutline} placeholder="Buscar convocatoria" />
          <Button icon={IoAdd} color="indigo" onClick={handleAdd}>
            Agregar convocatoria
          </Button>
        </div>
        <Divider className='my-2'/>
        <div className="flex flex-col md:flex-row gap-2 justify-start">
          <MultiSelect placeholder="Entidades">
            <MultiSelectItem value="1">Convocatorias activas</MultiSelectItem>
            <MultiSelectItem value="2">Convocatorias inactivas</MultiSelectItem>
          </MultiSelect>
          <DateRangePicker
            locale={es}
            className="mx-auto max-w-md"
            enableSelect={false}
            placeholder="Rango de fecha"
          />
          <Button variant="secondary" color="gray" className='self-end'>
            Filtrar
          </Button>
        </div>
      </header>
  )
}
