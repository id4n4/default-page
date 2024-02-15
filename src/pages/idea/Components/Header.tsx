import { TextInput, Title } from '@tremor/react'
import { IoSearchOutline } from 'react-icons/io5'

export const Header = () => {
  return (
    <header>
        <Title className='text-center'>Ideas</Title>
        <div className="mt-4 flex gap-2 flex-col md:flex-row">
          <TextInput icon={IoSearchOutline} placeholder="Buscar convocatoria" />
        </div>
      </header>
  )
}
