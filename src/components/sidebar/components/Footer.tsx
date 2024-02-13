import { Link } from 'react-router-dom'
import { Button, Text } from '@tremor/react'
import { IoLogOutOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
import { navFooter } from '@/mocks/sidebar'

export const Footer = () => {
  const authContext = useContext(AuthContext)

  return (
    <>
      {navFooter.map(({ path, icon: Icon, name }, idx) => (
        <li key={idx}>
          <Link
            to={path}
            className='flex items-center gap-x-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-gray-50'
          >
            <div className='text-customDark-primary'>
               <Icon />
            </div>
            <Text className='text-current transition-all duration-150 ease-in-out select-none'>
              {name}
            </Text>
          </Link>
        </li>
      ))}
      <li>
        <Button
          icon={IoLogOutOutline}
          onClick={() => authContext?.logout()}
          variant='light'
          className='w-full text-start px-3 rounded-lg py-2 justify-start hover:bg-gray-50'
        >
          <Text className='text-current transition-all duration-150 ease-in-out select-none'>
            Cerrar sesión
          </Text>
        </Button>
      </li>
    </>
  )
}
