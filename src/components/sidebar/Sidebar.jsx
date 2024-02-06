import { Button, Divider, Text, Title } from '@tremor/react'
import { MainIcon } from '../Icons/MainIcon'
import { navFooter, navigation } from '../../mocks/sidebar'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SidebarContext } from '../../context/sidebarProvider'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const Sidebar = () => {
  const { isSidebarVisible, handleSidebarVisibility } =
    useContext(SidebarContext)
  return (
    <nav
      className='bg-customDark-background text-white w-[15rem] h-full p-5 overflow-hidden flex flex-col'
      style={{
        // si es visible, el ancho es 15rem, si no, es 4rem y debe tener animación
        overflow: 'hidden',
        width: 'auto',
        transition: 'width 0.3s ease'
      }}
    >
      <div className='flex gap-2'>
        <MainIcon size={isSidebarVisible ? 'xl' : 'md'} />
        {
          isSidebarVisible && (
            <Title className='text-customDark-main'>
              Gestión Inteligente de proyectos
            </Title>
          )
        }
      </div>
      <br />
      {/* MENU */}
      <div className='flex-grow flex flex-col overflow-hidden'>
        <ul className='flex-grow'>
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className='flex items-center gap-x-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-customDark-main hover:font-medium duration-150'
              >
                <div className='text-customDark-primary'>{item.icon}</div>
                {
                  isSidebarVisible && (
                    <Text className='text-current'>
                      {item.name}
                    </Text>
                  )
                }
              </Link>
            </li>
          ))}
        </ul>
        <Divider />
        {/* FOOTER */}
        <ul>
          {navFooter.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className='flex items-center gap-x-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-gray-50 hover:font-medium duration-150'
              >
                <div className='text-customDark-primary'>{item.icon}</div>
                {
                  isSidebarVisible && (
                    <Text className='text-current'>
                      {item.name}
                    </Text>
                  )
                }
              </Link>
            </li>
          ))}
        </ul>
        <br />
        <Button onClick={handleSidebarVisibility} className='px-1'>
          {isSidebarVisible ? <AiOutlineLeft /> : <AiOutlineRight />}
        </Button>
      </div>
    </nav>
  )
}
