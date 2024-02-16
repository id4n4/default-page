import { ConvocatoryData } from '@/mocks/convocatory'
import { Button, Divider, SearchSelect, SearchSelectItem, Select, SelectItem, TextInput, Title } from '@tremor/react'
import { IoAdd, IoSearchOutline } from 'react-icons/io5'

export const Header = () => {
  const handleAdd = () => {
    console.log('Add')
  }
  return (
    <header>
      <Title className="text-center">Proyectos</Title>
      <div className="mt-4 flex gap-2 flex-col md:flex-row">
        <TextInput icon={IoSearchOutline} placeholder="Buscar Proyecto" />
        <Button icon={IoAdd} color="indigo" onClick={handleAdd}>
          Agregar Proyecto
        </Button>
      </div>
      <Divider className='my-2'/>
        <div className="flex flex-col md:flex-row gap-2 justify-start">
          <SearchSelect placeholder="Convocatorias">
            {
              ConvocatoryData.map((convocatory) => (
                <SearchSelectItem key={convocatory.id} value={(convocatory.id).toString()}>
                  {convocatory.title}
                </SearchSelectItem>
              ))
            }
          </SearchSelect>
          <Select placeholder="Rol" enableClear >
            <SelectItem value="0">Todos</SelectItem>
            <SelectItem value="1">Propietario</SelectItem>
            <SelectItem value="2">Colaborador</SelectItem>
          </Select>
          <Button variant="secondary" color="gray" className='self-end'>
            Filtrar
          </Button>
        </div>
    </header>
  )
}
